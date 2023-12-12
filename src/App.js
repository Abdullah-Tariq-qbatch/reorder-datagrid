import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

function App() {
  const [rowData, setRowData] = useState([
    {
      mission: "Voyager",
      company: "NASA",
      location: "Cape Canaveral",
    },
    {
      mission: "Apollo 13",
      company: "NASA",
      location: "Kennedy Space Center",
    },
    {
      mission: "Falcon 9",
      company: "SpaceX",
      location: "Cape Canaveral",
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "Order", rowDrag: true },
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={"grid-wrapper " + "ag-theme-quartz"}
        style={{ height: 500, width: 1000 }}
      >
        <AgGridReact
          rowData={rowData}
          rowDragManaged={true}
          columnDefs={colDefs}
          rowStyle={{ border: "0" }}
        />
      </div>
    </div>
  );
}

export default App;
