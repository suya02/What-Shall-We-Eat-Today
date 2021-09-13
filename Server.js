const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const cors = require('cors');
const { tmpdir } = require('os');
const port = 5000;
const router = express.Router();

//cors이슈 해결하기 위해 서버 접근 권한 허용 
app.use(cors({
    origin: 'http://3.36.96.79:3000'
}));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//빌드한 index.html 파일 /로 접속했을때 랜더링 (프로젝트 다 끝나면 마지막에 빌드하고 렌더링하기)


//API 호출, 
//여기서 Mysql 접속한다음 http 라우팅 하나 파서 프론트엔드에서 받은 데이터들로 결과 데이터 보여주는 알고리즘 짜면 됨 
app.get('/api', (req, res) => {
    res.send({ menu: "pizza" });
})

//프론트에서 백엔드의 apipost 로 post했을때 데이터 처리 
app.post('/apipost', (req, res) => {

    global.tmp = req.body.firstName;//전역적으로 사용하기 위해 tmp변수를 global하게 설정
    console.log(tmp);

});

app.get('/apipost', (req, res) => {


    res.send(tmp);
});


app.get('/api2', (req, res) => {
    res.send({ menu: "jam" });
})



/*app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/project/build/index.html'));
});
*/

app.listen(port, () => console.log(`Listening on port ${port}`));
