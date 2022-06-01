import React, { Component } from "react";
import "../custom.css";
import Header from "components/Header.jsx";
import DeliveryResultSection from "components/DeliveryResultSection.jsx";
import Share from "components/Share.jsx";
import Nav from "components/Nav.jsx";


class Delivery_Result extends Component {


  render() {
    return (
      <div>
        <Header />
        <DeliveryResultSection />
        <Share />
        <Nav />
      </div>
    );
  }
}

export default Delivery_Result;
