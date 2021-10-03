import React, { Component } from 'react';
import box1 from '/home/ubuntu/ict/project/src/images/box1.png'
import box2 from '/home/ubuntu/ict/project/src/images/box2.png'
import { Link } from 'react-router-dom';

class Random_result_section extends Component {
  render() {
    return (
      <div className="background">
        
        <div className="result_text">오늘은 뭐 먹지?</div>
        
        <div className="random_section" >
          <h2>
            <div className="bounce" >
              Box Open
            </div>
          </h2>
          
          <div className="box" >
            <Link to="/random/result/open" > 
            <div class="imgswap" > 
              <img src={box1} className="bounce2"/> 
              <img src={box2} className="box2" /> 
            </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Random_result_section;