import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import './ClientFetch.css';

function ClientFetch() {
  const [patientData, setPatientData] = useState("");

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await fetch("http://localhost:8080/patients");
        const patient = await response.json();
        setPatientData(patient);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    }
    fetchUserDetails();
  }, []);

  const columns = [
    { field: "id", headerName: "No", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "gender", headerName: "Gender", width: 130 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "contact", headerName: "Contact Number ", width: 140 },
    { field: "dob", headerName: "Date Of Birth", width: 130 },
  ];

  const rows = Object.values(patientData).map((patient, index) => ({
    id: patient.id,
    firstName: patient.firstName,
    lastName: patient.lastName,
    gender: patient.gender,
    email: patient.email,
    dob: patient.dateOfBirth,
    contact: patient.contactNumber,
    rowClassName: index % 2 === 0 ? "even-row" : "odd-row"
  }));

  return (
    <div className="section">
    <div className="grid"
    style={{ height: "100vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
        getRowClassName={(params) => params.row.rowClassName}
      />
    </div>
    </div>
  );
}

export default ClientFetch;
