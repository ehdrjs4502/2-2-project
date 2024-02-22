// dotenv 라이브러리 로드
require("dotenv").config({ path: "../.env" });

// 예시: DB_HOST 환경 변수 사용
const dbHost = process.env.DB_HOST;
const user = process.env.DB_USER;
const pw = process.env.DB_PASSWORD;
const db = process.env.DB;

// config/database.js
module.exports = {
  host: dbHost,
  user: user,
  password: pw,
  database: db,
  multipleStatements: true, // 다중 쿼리 쓸 수 있게 해주는 고마운 거
};
