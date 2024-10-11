/// <reference path="./crud.d.ts" />
// This reference directive includes the TypeScript declaration file `crud.d.ts` for providing type definitions for the `crud` module.

import { RowID, RowElement } from "./interface";
// Importing the `RowID` and `RowElement` types from the `interface` file, which will be used to define the shape of the data used in the CRUD operations.

import * as CRUD from "./crud";
// Importing all exports from the `crud` module as an object called `CRUD`, allowing the use of CRUD operations like `insertRow`, `updateRow`, and `deleteRow`.

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};
// Creating an object `row` of type `RowElement` with the properties `firstName` and `lastName`. This will be used to insert a new row in the system.

const newRowID: RowID = CRUD.insertRow(row);
// Inserting the `row` object into the system using the `CRUD.insertRow` method, which returns a unique `RowID` for the newly inserted row.

const updatedRow: RowElement = { ...row, age: 23 };
// Creating a new object `updatedRow` by copying the properties of the `row` object and adding a new property `age`. This object represents an updated version of the original row.

CRUD.updateRow(newRowID, updatedRow);
// Updating the row in the system using the `CRUD.updateRow` method. It takes the `newRowID` (the ID of the row to update) and the `updatedRow` object (the new values for the row).

CRUD.deleteRow(newRowID);
// Deleting the row from the system using the `CRUD.deleteRow` method, passing in the `newRowID` to identify the row to be deleted.

