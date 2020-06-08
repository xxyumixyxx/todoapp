var express = require('express');
var router = express.Router();

/* ログイン後、userhome内でsessionを保つ */
router.get('/home', function(req, res, next){
  //☆ブラウザに表示されるか見たいなら、"http://localhost:3000/users/home"

  // ログイン情報があるかチェック(ログイン状態が保持されていないとしたくないものはいつもログインチェック)
  //"req.session.user"がオブジェクトかの確認
  
  // "req.session.user"にオブジェクトが入っていれば、ログインの保障が取れている
  if(req.session.user === {}){
    res.render('userhome', { title: 'ToDoApp_userhome' });
  }else{
    res.render('/', { title: 'ToDoApp_Login' });
  }
});

/* todo作成 */


module.exports = router;
