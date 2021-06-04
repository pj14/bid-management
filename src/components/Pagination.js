import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  pageicon: {
    padding: "8px",
  },
  rowsWrapper: {},
});

const Pagination = () => {
  const classes = useStyles();
  const [currentPage, setCurrnetPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const changeHandler = () => {};

  return (
    <div className="pagination-root">
      <div className={classes.rowsWrapper}>
        <span></span>
        <Select value={rowsPerPage} onChange={changeHandler} />
      </div>
      <a className={classes.pageicon}>Prev</a>
      <a className={classes.pageicon}>1</a>
      <a className={classes.pageicon}>Next</a>
    </div>
  );
};

export default Pagination;
