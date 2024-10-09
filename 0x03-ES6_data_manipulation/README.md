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

# Task 0: Basic list of objects
## Description
Create a function named `getListStudents` that returns an array of objects.  
Each object should contain the following attributes:
- `id` (Number)
- `firstName` (String)
- `location` (String)

The array should contain the following students in order:
- Guillaume, id: 1, in San Francisco
- James, id: 2, in Columbia
- Serena, id: 5, in San Francisco

### Requirements
- Function name: `getListStudents`
- File: `0-get_list_students.js`
- Directory: `0x03-ES6_data_manipulation`

---

# Task 1: More mapping
## Description
Create a function `getListStudentIds` that returns an array of ids from a list of student objects.  
This function will take an array of objects (from `getListStudents`) as an argument.

If the argument is not an array, the function should return an empty array.

The function should use the `map` method to extract the `id` from each student object.

### Requirements
- Function name: `getListStudentIds`
- File: `1-get_list_student_ids.js`
- Directory: `0x03-ES6_data_manipulation`

---

# Task 2: Filter
## Description
Create a function `getStudentsByLocation` that returns an array of objects for students located in a specific city.  
The function should take two arguments:
- A list of students (from `getListStudents`)
- A city (String)

Use the `filter` method to return an array of students who are located in the specified city.

### Requirements
- Function name: `getStudentsByLocation`
- File: `2-get_students_by_loc.js`
- Directory: `0x03-ES6_data_manipulation`

---

# Task 3: Reduce
## Description
Create a function `getStudentIdsSum` that returns the sum of all student ids.  
The function should accept a list of students (from `getListStudents`) as its parameter.  

The function must use the `reduce` method to calculate the sum of all student ids.

### Requirements
- Function name: `getStudentIdsSum`
- File: `3-get_ids_sum.js`
- Directory: `0x03-ES6_data_manipulation`

---

# Task 4: Combine
## Description
Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their updated grade.  
The function should take three parameters:
1. A list of students (from `getListStudents`)
2. A city (String)
3. An array of grade objects, where each object contains:
   - `studentId` (Number)
   - `grade` (Number)

If a student doesn't have a grade in the `newGrades` array, their grade should be set to `"N/A"`.  
Use a combination of the `filter` and `map` methods to achieve this.

### Requirements
- Function name: `updateStudentGradeByCity`
- File: `4-update_grade_by_city.js`
- Directory: `0x03-ES6_data_manipulation`

---

# Task 5: Typed Arrays
## Description
Create a function `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.  
The function should accept three arguments:
- `length` (Number)
- `position` (Number)
- `value` (Number)

If adding the value at the specified position is not possible, throw an error: `"Position outside range"`.

### Requirements
- Function name: `createInt8TypedArray`
- File: `5-typed_arrays.js`
- Directory: `0x03-ES6_data_manipulation`

---

# Task 6: Set Data Structure
## Description
Create a function `setFromArray` that returns a `Set` from an array.  
The function should accept a single argument: an array of any kind of elements.

### Requirements
- Function name: `setFromArray`
- File: `6-set.js`
- Directory: `0x03-ES6_data_manipulation`

---

# Task 7: More Set Data Structure
## Description
Create a function `hasValuesFromArray` that returns `true` if all elements of an array exist within a `Set`.  
The function should accept two arguments:
1. A `Set`
2. An array of values

### Requirements
- Function name: `hasValuesFromArray`
- File: `7-has_array_values.js`
- Directory: `0x03-ES6_data_manipulation`

---

# Task 8: Clean Set
## Description
Create a function `cleanSet` that returns a string of all the set values that start with a specific string (`startString`).  
The function should accept two arguments:
1. A `Set`
2. A `startString`

If a value starts with the specified `startString`, append the rest of the string to the result. The values in the resulting string should be separated by a hyphen (`-`).

### Requirements
- Function name: `cleanSet`
- File: `8-clean_set.js`
- Directory: `0x03-ES6_data_manipulation`

---

# Task 9: Map Data Structure
## Description
Create a function `groceriesList` that returns a `Map` of groceries with the following items (name, quantity):
- Apples: 10
- Tomatoes: 10
- Pasta: 1
- Rice: 1
- Banana: 5

### Requirements
- Function name: `groceriesList`
- File: `9-groceries_list.js`
- Directory: `0x03-ES6_data_manipulation`

---

# Task 10: More Map Data Structure
## Description
Create a function `updateUniqueItems` that returns an updated map for all items with an initial quantity of 1.  
It should accept a `Map` as an argument. The map for argument should be similar to the one created in the previous task.  
For each entry in the map where the quantity is 1, update the quantity to 100. If the argument is not a `Map`, throw an error: `"Cannot process"`.

### Requirements
- Function name: `updateUniqueItems`
- File: `10-update_uniq_items.js`
- Directory: `0x03-ES6_data_manipulation`

# Task 11: Weak link data structure
## Advanced Task
Create a `WeakMap` instance and export it as `weakMap`.  
Then, export a function `queryAPI` that accepts an `endpoint` object with the following structure:

```js
{
  protocol: 'http',
  name: 'getUsers',
}
```
