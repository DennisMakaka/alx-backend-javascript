// Interface defining the structure for a Teacher object
interface Teacher {
  readonly firstName: string; // First name of the teacher, can only be set during initialization
  readonly lastName: string; // Last name of the teacher, can only be set during initialization
  fullTimeEmployee: boolean; // Boolean indicating if the teacher is a full-time employee
  yearsOfExperience?: number; // Optional property for the number of years the teacher has been working
  location: string; // Location of the teacher, must always be provided
  [propName: string]: any; // Allows additional properties to be added dynamically
}

// Example usage of Teacher interface (commented out)
// const teacher3: Teacher = {
//   firstName: "John",
//   fullTimeEmployee: false,
//   lastName: "Doe",
//   location: "London",
//   contract: false,
// };

// console.log(teacher3);

// Interface extending Teacher to include director-specific properties
interface Directors extends Teacher {
  numberOfReports: number; // Number of reports a director handles
}

// Example usage of Directors interface (commented out)
// const director1: Directors = {
//   firstName: "John",
//   lastName: "Doe",
//   location: "London",
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };
// console.log(director1);

// Interface for a function that returns a formatted name
interface printTeacherFunction {
  (firstName: string, lastName: string): string; // Function type that accepts first and last names and returns a string
}

// Function that implements printTeacherFunction, returns formatted name as "F. LastName"
export const printTeacher: printTeacherFunction = function (
  firstName: string,
  lastName: string
): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage of printTeacher function (commented out)
// console.log(printTeacher("John", "Doe"));

// Interface defining the structure for a constructor function that creates a StudentClass
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface; // Constructor signature returning a StudentClassInterface
}

// Interface defining the methods that a student class should implement
interface StudentClassInterface {
  workOnHomework(): string; // Method that returns a string indicating the student is working on homework
  displayName(): string; // Method that returns the student's first name
}

// Class implementing the StudentClassInterface
export class StudentClass implements StudentClassInterface {
  firstName: string; // First name of the student
  lastName: string; // Last name of the student

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method that returns a message indicating the student is working on homework
  workOnHomework(): string {
    return "Currently working";
  }

  // Method that returns the student's first name
  displayName(): string {
    return this.firstName;
  }
}

