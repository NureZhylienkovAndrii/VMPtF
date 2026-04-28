const express = require("express");
const cors = require("cors");
const path = require("path");
const tracks = require("./data/tracks");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/music", express.static(path.join(__dirname, "music")));

app.get("/", (req, res) => {
    res.send("🎵 Music Streaming API працює");
});

app.get("/api/tracks", (req, res) => {
    res.json(tracks);
});

app.get("/api/download/:filename", (req, res) => {
    const fileName = req.params.filename;

    const filePath = path.join(__dirname, "music", fileName);

    res.download(filePath, fileName, (err) => {
        if (err) {
            res.status(404).send("Файл не знайдено");
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});