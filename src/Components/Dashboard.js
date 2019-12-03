import React from "react";

const Dashboard = ({reports}) => {
	return (
		<div>
      <div className="dashboard-container">
        <p style={{ display: "flex" }}><span style={{fontWeight: 900}}>Social Security Number: </span> 
           {reports.ssn}</p>
        <br></br>
        <button onClick={(e) => console.log('click')/*change archvie from false to true */}>Archive Report</button>
      </div>
		</div>
	);
};


export default Dashboard

// ***** example response ****
/*
  "id": "f0549f20-ce07-11e7-8caa-db5e161d6850",
  "score": 772,
  "firstName": "Sally",
  "lastName": "Jordan",
  "dob": "1974-01-29",
  "ssn": "443-97-9467",
  "createdAt": "2016-02-18T10:45:58.000Z",
  "archived": false,
  "img"
*/