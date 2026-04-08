from django.shortcuts import render
from .models import Student

def student_list(request):
    students = Student.objects.all()  # отримуємо всіх студентів
    return render(request, 'students/student_list.html', {"students": students})