import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Logo from "../assets/auction.png";

const useStyles = makeStyles({
  root: {
    background: "#fff",
    height: 60,
    padding: "10px 60px",
    position: "fixed",
    top: 0,
    zIndex: 101,
    width: "100%",
    boxShadow: "0 8px 24px -2px rgb(0 0 0 / 5%)",
    display: "flex",
    alignItems: "center",
  },
  navIcon: {
    background: `url(${Logo})`,
    backgroundSize: "contain",
    height: 50,
    width: 50,
  },
  navHeading: {
    marginLeft: 24,
    fontWeight: 700,
    fontSize: 28,
    alignSelf: "flex-end",
    color: "#31ac90",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/" className={classes.navIcon}></Link>
      <span className={classes.navHeading}>Let's Bid</span>
    </div>
  );
};

export default Navbar;
