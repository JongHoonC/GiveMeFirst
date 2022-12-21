const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const {send} = require('process');
const db = require('./../db.js');
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'public/uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: {fileSize: 1024 * 1024 * 10},
});

router.get('/', (req, res) => {
  res.render('index', {fullpages: true});
});

router.get('/aboutUs', (req, res) => {
  res.render('aboutUs', {fullpages: false});
});

router.get('/join', (req, res) => {
  res.render('join', {fullpages: false});
});

router.post('/joinUs', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let userName = param['userName'];
  let userId = param['userId'];
  let userPw = param['userPw'];
  let userPwC = param['userPwC'];
  let mail = param['mail'];
  console.log(userName);
  let address = param['address'];
  // res.render('login');
});

router.get('/login', (req, res) => {
  res.render('login', {fullpages: false});
});

router.get('/manu', (req, res) => {
  res.render('Manufacture', {fullpages: false});
});

router.get('/edit', (req, res) => {
  let id = req.query.id;
  db.getMemoById(id, row => {
    res.render('notice_edit', {row: row[0], fullpages: false});
  });
});

router.post('/edit', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];
  let title = param['title'];
  let content = param['content'];
  db.updateMemos(id, title, content, () => {
    res.redirect('notice');
  });
});

router.get('/noticeDetail', (req, res) => {
  let id = req.query.id;
  db.getMemoById(id, row => {
    res.render('notice_page', {row: row[0], fullpages: false});
  });
});

router.get('/noticeWrite', (req, res) => {
  res.render('notice_write', {fullpages: false});
});

router.post('/noticeWrite', (req, res, next) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let title = param['title'];
  let content = param['content'];
  db.insertMemo(title, content, () => {
    res.redirect('/notice');
  });
});

router.get('/notice', (req, res) => {
  db.getMemo(rows => {
    res.render('notice', {rows: rows, fullpages: false});
  });
});

router.get('/delete', (req, res) => {
  let id = req.query.id;
  console.log(id);
  db.deleteById(id, () => {
    res.redirect('notice');
  });
});

router.get('/productDetail', (req, res) => {
  res.render('product_detail', {fullpages: false});
});

module.exports = router;
