// Defining the `Subjects` namespace to encapsulate interfaces and classes related to teaching subjects
namespace Subjects {

  // Extending the `Teacher` interface to include experience in teaching Java
  export interface Teacher {
    experienceTeachingJava?: number;  // Optional property indicating years of experience teaching Java
  }

  // Defining the `Java` class which extends the `Subject` class from the same namespace
  export class Java extends Subject {

    // Method to return the list of requirements for the Java subject
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    // Method to return the available teacher for the Java subject
    // Checks if the teacher has experience teaching Java, otherwise returns a default message
    getAvailableTeacher(): string {
      // If the teacher has no experience teaching Java, return a message indicating no available teacher
      if (!this.teacher.experienceTeachingJava) {
        return "No available teacher";
      }

      // If the teacher has experience, return the teacher's first name
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

