import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select, MenuItem, InputLabel } from "@material-ui/core";

const useStyles = makeStyles({
  paginationRoot: {
    display: "flex",
    padding: "8px 20px",
    justifyContent: "space-between",
  },
  pageicon: {
    padding: "4px 10px",
    margin: "0px 4px",
    border: "2px solid #aaa",
    cursor: "pointer",
    background: "#fff",
    "&:hover": {
      background: "#ddd",
    },
  },
  notAllowed: {
    cursor: "not-allowed",
    "&:hover": {
      background: "#fff",
    },
  },
  rowsWrapper: {},
  rowsPerPageText: {
    fontWeight: 500,
    fontSize: 14,
    marginRight: 16,
  },
  navigationWrapper: {
    display: "flex",
    alignItems: "center",
  },
});

const Pagination = ({ totalLength, paginationResponse }) => {
  const classes = useStyles();
  const [currentPage, setCurrnetPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPage, setTotalPage] = useState(1);

  const changeHandler = () => {};

  const handleNext = () => {
    setCurrnetPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrnetPage(currentPage - 1);
  };

  useEffect(() => {
    paginationResponse(currentPage, rowsPerPage);
  }, [currentPage]);

  useEffect(() => {
    var total = Math.ceil(totalLength / rowsPerPage);
    console.log("total length", total);
    setTotalPage(total);
  }, [totalLength]);

  return (
    <div className={classes.paginationRoot}>
      <div className={classes.rowsWrapper}>
        <span className={classes.rowsPerPageText}>Rows per page: </span>
        <Select value={rowsPerPage} onChange={changeHandler}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <div className={classes.navigationWrapper}>
        <span className={classes.rowsPerPageText}>
          Showing 1-10 of 12 rows{" "}
        </span>
        <button
          className={`${classes.pageicon} ${
            currentPage == 1 ? classes.notAllowed : null
          } `}
          disabled={currentPage == 1 ? true : false}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className={`${classes.pageicon} ${
            currentPage == totalPage ? classes.notAllowed : null
          } `}
          disabled={currentPage == totalPage ? true : false}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
