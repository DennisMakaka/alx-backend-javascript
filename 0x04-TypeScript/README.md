# 0x04. TypeScript

## Project Overview

This project explores the basics and advanced concepts of TypeScript, focusing on various aspects such as basic types, interfaces, classes, DOM manipulation, generic types, and namespaces. Additionally, you'll learn how to work with external libraries and use nominal typing. The project is set up to run on Ubuntu 18.04, and all tasks will be checked using **Jest**.

## Learning Objectives

By the end of this project, you should be able to:

- Understand and use basic types in TypeScript.
- Create and extend interfaces and classes.
- Manipulate the DOM using TypeScript.
- Work with generic types.
- Use namespaces effectively.
- Merge declarations and work with ambient namespaces to import external libraries.
- Apply basic nominal typing with TypeScript.

## Requirements

- **Editors**: `vi`, `vim`, `emacs`, `Visual Studio Code`
- **Environment**: Transpilation on Ubuntu 18.04
- **Testing**: Code is tested with Jest (version 24.9.\*)
- **File Format**: All files must end with a new line.
- **Transpilation**: No warnings or errors from TypeScript compiler when transpiling.
- **TypeScript Extension**: All TypeScript files must use the `.ts` extension.

## Configuration Files

Use the following configuration files for the project:

- **package.json**
- **.eslintrc.js**
- **tsconfig.json**
- **webpack.config.js**

These files are provided and should be copied to the appropriate directories as outlined in the tasks.

## Tasks

### Task 0: Creating an Interface for a Student

- Create an interface `Student` with properties `firstName`, `lastName`, `age`, and `location`.
- Render a table in the DOM using Vanilla JavaScript, displaying student names and their locations.
- Ensure no TypeScript errors occur during transpilation.

Files:
- `task_0/js/main.ts`
- `task_0/package.json`
- `task_0/.eslintrc.js`
- `task_0/tsconfig.json`
- `task_0/webpack.config.js`

---

### Task 1: Building a Teacher Interface

- Create an interface `Teacher` with properties like `firstName`, `lastName`, `fullTimeEmployee`, `yearsOfExperience` (optional), and `location`.
- Allow for adding any additional attributes like `contract`.

Files:
- `task_1/js/main.ts`
- `task_1/package.json`
- `task_1/tsconfig.json`
- `task_1/webpack.config.js`

---

### Task 2: Extending the Teacher Class

- Create an interface `Directors` that extends `Teacher` and adds the attribute `numberOfReports`.
- Create instances of this interface and test it.

Files:
- `task_1/js/main.ts`

---

### Task 3: Printing Teachers

- Implement a function `printTeacher` that accepts `firstName` and `lastName` and returns them formatted as `FirstInitial. LastName`.
- Create an interface for this function.

Files:
- `task_1/js/main.ts`

---

### Task 4: Writing a Student Class

- Create a `StudentClass` with methods `workOnHomework` and `displayName`.
- Describe the constructor and class using interfaces.

Files:
- `task_1/js/main.ts`

---

### Task 5: Advanced Types - Part 1

- Create interfaces `DirectorInterface` and `TeacherInterface` with specific methods.
- Implement the interfaces in `Director` and `Teacher` classes.
- Write a function `createEmployee` that returns a `Director` or `Teacher` based on the salary.

Files:
- `task_2/js/main.ts`
- `task_2/package.json`
- `task_2/tsconfig.json`
- `task_2/webpack.config.js`

---

### Task 6: Employee-specific Functions

- Implement the function `isDirector` to check if an employee is a director.
- Implement the function `executeWork` to execute the appropriate task based on the employee type.

Files:
- `task_2/js/main.ts`

---

### Task 7: String Literal Types

- Create a string literal type `Subjects` for `Math` and `History`.
- Write a function `teachClass` to return the appropriate string based on the class.

Files:
- `task_2/js/main.ts`

---

### Task 8: Ambient Namespaces

- Define types `RowID` and an interface `RowElement` for rows.
- Create a `.d.ts` file for a CRUD library (`crud.js`) to declare its functions.
- Use these types and the CRUD library in `main.ts` to insert, update, and delete rows.

Files:
- `task_3/js/main.ts`
- `task_3/js/crud.d.ts`
- `task_3/interface.ts`
- `task_3/package.json`
- `task_3/tsconfig.json`
- `task_3/webpack.config.js`

---

## Testing and Building

- To run the development server: `npm run start-dev`
- To build the project: `npm run build`
- To run tests: `npm test`

