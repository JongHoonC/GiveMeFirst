var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'seoultakju.c1s9tr2yqxmc.ap-northeast-1.rds.amazonaws.com',
  user: 'root',
  password: 'giveme1234',
  database: 'seoultakju',
  dateStrings: 'date',
  multipleStatements: true,
});

function getMemo(callback) {
  connection.query('SELECT * FROM noticeTable ORDER BY id DESC', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
}
// 작성페이지에서 작성할때 데이터베이스에 정보가 들어가게해주는 함수
function insertMemo(title, content, callback) {
  connection.query(`INSERT INTO noticeTable(create_time,title,content) VALUES (NOW(),'${title}','${content}')`, err => {
    if (err) throw err;
    callback();
  });
}

function updateMemos(id, title, content, callback) {
  connection.query(`UPDATE noticeTable SET create_time = NOW(), title= '${title}', content= '${content}' WHERE id = ${id}`, err => {
    if (err) throw err;
    callback();
  });
}

function getMemoById(id, callback) {
  connection.query(`SELECT * FROM noticeTable WHERE id = ${id}`, (err, row) => {
    if (err) throw err;
    callback(row);
  });
}

// 공지사항 삭제버튼 누를때 쓰는함수
function deleteById(id, callback) {
  connection.query(`DELETE FROM noticeTable WHERE id = ${id}`, err => {
    if (err) throw err;
    callback();
  });
}

function insertJoin(userId, userName, userPw, userPwC, userMail, userNumber, callback) {
  connection.query(`INSERT INTO userList(userId,create_time,userName,userPw,userPwC,userMail,userNumber) VALUES ('${userId}',NOW(),'${userName}','${userPw}','${userPwC}','${userMail}','${userNumber}')`, err => {
    if (err) throw err;
    callback();
  });
}

function checkLogin(userId, userPw, callback) {
  connection.query(`SELECT * FROM userList WHERE userId = '${userId}' and userPw = '${userPw}'`, (err, results) => {
    if (err) throw err;
    callback(results);
  });
}

function getMainNotice(callback) {
  connection.query('SELECT * FROM noticeTable ORDER BY id DESC', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
}

module.exports = {
  getMemo,
  insertMemo,
  updateMemos,
  getMemoById,
  deleteById,
  insertJoin,
  checkLogin,
  getMainNotice,
};
