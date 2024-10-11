// Defining an interface for Director with three methods
interface DirectorInterface {
  workFromHome(): string; // Method to signify working from home
  getCoffeeBreak(): string; // Method to signify getting a coffee break
  workDirectorTasks(): string; // Method for director-specific tasks
}

// Defining an interface for Teacher with three methods
interface TeacherInterface {
  workFromHome(): string; // Method to signify working from home
  getCoffeeBreak(): string; // Method to signify getting a coffee break
  workTeacherTasks(): string; // Method for teacher-specific tasks
}

// Director class implementing the DirectorInterface
export class Director implements DirectorInterface {
  // Director working from home
  workFromHome(): string {
    console.log("Working from home");
    return "Working from home"; // Returns a message indicating the director is working from home
  }

  // Director getting a coffee break
  getCoffeeBreak(): string {
    console.log("Getting a coffee break");
    return "Getting a coffee break"; // Returns a message indicating the director is getting a coffee break
  }

  // Director performing director tasks
  workDirectorTasks(): string {
    console.log("Getting to director tasks");
    return "Getting to director tasks"; // Returns a message indicating the director is working on director tasks
  }
}

// Teacher class implementing the TeacherInterface
export class Teacher implements TeacherInterface {
  // Teachers cannot work from home
  workFromHome(): string {
    return "Cannot work from home"; // Returns a message indicating teachers cannot work from home
  }

  // Teachers cannot have a coffee break
  getCoffeeBreak(): string {
    return "Cannot have a break"; // Returns a message indicating teachers cannot take a coffee break
  }

  // Teachers performing teacher-specific tasks
  workTeacherTasks(): string {
    return "Getting to work"; // Returns a message indicating the teacher is working on teacher tasks
  }
}

// Function to create an employee based on salary input
export function createEmployee(salary: number | string): Teacher | Director {
  // If salary is a number and less than 500, return a new Teacher object
  if (typeof salary === "number" && salary < 500) return new Teacher();

  // For any other condition, return a new Director object
  return new Director();
}

// Uncommented example usages of createEmployee function
// console.log(createEmployee(200));  // Expected: Teacher object
// console.log(createEmployee(1000)); // Expected: Director object
// console.log(createEmployee("$500")); // Expected: Director object

// Type guard function to check if the employee is a Director
export function isDirector(
  employee: TeacherInterface | DirectorInterface
): employee is Director {
  // Checks if the employee has the 'workDirectorTasks' method, indicating a Director
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute the appropriate work based on employee type (Director or Teacher)
export function executeWork(
  employee: DirectorInterface | TeacherInterface
): string {
  let msg;

  // If the employee is a Director, execute director tasks
  if (isDirector(employee)) {
    msg = employee.workDirectorTasks();
  } else {
    // Otherwise, execute teacher tasks
    msg = employee.workTeacherTasks();
  }

  console.log(msg); // Logs the message (either director or teacher tasks)
  return msg; // Returns the message
}

// Uncommented example usages of executeWork function
// executeWork(createEmployee(200));  // Executes teacher tasks
// executeWork(createEmployee(1000)); // Executes director tasks

// Defining a type alias for subjects, either "Math" or "History"
type Subjects = "Math" | "History";

// Function to return a message based on the subject being taught
export function teachClass(todayClass: Subjects): string {
  // If the subject is "Math", return "Teaching Math"
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    // If the subject is "History", return "Teaching History"
    return "Teaching History";
  }
}

// Uncommented example usages of teachClass function
// console.log(teachClass("Math"));  // Expected output: "Teaching Math"
// console.log(teachClass("History"));  // Expected output: "Teaching History"

