import React from "react";
import Navbar from "../components/Navbar";
import CustomerTable from "./CustomerTable";

const CustomerPage = () => {
  return (
    <div className="main-page">
      <Navbar />
      <div className="main-wrapper">
        <h3 className="main-heading">Bidding Details</h3>
        <CustomerTable />
      </div>
    </div>
  );
};

export default CustomerPage;
