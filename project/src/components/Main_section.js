import React, { Component } from 'react';

import '/home/ubuntu/ict/project/src/custom.css';
import delivery from '/home/ubuntu/ict/project/src/images/delivery.png'
import homefood from '/home/ubuntu/ict/project/src/images/homefood.png'
import onesecond from '/home/ubuntu/ict/project/src/images/onesecond.png'
import { Link } from 'react-router-dom';
import egg from '/home/ubuntu/ict/project/src/images/egg2.png'

class Main_section extends Component {

    render() {
        return (
            <div className="section">
                <div className="Main_section">

                    <div className="card1">
                    <Link to="/delivery">
                        <figure class="snip1368">
                            <img src={delivery} alt="sample30" />
                            <h3>배달음식 뭐 먹지?</h3>
                            <figcaption>
                                <div class="icons"><a href="#"><i class="ion-social-reddit-outline"></i></a>
                                <a href="#"> <i class="ion-social-twitter-outline"></i></a>
                                <a href="#"> <i class="ion-social-vimeo-outline"></i></a>
                                </div>
                            </figcaption>
                        </figure>
                    </Link>
                    </div>

                    
                    
                    <div className="card2">
                    <Link to="/homemeal">
                        <figure class="snip1368">
                            <img src={homefood} alt="sample30" />
                            <h3>집에서 뭐 해먹지?</h3>
                            <figcaption>
                                <div class="icons"><a href="#"><i class="ion-social-reddit-outline"></i></a>
                                <a href="#"> <i class="ion-social-twitter-outline"></i></a>
                                <a href="#"> <i class="ion-social-vimeo-outline"></i></a>
                                </div>
                            </figcaption>
                        </figure>
                    </Link>
                    </div>

                    <div className="card3">
                    <Link to="/random">
                        <figure class="snip1368">
                            <img src={onesecond} alt="sample30" />
                            <h3>1초안에 알려줘!</h3>
                            <figcaption>
                                <div class="icons"><a href="#"><i class="ion-social-reddit-outline"></i></a>
                                <a href="#"> <i class="ion-social-twitter-outline"></i></a>
                                <a href="#"> <i class="ion-social-vimeo-outline"></i></a>
                                </div>
                            </figcaption>
                        </figure>
                    </Link>
                    </div>

                </div>
                <br />
                
                <div className="Main_section">
                    <div className="card1-1">
                        배달음식 뭐 먹지?
                    </div>            
                    
                    <div className="card2-1">
                        집에서 뭐 해먹지?
                    </div>

                    <div className="card3-1">
                        1초안에 알려줘!
                    </div>
                </div>

                <br />
                
                <div className="Main_section">
                    <div className="card1-2">
                        배달음식 뭐 먹지? 페이지 간단 설명
                    </div>            
                    
                    <div className="card2-2">
                        집에서 뭐 해먹지? 페이지 간단 설명
                    </div>

                    <div className="card3-2">
                        1초안에 알려줘! 페이지 간단 설명
                    </div>
                </div>
            </div>
        );
    }
}

export default Main_section;

