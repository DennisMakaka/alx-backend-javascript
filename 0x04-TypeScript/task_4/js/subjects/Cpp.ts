// Defining the `Subjects` namespace to encapsulate related interfaces and classes
namespace Subjects {

  // Defining the `Teacher` interface inside the `Subjects` namespace
  // It includes an optional property `experienceTeachingC` that represents experience teaching C
  export interface Teacher {
    experienceTeachingC?: number;  // Optional number of years of experience teaching C
  }

  // Defining the `Cpp` class that extends the `Subject` class (from the same namespace)
  export class Cpp extends Subject {

    // Method to return a string containing the list of requirements for the C++ subject
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    // Method to check if there is a teacher available with experience teaching C++
    getAvailableTeacher(): string {
      // If the teacher has no experience teaching C, return "No available teacher"
      if (!this.teacher.experienceTeachingC) {
        return "No available teacher";
      }

      // If there is experience, return the first name of the available teacher
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

