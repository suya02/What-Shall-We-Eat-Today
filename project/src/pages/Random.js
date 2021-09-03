// import React, { Component } from 'react';
// import Header from '/home/ubuntu/ict/project/src/components/header.js'
// import Section2 from '/home/ubuntu/ict/project/src/components/section2.js'
// import Share from '/home/ubuntu/ict/project/src/components/share.js'
// import Nav from '/home/ubuntu/ict/project/src/components/nav.js'

// class Random extends Component {

//     render() {
//         return (
//             <div>
//                 <Header />
//                 룰렛 or 사다리타기 or 버튼 클릭 시 바로 메뉴 추천
//                 <Share />
//                 <Nav />
//             </div>
//         );
//     }
// }

// export default Random;

import React, { Component } from 'react';
import Header2 from '/home/ubuntu/ict/project/src/components/header2.js'
import Main_section from '/home/ubuntu/ict/project/src/components/Main_section.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'
import Slider from '/home/ubuntu/ict/project/src/components/Slider.js'
import { SliderData } from '/home/ubuntu/ict/project/src/components/SliderData'
import cook from '/home/ubuntu/ict/project/src/videos/cook.mp4'
import 'custom.css';
import $ from "jquery";


class ramdom extends Component {
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
                  <div class="jb-box">
                    <video id="vid" muted autoplay loop>
                      {/* <source src={cook} type="video/mp4" ></source> */}
                      <source src="https://bit.ly/3kYMF9A" type="video/mp4"></source>
                    </video>
                    <div class="jb-text">
                      <p>오늘 뭐 먹지?</p>
                    </div>
                  </div>
                </div>
                
                <section class="page-start">
                    <div class="inner">
                    <article></article> 
                    </div>
                </section>
                {/* <Header /> */}
                
                <Main_section />
                <div className="slidersizesmall">
                <Slider slides={SliderData}/>
                </div>
                <Nav />

            </div>
        );
    }
}

export default ramdom;