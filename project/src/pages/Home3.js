import React, { Component } from 'react';
import Header3 from '/home/ubuntu/ict/project/src/components/header3.js'
import Main_section from '/home/ubuntu/ict/project/src/components/Main_section.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'
import Slider from '/home/ubuntu/ict/project/src/components/Slider.js'
import { SliderData } from '/home/ubuntu/ict/project/src/components/SliderData'
import scroll from '/home/ubuntu/ict/project/src/images/scroll.png'
import 'custom.css';
import $ from "jquery";


class Home3 extends Component {
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

      }

    render() {
        return (
            <div>
              <div className="pall3">
                  <div className="palldiv1">
                    뭐 먹을 지 고민 될 땐!
                  </div>

                  <div className="palldiv2">
                    오늘 뭐 먹지? (typing )
                  </div>

                  <div className="palldiv3">
                  
                    <img src={ scroll } className="scrollicon" />
                  </div>
              </div>
 
              <section class="page-start">
                  <div class="inner">
                
                  </div>
              </section>
              {/* <Header /> */}
              
              <Main_section />
              <div className="padding5"></div>

              <Slider slides={SliderData}/>
             
              <Nav />

            </div>
        );
    }
}

export default Home3;