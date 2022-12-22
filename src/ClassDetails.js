import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

const ClassDetails = () => {
  const { empid } = useParams();

  const [employeeDataValue, setEmployeeDataValue] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => res.json())
      .then((response) => setEmployeeDataValue(response))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {employeeDataValue ? (
        <div>
          <h2>Employee Name is : {employeeDataValue.name}</h2>
          <h2>Employee Email is : {employeeDataValue.email}</h2>
          <h2>Employee Phone Number is : {employeeDataValue.phoneNumber}</h2>
        </div>
      ) : null}
      <Button variant="outlined" color="error">
        <Link to="/">Back</Link>
      </Button>
    </div>
  );
};

export default ClassDetails;
