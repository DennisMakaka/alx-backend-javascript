// Defining a namespace `Subjects` to group related classes and interfaces
namespace Subjects {

  // Defining and exporting a class named `Subject` inside the `Subjects` namespace
  export class Subject {
    teacher: Teacher;  // A property `teacher` of type `Teacher` interface

    // A setter method to set the `teacher` property
    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}

