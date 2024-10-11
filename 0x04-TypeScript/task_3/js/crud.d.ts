// Importing `RowID` and `RowElement` types from the `interface` module
import { RowID, RowElement } from "./interface";

// Function `insertRow` takes a `RowElement` as input and returns a number.
// It is used to insert a new row and returns the unique identifier (RowID) for the newly inserted row.
export function insertRow(row: RowElement): number;

// Function `deleteRow` takes a `RowID` as input and returns `void`.
// It is used to delete an existing row from the dataset based on its unique identifier.
export function deleteRow(rowId: RowID): void;

// Function `updateRow` takes a `RowID` and a `RowElement` as input and returns a `RowID`.
// It is used to update the row with the provided `RowID` and replace it with the new `RowElement` details.
export function updateRow(rowId: RowID, row: RowElement): RowID;

