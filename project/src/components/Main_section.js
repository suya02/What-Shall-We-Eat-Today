import React, { Component } from 'react';

import '/home/ubuntu/ict/project/src/custom.css';
import delivery from '/home/ubuntu/ict/project/src/images/delivery.png'
import homefood from '/home/ubuntu/ict/project/src/images/homefood.png'
import onesecond from '/home/ubuntu/ict/project/src/images/onesecond.png'
import { Link } from 'react-router-dom';
import egg from '/home/ubuntu/ict/project/src/images/egg2.png'
// import $ from "jquery";

class Main_section extends Component {

    componentDidMount() {
        function isElementUnderBottom(elem, triggerDiff) {
            const { top } = elem.getBoundingClientRect();
            const { innerHeight } = window;
            return top > innerHeight + (triggerDiff || 0);
          }
          
          function handleScroll() {
            const elems = document.querySelectorAll('.up-on-scroll');
            elems.forEach(elem => {
              if (isElementUnderBottom(elem, -20)) {
                elem.style.opacity = "0";
                elem.style.transform = 'translateY(100px)';
              } else {
                elem.style.opacity = "1";
                elem.style.transform = 'translateY(0px)';
              }
            })
          }
          window.addEventListener('scroll', handleScroll); 
         
      }

    render() {
        return (
            
            <div>
                <div className="Main_section">
                    <div className="card1">
                        <Link to="/delivery">
                            <figure class="snip">
                                <img src={delivery} alt="배달음식 뭐 먹지?" />
                                <h3>배달음식 뭐 먹지?</h3>
                                <figcaption>
                                    <div class="icons">
                                        <a href="#"><i class="ion-social-reddit-outline"></i></a>
                                        <a href="#"> <i class="ion-social-twitter-outline"></i></a>
                                        <a href="#"> <i class="ion-social-vimeo-outline"></i></a>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>

                    <div className="card2">
                        <Link to="/homemeal">
                            <figure class="snip">
                                <img src={homefood} alt="집에서 뭐 해먹지?" />
                                <h3>집에서 뭐 해먹지?</h3>
                                <figcaption>
                                    <div class="icons">
                                        <a href="#"><i class="ion-social-reddit-outline"></i></a>
                                        <a href="#"> <i class="ion-social-twitter-outline"></i></a>
                                        <a href="#"> <i class="ion-social-vimeo-outline"></i></a>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>

                    <div className="card3">
                        <Link to="/random">
                            <figure class="snip">
                                <img src={onesecond} alt="1초안에 알려줘!" />
                                <h3>1초안에 알려줘!</h3>
                                <figcaption>
                                    <div class="icons">
                                        <a href="#"><i class="ion-social-reddit-outline"></i></a>
                                        <a href="#"> <i class="ion-social-twitter-outline"></i></a>
                                        <a href="#"> <i class="ion-social-vimeo-outline"></i></a>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>
                </div>
              
              
                <div className="section">
                    <div id="list" className="list">
                        <article className="up-on-scroll">
                            <div className="Main_section_text">
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
                    
                            <div className="Main_section_text">
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
                        </article>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Main_section;

