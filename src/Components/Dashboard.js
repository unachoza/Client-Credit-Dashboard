import React from "react";

const Dashboard = ({response}) => {
	return (
		<div>
			<header> Credit Report </header>

      <div className="dashboard-container">
      entries here
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