// Defining the `Subjects` namespace to encapsulate interfaces and classes related to teaching subjects
namespace Subjects {

  // Extending the `Teacher` interface to include experience in teaching React
  export interface Teacher {
    experienceTeachingReact?: number;  // Optional property indicating years of experience teaching React
  }

  // Defining the `React` class which extends the `Subject` class from the same namespace
  export class React extends Subject {

    // Method to return the list of requirements for the React subject
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    // Method to return the available teacher for the React subject
    // Checks if the teacher has experience teaching React, otherwise returns a default message
    getAvailableTeacher(): string {
      // If the teacher has no experience teaching React, return a message indicating no available teacher
      if (!this.teacher.experienceTeachingReact) {
        return "No available teacher";
      }

      // If the teacher has experience, return the teacher's first name
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

