import React from "react";

// 스타일드 컴포넌트를 이용해 프로그레스바 스타일 지정
const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    //  퍼센트 배경 (회색)
    const containerStyles = {
      height: 20,
      width: '40vw',
      backgroundColor: "#e0e0de",
      borderRadius: 50,

      
    }
  
    // 퍼센트 차는 부분 (오렌지색)
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
   
    }
  
    // 퍼센트 표시 부분
    const labelStyles = {
      padding: 5,
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'right'
    }


  
    return (
      <div>
        <span style={labelStyles}>
          {`${completed} %`}
        </span>

        <div style={containerStyles}>
          <div style={fillerStyles}>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;