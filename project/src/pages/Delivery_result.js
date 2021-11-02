import React, { Component } from "react";
import "/home/ubuntu/ict/project/src/custom.css";
import Header from "/home/ubuntu/ict/project/src/components/header.js";
import Delivery_result_section from "/home/ubuntu/ict/project/src/components/Delivery_result_section";
import Share from "/home/ubuntu/ict/project/src/components/share.js";
import Nav from "/home/ubuntu/ict/project/src/components/nav.js";


class Delivery_Result extends Component {


  render() {
    return (
      <div>
        <Header />
        <Delivery_result_section />

        <Share />
        <Nav />
      </div>
    );
  }
}

export default Delivery_Result;
