import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({reports}) {
  const classes = useStyles();
  return (
    <Paper style={{ width: "80%", margin: "auto"}} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">SSN</TableCell>
            <TableCell align="right">Record Created</TableCell>
            <TableCell align="right">Archive Record</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map(row => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="right">{row.score}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.dob}</TableCell>
              <TableCell align="right">{row.ssn}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right"><button style={{ padding: 20, color: "white", backgroundColor: "#000666", fontSize: 20, borderRadius: 20 }}>Archive</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
