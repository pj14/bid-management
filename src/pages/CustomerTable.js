import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Avatar, Switch } from "@material-ui/core";
import Pagination from "../components/Pagination";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    border: "none",
  },
  container: {
    maxHeight: "400px",
    minWidth: 650,
  },
  tableRoot: {
    display: "block",
    width: "100%",
    overflowX: "auto",
  },
  custTable: {
    width: "100%",
    overflow: "scroll",
    tableLayout: "fixed",
    borderCollapse: "collapse",
    "& thead": {
      color: "#b1b1b1",
      display: "block",
      borderBottom: "1px solid #ddd",
      paddingRight: 20,
    },
    "& tbody": {
      display: "block",
      maxHeight: "400px",
      overflowY: "auto",
    },
    "& tr": {
      borderBottom: "1px solid #ddd",
    },
    "& th": {
      padding: "8px 15px",
    },
    "& td": {
      padding: "6px 16px",
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
      margin: "6px 16px 6px 0px",
    },
  },
});

const CustomerTable = ({ customerList, toggle }) => {
  const classes = useStyles();

  const [userData, setUserData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    console.log("customer list", customerList.length);
    let list = [...customerList];
    setUserData(list.splice(0, 10));
  }, [customerList]);

  useEffect(() => {
    var list = [...customerList];
    setUserData(list.splice(skip, skip + rowsPerPage));
  }, [rowsPerPage, skip]);

  useEffect(() => {
    console.log("user data", customerList);
  }, [userData]);

  const paginationResponse = (pageNo, rowsNumber) => {
    console.log("pageno", pageNo, "   rowsNumber", rowsNumber);
    let skipValue = (pageNo - 1) * rowsNumber;
    setSkip(skipValue);
    setRowsPerPage(rowsNumber);
  };

  return (
    <Paper>
      <div className={classes.tableRoot}>
        {userData != undefined && userData != null && userData.length != 0 ? (
          <table className={classes.custTable}>
            <thead>
              <th className={classes.serial}>#</th>
              <th className={classes.moreSpace}>Customer Name</th>
              <th className={classes.moreSpace}>Email</th>
              <th className={classes.normalCell}>Phone</th>
              <th className={classes.normalCell}>Premium</th>
              <th className={classes.normalCell}>Max/Min bid</th>
            </thead>
            <tbody>
              {userData.map((row, iter) => (
                <tr>
                  <td className={classes.serial}>{iter + 1}</td>
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
                  <td className={classes.normalCell}>
                    {toggle ? row.min : row.max}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
      <Pagination
        totalLength={customerList.length}
        paginationResponse={paginationResponse}
      />
    </Paper>
  );
};

export default CustomerTable;
