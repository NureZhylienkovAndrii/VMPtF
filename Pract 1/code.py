# Level 1
# Напишіть функцію, яка приймає три параметри (a, b, c) і виводить на екран найменше з них.

def find_min(a, b, c):
    print("Least number:", min(a, b, c))

find_min(5, 2, 8)


# Level 2
# Напишіть функцію, яка приймає рядок та повертає його обернений варіант. Наприклад, "hello" повинно повернути "olleh".

def reverse_string(s):
    return s[::-1]

print("Reversed string:", reverse_string("hello"))


# Level 3
# Реалізуйте програму, яка визначає, чи є слово паліндромом (читається однаково з обох боків).

def is_palindrome(word):
    return word == word[::-1]

word = "level"
if is_palindrome(word):
    print(f"{word} — palindrom")
else:
    print(f"{word} — non palindrom")


# Level 4
# Розробіть алгоритм сортування масиву чисел методом швидкого сортування (QuickSort) та виведіть відсортований масив.

def quicksort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quicksort(left) + middle + quicksort(right)

numbers = [5, 3, 8, 4, 2, 7, 1, 10]
print(quicksort(numbers))
