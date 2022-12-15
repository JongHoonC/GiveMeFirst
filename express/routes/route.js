const express = require('express');
const router = express.Router();
const path = require('path');
const {send} = require('process');

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
  res.render('notice_edit', {fullpages: false});
});

router.get('/noticeDetail', (req, res) => {
  res.render('notice_page', {fullpages: false});
});

router.get('/noticeWrite', (req, res) => {
  res.render('notice_write', {fullpages: false});
});

router.get('/notice', (req, res) => {
  res.render('notice', {fullpages: false});
});

router.get('/productDetail', (req, res) => {
  res.render('product_detail', {fullpages: false});
});

module.exports = router;
