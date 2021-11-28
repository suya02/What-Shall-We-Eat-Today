const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 5000;
const mysql = require("mysql");
const privateProperty = require('./privateProperty.js') //IP 가져오기
const IP = privateProperty.getIP(); //IP 값 저장 
const password = privateProperty.getDBPassword(); //IP 값 저장 

let connection = mysql.createConnection({
  host: "localhost",
  user: "ict",
  password: `${password}`,
  database: "ICT_project",
});

connection.connect();


//cors이슈 해결하기 위해 서버 접근 권한 허용
app.use(
  cors({
    origin: `http://${IP}:3000`,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//빌드한 index.html 파일 /로 접속했을때 랜더링 (프로젝트 다 끝나면 마지막에 빌드하고 렌더링하기)



//프론트에서 백엔드의 apipost 로 post했을때 데이터 처리
app.post("/api", (req, res) => {
  //global.tmp = tmp변수를 전역적으로 사용하기 위해 global하게 설정
  const obj = req.body;
  global.result = [];

  for (let key in obj) {
    result.push(obj[key])
  }
});

app.get("/api", (req, res) => {

  //db 연결한 후 쿼리문 돌려서 메뉴 하나 출력한 다음 json 형태로 res.send
  //질문에 대한 답변들은 DB 스키마 순서대로 result1 ~ result7까지임

  //변수에 쿼리를 저장한다음 그 변수를 쿼리안에 넣기
  let query1 =
    "SELECT foodname, ment FROM delivery where classify=? AND price=? AND spicy=? AND calorie=? AND amount=? AND soup=? AND drink=? order by rand()";


  let query2 =
    "SELECT foodname, ment FROM delivery where classify=? AND price=? AND spicy=? AND calorie=? AND soup=?  order by rand()";


  //order by rand() 함수 사용해서 랜덤으로 튜플 섞이게 했음
  connection.query(
    query2,
    [result[0], result[1], result[2], result[3], result[5]],
    function (error, results, fields) {
      if (error) {
        console.log(error);
      }
      res.send(results);
    }
  );

  // 반환하는 JSON은 { "result":"menu"}형식이어야 함
});



app.post("/homemealapi", (req, res) => {
  global.time = req.body.times;
  console.log(req.body.time);
});



app.get("/homemealapi", (req, res) => {

  //변수에 쿼리를 저장한다음 그 변수를 쿼리안에 넣기
  let query =
    "SELECT foodname, supplies, recipes FROM recipe where time=? order by rand()";
  //order by rand() 함수 사용해서 랜덤으로 튜플 섞이게 했음
  connection.query(
    query,
    time,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      }
      console.log(results);
      res.send(results);
    }
  );
});



app.get("/randomapi", (req, res) => {

  //변수에 쿼리를 저장한다음 그 변수를 쿼리안에 넣기
  let query =
    "SELECT foodname, ment FROM delivery order by rand()";
  //order by rand() 함수 사용해서 랜덤으로 튜플 섞이게 했음
  connection.query(
    query,
    function (error, results, fields) {
      if (error) {
        console.log(error);
      }
      console.log(results);
      res.send(results);
    }
  );
});


/*app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/project/build/index.html'));
});
*/

app.listen(port, () => console.log(`Listening on port ${port}`));