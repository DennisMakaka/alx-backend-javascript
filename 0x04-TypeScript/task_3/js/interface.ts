// Defining a type alias `RowID` which is of type `number`
// This type will be used to represent the unique identifier for a row in the system
export type RowID = number;

// Defining an interface `RowElement` to represent the structure of a row object
// The row will have two required properties: `firstName` and `lastName`, both of type `string`
// There is also an optional property `age` which may or may not be present, and it is of type `number`
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optional property to represent the age of the person
}

