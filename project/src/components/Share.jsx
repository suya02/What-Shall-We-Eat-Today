import React, { useEffect } from 'react'
import '/home/ubuntu/ict/project/src/custom.css';
import link from '/home/ubuntu/ict/project/src/images/linkicon.png'
import baemin from '/home/ubuntu/ict/project/src/images/baemin.png'
import kakao from '/home/ubuntu/ict/project/src/images/kakao.png'
import egg from '/home/ubuntu/ict/project/src/images/egg2.png'
import { CopyToClipboard } from "react-copy-to-clipboard";

const Share = () => {
  useEffect(() => {
    createKakaoButton()
  }, [])
  const createKakaoButton = () => {
    // kakao SDK 정상적으로 불러와졌을 경우 if=true
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // component/.env 파일에 저장된 javascript key 를 이용하여 initialize (보안상 env파일로 작성하는게 좋음)
        kakao.init(process.env.REACT_APP_KAKAO_KEY)
      }
      kakao.Link.createDefaultButton({
        // id=kakao-link-btn 을 찾아 렌더링
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '오늘 뭐 먹지?',
          description: '#배달음식 #뭐먹을지 #고민될땐 #오늘뭐먹지 #한식 #양식 #중식 #일식 #랜덤 #집밥 #저녁메뉴 #1초결정',
          imageUrl: 'https://cdn.pixabay.com/photo/2016/02/05/15/34/pasta-1181189_960_720.jpg',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        // social: {
        //   likeCount: 77,
        //   commentCount: 55,
        //   sharedCount: 333,
        // },
        buttons: [
          {
            title: '메뉴 추천받기!',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    }
  }
  // 링크복사
  const currentUrl = window.location.href;

  return (
    <div className="share">
      <div className="share_section">
        <img src={egg} alt="logo" className="eggLogo" />
        <div className="share_text">친구에게 공유하기</div>
        <img src={egg} alt="logo" className="eggLogo" />
      </div>

      <br />

      <img src={kakao} className="share_icon" id="kakao-link-btn" alt="kakao_icon" style={{cursor:'pointer'}} />

      {/* <img src={baemin} className="share_icon" alt="share_icon" /> */}
      <CopyToClipboard text={currentUrl}>
        <img src={link} className="share_icon" alt="share_icon" style={{cursor:'pointer'}} onClick={() => alert('주소가 복사되었습니다.')} />
      </CopyToClipboard>


    </div>
  )
}
export default Share;