const express = require('express');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.port || 8000;
const sessionOption = require('./routes/session')
const bcrypt = require('bcrypt');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "0000",
    database: "simpleboard",
    
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
var MySQLStore = require('express-mysql-session')(session);
var sessionStore = new MySQLStore(sessionOption);

app.use(session({  
	key: 'session_cookie_name',
    secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
    
}))

app.post("/login", (req, res) => { // 데이터 받아서 결과 전송
    const username = req.body.userId;
    const password = req.body.userPassword;
    const sendData = { isLogin: "",
                       nickname: username };


    if (username && password) {
               // id와 pw가 입력되었는지 확인
        db.query('SELECT * FROM userTable WHERE username = ?', [username], function (error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {       // db에서의 반환값이 있다 = 일치하는 아이디가 있다.      
                let passowrdCheck = bcrypt.hashSync(password, 10);

                bcrypt.compare(password , passowrdCheck, (err, result) => {    // 입력된 비밀번호가 해시된 저장값과 같은 값인지 비교


                    if (result === true) {                  // 비밀번호가 일치하면
                        req.session.is_logined = true;     // 세션 정보 갱신
                        req.session.nickname = username;
                        req.session.save(function () {
                            sendData.isLogin = "True"
                            res.send(sendData);
                        });
                        db.query(`INSERT INTO logTable (created, username, action, command, actiondetail) VALUES (NOW(), ?, 'login' , ?, ?)`
                            , [req.session.nickname, '-', `React 로그인 테스트`], function (error, result) { });
                    }
                    else{                                   // 비밀번호가 다른 경우
                        sendData.isLogin = "로그인 정보가 일치하지 않습니다."
                        res.send(sendData);
                    }
                })                      
            } else {    // db에 해당 아이디가 없는 경우
                sendData.isLogin = "아이디 정보가 일치하지 않습니다."
                res.send(sendData);
            }
        });
    } else {            // 아이디, 비밀번호 중 입력되지 않은 값이 있는 경우
        sendData.isLogin = "아이디와 비밀번호를 입력하세요!"
        res.send(sendData);
    }
});

app.get('/authcheck', (req, res) => {      
    const sendData = { isLogin: "" , nickname:"dd"};
    const seisson_id = req.sessionID
    if (req.session.isLogin) {
        sendData.isLogin = "True"
        sendData.nickname = req.session.nickname
    } else {
        sendData.isLogin = "False"
    }
    res.send(sendData);
    console.log(req.session.is_logined)
    console.log(sendData.isLogin)
})

app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});

app.post("/loginsucces", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const sqlQuery = "INSERT INTO simpleboard (title, content) VALUES (?,?)";
    db.query(sqlQuery, [title, content], (err, result) => {
        res.send('success!');
    });
});



app.get("/api/get", (req, res)=> {
    const sqlQuery = "SELECT * FROM simpleboard;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

app.post("/api/insert", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const sqlQuery = "INSERT INTO simpleboard (title, content) VALUES (?,?)";
    db.query(sqlQuery, [title, content], (err, result) => {
        res.send('success!');
    });
});

app.delete("api/delete/:idx", (req, res) =>{
    const sqlQuery = "DELETE FROM simpleboard WHERE idx = "
})


app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
});