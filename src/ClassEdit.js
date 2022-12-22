import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
const ClassEdit = () => {
  const [id, setIdChange] = useState("");
  const [name, setNameChange] = useState("");
  const [email, setEmailChange] = useState("");
  const [phoneNumber, setPhoneNumberChange] = useState("");
  const [active, setActiveChange] = useState(true);

  const navigate = useNavigate();
  const { empid } = useParams();
  //Fetch Data
  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => res.json())
      .then((response) => {
        setIdChange(response.id);
        setNameChange(response.name);
        setEmailChange(response.email);
        setPhoneNumberChange(response.phoneNumber);
        setActiveChange(response.active);
      })
      .catch((err) => console.log(err));
  }, []);
  //Post Data
  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { id, name, email, phoneNumber };
    fetch("http://localhost:8000/employee/" + empid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Edited and saved the data");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Edit Employee Form</Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="ID"
            id="id"
            size="small"
            variant="standard"
            disabled
            value={id}
          />
        </div>
        <div>
          <TextField
            label="Name"
            id="name"
            size="small"
            variant="standard"
            value={name}
            onChange={(e) => setNameChange(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Email"
            id="email"
            size="small"
            variant="standard"
            value={email}
            onChange={(e) => setEmailChange(e.target.value)}
          />
        </div>

        <div>
          <TextField
            label="Phone Number"
            id="phoneNumber"
            size="small"
            variant="standard"
            value={phoneNumber}
            onChange={(e) => setPhoneNumberChange(e.target.value)}
          />
        </div>

        <div>
          Active
          <Checkbox
            checked={active}
            onChange={(e) => setActiveChange(e.target.checked)}
          />
        </div>
        <div>
          <Button variant="contained" color="success" type="submit">
            Save Edited Data
          </Button>
          &nbsp;
          <Button variant="outlined" color="error">
            <Link to="/">Back</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ClassEdit;
