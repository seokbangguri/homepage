// app.js

const express = require('express');
const app = express();
const path = require('path');

// 정적 파일들을 제공하기 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public')));

// 기존 웹 애플리케이션의 라우트와 로직 추가
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 서버 시작
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

