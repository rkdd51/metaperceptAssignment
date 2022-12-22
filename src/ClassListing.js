import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { Link, useNavigate } from "react-router-dom";
const ClassListing = () => {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => res.json())
      .then((response) => setEmployeeData(response))
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  const LoadDetails = (id) => {
    navigate(`/employee/detail/${id}`);
  };

  const LoadEdit = (id) => {
    navigate(`/employee/edit/${id}`);
  };

  const LoadDelete = (id) => {
    if (window.confirm("Do you want to remove ? ")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  // Sort
  const sortName = () => {};
  return (
    <div>
      <Button variant="outlined">
        <Link to="/employee/create">Add Employee</Link>
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeData.map((value) => (
              <TableRow key={value.id}>
                <TableCell>{value.id}</TableCell>
                <TableCell align="right">{value.name}</TableCell>
                <TableCell align="right">{value.email}</TableCell>
                <TableCell align="right">{value.phoneNumber}</TableCell>
                <TableCell align="right">
                  {" "}
                  <Button
                    onClick={() => LoadEdit(value.id)}
                    variant="contained"
                    color="success"
                  >
                    Edit
                  </Button>
                  &nbsp;
                  <Button
                    onClick={() => LoadDelete(value.id)}
                    variant="outlined"
                    color="error"
                  >
                    Remove
                  </Button>
                  &nbsp;{" "}
                  <Button
                    onClick={() => LoadDetails(value.id)}
                    variant="outlined"
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ClassListing;
