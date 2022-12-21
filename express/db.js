var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'giveMeFirst',
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

module.exports = {
  getMemo,
  insertMemo,
  updateMemos,
  getMemoById,
  deleteById,
};
