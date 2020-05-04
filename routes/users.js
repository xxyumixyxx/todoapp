var express = require('express');
var router = express.Router();

/* ログイン後、userhome内でsessionを保つ */
router.get('/home', function(req, res, next){
  // ログイン情報があるかチェック
  // "req.session.user"にオブジェクトが入っていれば、ログインの保障が取れている
  if(req.session.user === {}){
    res.render('userhome', { title: 'ToDoApp_userhome' });
  }else{
    res.render('/', { title: 'ToDoApp_Login' });
  }
});


module.exports = router;
