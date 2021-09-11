const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");

    next();
});
*/



//빌드한 index.html 파일 /로 접속했을때 랜더링 (프로젝트 다 끝나면 마지막에 빌드하고 렌더링하기)
app.get('/', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/project/build/index.html'));
});



//API 호출, 
//여기서 Mysql 접속한다음 http 라우팅 하나 파서 프론트엔드에서 받은 데이터들로 결과 데이터 보여주는 알고리즘 짜면 됨 
app.get('/api', (req, res) => {
    res.send({ menu: "pizza" });
})

//프론트에서 데이터 받는걸 해야하는데 안됨
app.post('/apipost', (req, res) => {
    console.log("result :", req.body.data);
    res.send("<h1>WELCOME<h1>");
});





app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/project/build/index.html'));
});


app.listen(port, () => console.log(`Listening on port ${port}`));
