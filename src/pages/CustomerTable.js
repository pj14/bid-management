import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar } from "@material-ui/core";
import Pagination from "../components/Pagination";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    border: "none",
  },
  container: {
    maxHeight: "400px",
  },
  tableRoot: {
    minWidth: 650,
  },
  custTable: {
    width: "100%",
    overflow: "scroll",
    tableLayout: "fixed",
    "& thead": {
      color: "#b1b1b1",
      display: "block",
    },
    "& tbody": {
      display: "block",
      maxHeight: "400px",
      overflowY: "auto",
    },
    "& th": {
      padding: "8px 15px",
    },
    "& td": {
      padding: "8px 16px",
      fontWeight: 500,
    },
  },
  serial: {
    textAlign: "center",
    minWidth: 30,
  },
  moreSpace: {
    width: "30%",
    textAlign: "left",
  },
  normalCell: {
    textAlign: "left",
    width: "15%",
  },
  avatarWrapper: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: "8px 16px",
    },
  },
});

const CustomerTable = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    let apiResponse = [];
    apiResponse = fetch("https://intense-tor-76305.herokuapp.com/merchants ")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => console.log("error", err));

    console.log("Api response", apiResponse);
  }, []);

  return (
    <Paper>
      <div className={classes.tableRoot}>
        <table className={classes.custTable}>
          <thead>
            <th className={classes.serial}>#</th>
            <th className={classes.moreSpace}>Customer Name</th>
            <th className={classes.moreSpace}>Email</th>
            <th className={classes.normalCell}>Phone</th>
            <th className={classes.normalCell}>Premium</th>
            <th className={classes.normalCell}>Max/Min bi</th>
          </thead>
          <tbody>
            {userData.map((row, iter) => (
              <tr>
                <td className={classes.serial}>{iter}</td>
                <td className={`${classes.moreSpace}`}>
                  <div className={classes.avatarWrapper}>
                    <Avatar
                      alt={`${row.firstname} ${row.lastname}`}
                      src={row.avatarUrl}
                    />{" "}
                    <span>{`${row.firstname} ${row.lastname}`}</span>
                  </div>
                </td>
                <td className={classes.moreSpace}>{row.email}</td>
                <td className={classes.normalCell}>{row.phone}</td>
                <td className={classes.normalCell}>
                  {row.hasPremium ? "true" : "false"}
                </td>
                <td className={classes.normalCell}>{row.hasPremium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Paper>
  );
};

export default CustomerTable;
