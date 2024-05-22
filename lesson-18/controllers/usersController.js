// controllers/usersController.js
"use strict";

/**
 * Listing 18.9 (p. 268-269)
 * Listing 18.11 (p. 271)
 * userController.js에서 인덱스 액션 생성과 index 액션의 재방문
 */
const User = require("../models/User"); // 사용자 모델 요청

module.exports = {
  index : (req,res,next) => { // DB 요청과 응답
    User.find()
      .then(users => {
        res.locals.users = users;
        next();
      })
      .catch(e => {
        console.log(`Error getting user ${e.message}`);
        //res.redirect("/");
        next(e);
      })

 },
 indexview : (req,res) => { // 페이지 렌더링
  res.render("users/index");

 }
};

/**
 * 노트: 구독자 컨트롤러에서 index 액션이 getAllSubscribers를 대체한다. main.js에서 액션 관련
 * 라우트 index를 가리키도록 수정하고 subscribers.ejs를 index.ejs로 변경된 점을 기억하자. 이
 * 뷰는 views 폴더 아래 subscribers 폴더에 있어야 한다.
 */
