# 0x03. ES6 Data Manipulation

## Overview
This project focuses on data manipulation using **ES6** features in JavaScript. The project will help you understand how to work with arrays, typed arrays, and advanced data structures such as Sets, Maps, and WeakMaps. Additionally, you will learn how to use important array functions like `map()`, `filter()`, and `reduce()`.

## Learning Objectives
By the end of this project, you should be able to:

- Use `map()`, `filter()`, and `reduce()` functions on arrays.
- Work with Typed Arrays in JavaScript.
- Understand and utilize the Set, Map, and WeakMap data structures.

## Requirements
- **OS**: Ubuntu 18.04 LTS
- **NodeJS version**: 12.11.x
- **Editors**: `vi`, `vim`, `emacs`, `Visual Studio Code`
- **Files**: All files should end with a new line.
- **Code**: All code should use the `.js` extension.
- **Testing**: Your code will be tested using Jest and the command `npm run test`.
- **Linting**: Your code must pass ESLint. Use `npm run lint` to check.
- **Export Functions**: All functions must be exported.

## Setup
### Install NodeJS 12.11.x
Run the following commands in your home directory to install Node.js:
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v  # should output v12.11.1
npm -v     # should output 6.11.3
```

## Tasks

### 0. Initializing Project
Create a GitHub repository with the following details:
- Repository name: `holbertonschool-low_level_programming`
- Description: "C programming project for Holberton School"
- Create a README.md file with a description of the project.

---

### 1. Compilation and Printing
Write a script that compiles a simple C program with the following requirements:
- The C program should print "Hello, World" followed by a new line.
- The script should save the output in an executable file called `hello`.

---

### 2. Variables and Data Types
Create a C program that declares and initializes the following types of variables:
- `int`
- `float`
- `char`
- Print the value of each variable on a new line.

---

### 3. Basic Operators
Write a C program that performs and prints the result of basic arithmetic operations (addition, subtraction, multiplication, division) using two `int` variables.

---

### 4. Conditional Statements
Write a C program that takes an integer input from the user and prints:
- "Positive" if the number is greater than 0.
- "Negative" if the number is less than 0.
- "Zero" if the number is 0.

---

### 5. Loops and Iteration
Write a C program that prints numbers from 1 to 10 using a `for` loop. Each number should be printed on a new line.

---

### 6. Functions and Prototypes
Write a C function `int add(int a, int b)` that takes two integers as input and returns their sum. Call this function from the `main` function and print the result.

---

### 7. Arrays and Pointers
Write a C program that declares an array of 10 integers, assigns values to each element, and prints each value using a `for` loop.

---

### 8. String Manipulation
Write a C function `void reverse_string(char *str)` that reverses a given string. Print the original and reversed string from the `main` function.

---

### 9. Dynamic Memory Allocation
Write a C program that allocates memory for an array of 10 integers using `malloc`. Assign values to each element and print the values. Free the memory after use.

---

### 10. Structures
Define a C structure `struct student` with the following fields:
- `int id`
- `char name[50]`
- `float grade`
Write a C program that declares a `struct student`, assigns values to the fields, and prints them.

