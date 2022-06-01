import React, { Component } from 'react';
import MainHeader from 'components/MainHeader.jsx'
import MainSection from 'components/MainSection.jsx'
import Nav from 'components/Nav.jsx'
import HeaderVideo from 'videos/header.mp4'
import $ from "jquery";

class Home extends Component {
  componentDidMount() {
    $(function () {
      var $header = $('header'); //헤더를 변수에 넣기
      var $page = $('.page-start'); //색상이 변할 부분
      var $window = $(window);
      var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기

      $window.resize(function () { //반응형을 대비하여 리사이즈시 top값을 다시 계산
        pageOffsetTop = $page.offset().top;
      });

      $window.on('scroll', function () { //스크롤시
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
          <MainHeader />
        </div>

        <div className="index1">
          <div className="header_vedio_box">
            <video id="vid" muted autoPlay loop>
              <source src={HeaderVideo} type="video/mp4"></source>
            </video>
          </div>
        </div>

        <section className="page-start">
        </section>

        <MainSection />
        <Nav />

      </div>
    );
  }
}

export default Home;