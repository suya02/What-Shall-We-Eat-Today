const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const cors = require("cors");
const { tmpdir } = require("os");
const port = 5000;
const router = express.Router();
const mysql = require("mysql");
global.check = false;
//cors이슈 해결하기 위해 서버 접근 권한 허용
app.use(
  cors({
    origin: "http://3.35.17.24:3000",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//빌드한 index.html 파일 /로 접속했을때 랜더링 (프로젝트 다 끝나면 마지막에 빌드하고 렌더링하기)

//API 호출,
//여기서 Mysql 접속한다음 http 라우팅 하나 파서 프론트엔드에서 받은 데이터들로 결과 데이터 보여주는 알고리즘 짜면 됨

//프론트에서 백엔드의 apipost 로 post했을때 데이터 처리
app.post("/api", (req, res) => {
  //global.tmp = req.body.result1;//전역적으로 사용하기 위해 tmp변수를 global하게 설정
  global.result1 = req.body.result1;
  global.result2 = req.body.result2;
  global.result3 = req.body.result3;
  global.result4 = req.body.result4;
  global.result5 = req.body.result5;
  global.result6 = req.body.result6;
  global.result7 = req.body.result7;
  console.log(req.body.result1);
  console.log(req.body.result2);
  console.log(req.body.result3);
  console.log(req.body.result4);
  console.log(req.body.result5);
  console.log(req.body.result6);
  console.log(req.body.result7);
});

app.get("/api", (req, res) => {
  //db 연결한 후 쿼리문 돌려서 메뉴 하나 출력한 다음 json 형태로 res.send
  //질문에 대한 답변들은 DB 스키마 순서대로 result1 ~ result7까지임



  let connection = mysql.createConnection({
    host: "localhost",
    user: "ict",
    password: "ictproject",
    database: "ICT_project",
  });

  connection.connect();

  //변수에 쿼리를 저장한다음 그 변수를 쿼리안에 넣기
  let query1 =
    "SELECT foodname, ment FROM delivery where classify=? AND price=? AND spicy=? AND calorie=? AND amount=? AND soup=? AND drink=? order by rand()";


  let query2 =
    "SELECT foodname, ment FROM delivery where classify=? AND price=? AND spicy=? AND calorie=? AND soup=?  order by rand()";


  //order by rand() 함수 사용해서 랜덤으로 튜플 섞이게 했음
  connection.query(
    query1,
    [result1, result2, result3, result4, result5, result6, result7],
    function (error, results, fields) {
      if (error) {
        console.log(error);
      }
      console.log(`첫 번째 쿼리문 결과: ${results}`);
      if (results[0]) {
        check = true;
        res.send(results);
        console.log(check);
      }

      console.log(check);
    }
  );








  if (check == false) {
    console.log(`두 번째 쿼리문 실행`);

    connection.query(
      query2,
      [result1, result2, result3, result4, result6],
      function (error2, results2, fields) {
        if (error2) {
          console.log(error2);
        }
        console.log(`두 번째 쿼리문 결과: ${results2}`);
        res.send(results2);

      }
    )
  };

  connection.end();


  // 반환하는 JSON은 { "result":"menu"}형식이어야 함
});



app.post("/homemealapi", (req, res) => {

  global.time = req.body.times;

  console.log(req.body.time);

});



app.get("/homemealapi", (req, res) => {
  let connection = mysql.createConnection({
    host: "localhost",
    user: "ict",
    password: "ictproject",
    database: "ICT_project",
  });

  connection.connect();

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

  connection.end();


});



app.get("/randomapi", (req, res) => {
  let connection = mysql.createConnection({
    host: "localhost",
    user: "ict",
    password: "ictproject",
    database: "ICT_project",
  });

  connection.connect();

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

  connection.end();


});



/*app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/project/build/index.html'));
});
*/

app.listen(port, () => console.log(`Listening on port ${port}`));