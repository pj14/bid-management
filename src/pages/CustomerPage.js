import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CustomerTable from "./CustomerTable";
import { Switch, Select, MenuItem, InputLabel } from "@material-ui/core";

const CustomerPage = () => {
  const [userData, setUserData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [sortBy, setsortBy] = useState("dec");

  useEffect(() => {
    fetch("https://intense-tor-76305.herokuapp.com/merchants ")
      .then((res) => res.json())
      .then(async (data) => {
        console.log("data", data);
        const newData = await calculateBid(data);
        var sortedList = sortList(newData, sortBy);
        setUserData(sortedList);
      })
      .catch((err) => console.log("error", err));
  }, []);

  useEffect(() => {
    var sortedList = sortList(userData, sortBy);
    setUserData([...sortedList]);
  }, [sortBy]);

  const calculateBid = (datum) => {
    var response = [];
    response = datum.map((x) => {
      var response = maxMin(x.bids);
      return {
        ...x,
        max: response.max,
        min: response.min,
      };
    });
    return response;
  };

  const maxMin = (dataArr) => {
    var arr = dataArr.map((x) => {
      return x.amount;
    });
    if (arr == undefined || arr == null || arr.length == 0) {
      return {
        max: 0,
        min: 0,
      };
    }
    var max = arr.reduce(function (a, b) {
      return Math.max(a, b);
    });
    var min = arr.reduce(function (a, b) {
      return Math.min(a, b);
    });
    return {
      max: max,
      min: min,
    };
  };

  const sortList = (dataArr, sorting) => {
    if (sorting == "inc")
      return dataArr.sort((a, b) => (a.max > b.max ? 1 : -1));
    else return dataArr.sort((a, b) => (a.max > b.max ? -1 : 1));
  };

  return (
    <div className="main-page">
      <Navbar />
      <div className="main-wrapper">
        <h3 className="main-heading">Bidding Details</h3>
        <div className="table-filters">
          <div className="sort-wrap">
            <span className="min-bid-label">Sort bids: </span>
            <Select
              labelId="sort-label"
              value={sortBy}
              onChange={(e) => setsortBy(e.target.value)}
            >
              <MenuItem value={"inc"}>Ascending</MenuItem>
              <MenuItem value={"dec"}>Descending</MenuItem>
            </Select>
          </div>
          <div className="toggle-wrap">
            <span className="min-bid-label">View minimum bid: </span>
            <Switch
              inputProps={{ "aria-label": "primary checkbox" }}
              onChange={() => setToggle(!toggle)}
            />
          </div>
        </div>

        <CustomerTable customerList={userData} toggle={toggle} />
      </div>
    </div>
  );
};

export default CustomerPage;
