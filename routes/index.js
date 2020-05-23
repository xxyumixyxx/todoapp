var express = require('express');
var router = express.Router();

/* ログインページを取得 */
router.get('/', function(req, res, next) {
  //userlogin.ejsをrenderして画面を取得
  res.render('userlogin', { title: 'ToDoApp_Login' });
});

/* ログイン処理 */
//postの第一引数は、postした受け皿のurlを記述　任意で良い
router.post('/login', function(req, res, next){
  //reqの中に何が入っているのか、確認
  console.log(req.body.username);

  // ユーザー情報がDBにあるかチェック
  //今回はusernameとpasswordべた張り
  if(req.body.username === "test" && req.body.password === "a12345"){
    // ログイン成功
    // "req.session.user"にユーザー情報の確認が取れた確証としてオブジェクトを格納しておく
    req.session.user = { password:"a12345" };
    // userhome.ejsへ遷移
    res.render('userhome', { title: 'ToDoApp_userhome' });  
  }else{
    //　ログイン失敗
    // 条件に外れたら、userlogin.ejsに戻る
    res.render('userlogin', { title: 'ToDoApp_Login' });
  }
  
});

module.exports = router;
