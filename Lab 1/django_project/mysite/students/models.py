from django.db import models

class Student(models.Model):
    full_name = models.CharField(max_length=100)
    group = models.CharField(max_length=20)

    math_grade = models.IntegerField()
    physics_grade = models.IntegerField()
    programming_grade = models.IntegerField()

    photo = models.ImageField(upload_to='students_photos/', blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.full_name