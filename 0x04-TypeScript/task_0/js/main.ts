// Define an interface 'Student' that describes the structure of a student object.
interface Student {
  firstName: string; // The student's first name
  lastName: string;  // The student's last name
  age: number;       // The student's age
  location: string;  // The student's location
}

// Create a student object 'student1' of type 'Student'.
const student1: Student = {
  firstName: "Larry",       // First name of the student
  lastName: "Hudson",       // Last name of the student
  age: 32,                  // Age of the student
  location: "San Francisco" // Location of the student
};

// Create a second student object 'student2' of type 'Student'.
const student2: Student = {
  firstName: "Karla",       // First name of the student
  lastName: "Dermond",      // Last name of the student
  age: 26,                  // Age of the student
  location: "New York"      // Location of the student
};

// Store both student objects in an array 'studentsList'.
// The array type is 'Array<Student>' which ensures only 'Student' objects can be stored.
const studentsList: Array<Student> = [student1, student2];

// Select the body element of the document to append elements to it later.
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];

// Create an HTML table element.
const table: HTMLTableElement = document.createElement("table");

// Create the 'thead' and 'tbody' sections for the table.
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Create the first row in the table head (thead) which will hold the column headers.
const rowHead: HTMLTableRowElement = thead.insertRow(0);

// Insert two cells into the header row: one for 'firstName' and one for 'location'.
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0); // First header cell
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1); // Second header cell

// Set the inner HTML of the header cells to indicate the column titles.
cell1Head.innerHTML = "firstName"; // Column header for first names
cell2Head.innerHTML = "location";  // Column header for locations

// Append the 'thead' (table header) to the table.
table.append(thead);

// Iterate through the 'studentsList' array, creating a table row for each student.
studentsList.forEach((student) => {
  // Insert a new row at the top of the table body (tbody).
  const row: HTMLTableRowElement = tbody.insertRow(0);

  // Insert two cells in each row: one for the first name and one for the location.
  const cell1: HTMLTableCellElement = row.insertCell(0); // First name cell
  const cell2: HTMLTableCellElement = row.insertCell(1); // Location cell

  // Populate the cells with the student's first name and location.
  cell1.innerHTML = student.firstName; // Set the student's first name
  cell2.innerHTML = student.location;  // Set the student's location
});

// Append the 'tbody' (table body) to the table.
table.append(tbody);

// Finally, append the complete table to the body of the document, so it is rendered in the DOM.
body.append(table);

