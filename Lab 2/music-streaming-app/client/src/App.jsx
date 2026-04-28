import { useEffect, useState } from "react";

function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tracks")
      .then((res) => res.json())
      .then((data) => setTracks(data))
      .catch((err) => console.error("Помилка завантаження треків:", err));
  }, []);

  const genres = ["All", ...new Set(tracks.map((track) => track.genre))];

  const filteredTracks =
    selectedGenre === "All"
      ? tracks
      : tracks.filter((track) => track.genre === selectedGenre);

  const addToPlaylist = (track) => {
    if (!playlist.find((item) => item.id === track.id)) {
      setPlaylist([...playlist, track]);
    }
  };

  const removeFromPlaylist = (id) => {
    setPlaylist(playlist.filter((track) => track.id !== id));
  };

  const getFileName = (url) => {
    return url.split("/").pop();
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        backgroundColor: "#111",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1>🎵 Music Streaming</h1>

      {/* Жанри */}
      <h2>Genres</h2>

      {genres.map((genre, index) => (
        <button
          key={index}
          onClick={() => setSelectedGenre(genre)}
          style={{
            marginRight: "10px",
            marginBottom: "15px",
            padding: "8px 15px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {genre}
        </button>
      ))}

      <hr />

      {/* Список треків */}
      <h2>Tracks</h2>

      {filteredTracks.map((track) => (
        <div
          key={track.id}
          style={{
            background: "#222",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{track.title}</h3>

          <p>
            {track.artist} — {track.genre}
          </p>

          {/* Play */}
          <button
            onClick={() => setCurrentTrack(track)}
            style={{ marginRight: "10px" }}
          >
            ▶ Play
          </button>

          {/* Download */}
          <a
            href={`http://localhost:3000/api/download/${getFileName(track.url)}`}
            style={{
              marginRight: "10px",
              color: "lightgreen",
              textDecoration: "none",
            }}
          >
            ⬇ Download
          </a>

          {/* Playlist */}
          <button onClick={() => addToPlaylist(track)}>
            ➕ Playlist
          </button>
        </div>
      ))}

      {/* Плеєр */}
      {currentTrack && (
        <div style={{ marginTop: "30px" }}>
          <h2>Now Playing</h2>
          <p>{currentTrack.title}</p>

          <audio
            controls
            autoPlay
            src={`http://localhost:3000${currentTrack.url}`}
            style={{ width: "100%" }}
          />
        </div>
      )}

      <hr />

      {/* Плейлист */}
      <h2>🎼 My Playlist</h2>

      {playlist.length === 0 && <p>Playlist is empty</p>}

      {playlist.map((track) => (
        <div
          key={track.id}
          style={{
            background: "#1a1a1a",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          {track.title}

          <button
            onClick={() => setCurrentTrack(track)}
            style={{ marginLeft: "15px", marginRight: "10px" }}
          >
            ▶
          </button>

          <button onClick={() => removeFromPlaylist(track.id)}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;