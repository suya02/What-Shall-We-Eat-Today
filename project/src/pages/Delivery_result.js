import React, { Component } from "react";
import "/home/ubuntu/ict/project/src/custom.css";
import Header from "/home/ubuntu/ict/project/src/components/Header.jsx";
import DeliveryResultSection from "/home/ubuntu/ict/project/src/components/DeliveryResultSection.jsx";
import Share from "/home/ubuntu/ict/project/src/components/Share.jsx";
import Nav from "/home/ubuntu/ict/project/src/components/Nav.jsx";


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
