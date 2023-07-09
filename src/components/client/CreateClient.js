import React from "react";
import "./CreateClient.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";

function CreateClient() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [doctor, setDoctor] = useState("");

  const genders = [
    {
      value: "MALE",
    },
    {
      value: "FEMALE",
    },
    {
      value: "OTHER",
    },
  ];

  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    setSelectedDate(date);
    setDob(formattedDate);
  };

  const data = [
    {
      firstName,
      lastName,
      gender,
      dateOfBirth: dob,
      email,
      contactNumber: contact,
      drPatientFk: doctor,
    },
  ];

  const onSubmit = () => {
    async function createClient(data) {
      try {
        const response = await fetch("http://localhost:8080/save-patients", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error("Failed to create client:", error);
      }
    }

    createClient(data);
  };

  return (
    <div className="section">
      <div className="creationForm">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "15" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="standard"
            size="small"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Last Name"
            variant="standard"
            size="small"
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextField
            id="outlined-select-currency"
            select
            label="Gender"
            size="small"
            variant="standard"
            onChange={(e) => setGender(e.target.value)}
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              slotProps={{ textField: { size: "small", variant: "standard" } }}
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            size="small"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Contact Number"
            variant="standard"
            size="small"
            onChange={(e) => setContact(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Doctor"
            variant="standard"
            size="small"
            onChange={(e) => setDoctor(e.target.value)}
          />
        </Box>
        <div className="submit">
          <Button variant="outlined" onClick={onSubmit}>
            CREATE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateClient;
