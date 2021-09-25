import React, { Component } from 'react';
import pan from '/home/ubuntu/ict/project/src/images/pan2.png'

class Homemeal_result_section extends Component {

    render() {
        return (
            <div className="background">
                    <div className="result_text"> 내가 오늘 먹을 음식은 ?</div>
                    <div>
                        <img src={ pan } className="result_pan" />
                    </div> 
                </div> 
        );
    }
}

export default Homemeal_result_section;