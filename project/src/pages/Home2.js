import React, { Component } from 'react';
import Header2 from '/home/ubuntu/ict/project/src/components/header2.js'
import Main_section from '/home/ubuntu/ict/project/src/components/Main_section.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'
import Slider from '/home/ubuntu/ict/project/src/components/Slider.js'
import { SliderData } from '/home/ubuntu/ict/project/src/components/SliderData'
import $ from "jquery";
import { Link } from 'react-router-dom';
import delivery from '/home/ubuntu/ict/project/src/images/delivery.png'
import homefood from '/home/ubuntu/ict/project/src/images/homefood.png'
import onesecond from '/home/ubuntu/ict/project/src/images/onesecond.png'
import HeaderVideo from '/home/ubuntu/ict/project/src/videos/header.mp4'

class Home2 extends Component {
  componentDidMount() {
    $(function(){
      var $header = $('header'); //헤더를 변수에 넣기
      var $page = $('.page-start'); //색상이 변할 부분
      var $window = $(window);
      var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
      
      $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
        pageOffsetTop = $page.offset().top;
      });
      
      $window.on('scroll', function(){ //스크롤시
        var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
        $header.toggleClass('down', scrolled); //클래스 토글
      });
    });

    //  비디오 자동 재생
    document.getElementById('vid').play();
  }

  render() {
      return (
          <div>
              <div className="index2">
              <Header2 />
              </div>

              <div className="index1">
                <div class="header_vedio_box">
                  <video id="vid" muted autoplay loop>
                    <source src={HeaderVideo} type="video/mp4"></source>
                  </video>
                  <div class="header_vedio_box_text">
                    <p>음식동영상으로 변경</p>
                  </div>
                </div>
              </div>
              
              <section class="page-start">
              </section>
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
              
              
              <div className="section">
                <div id="list" className="list">
                    <article className="up-on-scroll">
                    <div className="Main_section">
                    <div className="cardt-1">
                        배달음식 뭐 먹지?
                    </div>            
                    
                    <div className="cardt-1">
                        집에서 뭐 해먹지?
                    </div>

                    <div className="cardt-1">
                        1초안에 알려줘!
                    </div>
                </div>

                <br />
                
                <div className="Main_section">
                    <div className="cardtt-2">
                        배달음식 뭐 먹지? 페이지 간단 설명
                    </div>            
                    
                    <div className="cardtt-2">
                        집에서 뭐 해먹지? 페이지 간단 설명
                    </div>

                    <div className="cardtt-2">
                        1초안에 알려줘! 페이지 간단 설명
                    </div>
                </div>
                    </article>
                </div>
                
                <br />
                
                
            </div>
            
          

            <Nav />

              

          </div>
      );
  }
}

export default Home2;