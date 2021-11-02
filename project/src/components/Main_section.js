import React, { Component } from 'react';
import '/home/ubuntu/ict/project/src/custom.css';
import delivery from '/home/ubuntu/ict/project/src/images/delivery.png'
import homefood from '/home/ubuntu/ict/project/src/images/homefood.png'
import onesecond from '/home/ubuntu/ict/project/src/images/onesecond.png'
import { Link } from 'react-router-dom';
import $ from "jquery";

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
        /* Demo purposes only */
        $(".hover").mouseleave(
            function () {
                $(this).removeClass("hover");
            }
        );
        return (
            <div>
                <div className="pc_ver">
                <div className="Main_section">
                    <div className="card1">
                        <Link to="/delivery">
                            <figure className="snip">
                                <img src={delivery} alt="sample30" />
                                <h3>배달음식 뭐 먹지?</h3>
                                <figcaption>
                                    <div class="icons"><i className="ion-social-reddit-outline"></i>
                                        <i className="ion-social-twitter-outline"></i>
                                        <i className="ion-social-vimeo-outline"></i>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>


                    <div className="card2">
                        <Link to="/homemeal">
                            <figure className="snip">
                                <img src={homefood} alt="sample30" />
                                <h3>집에서 뭐 해먹지?</h3>
                                <figcaption>
                                    <div className="icons"><i className="ion-social-reddit-outline"></i>
                                         <i className="ion-social-twitter-outline"></i>
                                         <i className="ion-social-vimeo-outline"></i>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>

                    <div className="card3">
                        <Link to="/random">
                            <figure className="snip">
                                <img src={onesecond} alt="sample30" />
                                <h3>1초안에 알려줘!</h3>
                                <figcaption>
                                    <div className="icons"><i className="ion-social-reddit-outline"></i>
                                        <i className="ion-social-twitter-outline"></i>
                                        <i className="ion-social-vimeo-outline"></i>
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
                                    몇 가지 질문을 통해 주문해서 먹을 수 있는 배달음식을 추천해드립니다!
                                </div>

                                <div className="card2-2">
                                    원하는 조리시간을 고르면 집에서 해먹을 수 있는 메뉴와 레시피를 추천해드립니다!
                                </div>

                                <div className="card3-2">
                                    랜덤으로 메뉴를 추천해드립니다!
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                </div>
                
                {/* 모바일 버전 */}
                <div className="mo_ver">
                <div className="Main_section">
                            <div className="card1">
                                <figure className="snip">
                                    <Link to="/delivery">
                                        <img src={delivery} />    
                                    </Link>
                                    <h3>배달음식 뭐 먹지?</h3>
                                    <figcaption>
                                        <div class="icons"><i className="ion-social-reddit-outline"></i>
                                            <i className="ion-social-twitter-outline"></i>
                                            <i className="ion-social-vimeo-outline"></i>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="Main_section_text">
                                <div className="section">
                                    <div className="card1-1">
                                        배달음식 뭐 먹지?
                                    </div>
                                    <div className="card1-2">
                                        몇 가지 질문을 통해 주문해서 먹을 수 있는 배달음식을 추천해드립니다!
                                    </div>
                                </div>
                            </div>
                </div>

                <div className="Main_section">
                    <div className="card2">
                        <Link to="/homemeal">
                            <figure className="snip">
                                <img src={homefood} />
                                <h3>집에서 뭐 해먹지?</h3>
                                <figcaption>
                                    <div className="icons"><i className="ion-social-reddit-outline"></i>
                                         <i className="ion-social-twitter-outline"></i>
                                         <i className="ion-social-vimeo-outline"></i>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>
                    <div className="Main_section_text">
                        <div className="section">
                            <div className="card1-1">
                                집에서 뭐 해먹지?
                            </div>
                            <div className="card1-2">
                                원하는 조리시간을 고르면 집에서 해먹을 수 있는 메뉴와 레시피를 추천해드립니다!
                            </div>
                        </div>
                    </div>  
                </div>

                <div className="Main_section">
                    <div className="card3">
                        <Link to="/random">
                            <figure className="snip">
                                <img src={onesecond} />
                                <h3>1초안에 알려줘!</h3>
                                <figcaption>
                                    <div className="icons"><i className="ion-social-reddit-outline"></i>
                                        <i className="ion-social-twitter-outline"></i>
                                        <i className="ion-social-vimeo-outline"></i>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>
                    <div className="Main_section_text">
                        <div className="section">
                            <div className="card1-1">
                                1초안에 알려줘!
                            </div>
                            <div className="card1-2">
                                랜덤으로 메뉴를 추천해드립니다!
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            </div>
        );
    }
}

export default Main_section;

