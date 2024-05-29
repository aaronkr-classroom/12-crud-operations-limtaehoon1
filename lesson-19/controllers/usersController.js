// controllers/usersController.js
"use strict";

/**
 * Listing 18.9 (p. 268-269)
 * Listing 18.11 (p. 271)
 * userController.js에서 인덱스 액션 생성과 index 액션의 재방문
 */
const User = require("../models/User"); // 사용자 모델 요청

module.exports = {
  index: (req, res, next) => {
    User.find() // index 액션에서만 퀴리 실행
      .then((users) => {
        // 사용자 배열로 index 페이지 렌더링
        res.locals.users = users; // 응답상에서 사용자 데이터를 저장하고 다음 미들웨어 함수 호출
        next();
      })
      .catch((error) => {
        // 로그 메시지를 출력하고 홈페이지로 리디렉션
        console.log(`Error fetching users: ${error.message}`);
        next(error); // 에러를 캐치하고 다음 미들웨어로 전달
      });
  },
  indexView: (req, res) => {
    res.render("users/index"); // 분리된 액션으로 뷰 렌더링
  },

  /**
   * 노트: 구독자 컨트롤러에서 index 액션이 getAllSubscribers를 대체한다. main.js에서 액션 관련
   * 라우트 index를 가리키도록 수정하고 subscribers.ejs를 index.ejs로 변경된 점을 기억하자. 이
   * 뷰는 views 폴더 아래 subscribers 폴더에 있어야 한다.
   */

  /**
   * Listing 19.2 (p. 278)
   * userController.js에 액션 생성 추가
   */
  // 폼의 렌더링을 위한 새로운 액션 추가
  /**
   * @TODO: new, create, redirectView 액션을 객체 리터럴로 묶어 익스포트
   */
  new: (req,res) => {
    res.render("users/new")
  },
  create: (req,res,next) => {
    let userParams = {
      
        name: {
          first : req.body.first, 
          last : req.body.last,
        },
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        profileImg: req.profileImg,
      
    };
    User.create(userParams)
      .then((user) => {
        console.log(`Created user: ${user.name}`);
        res.locals.redirect = "/users";
        res.locals.user =user;
        next();
    })
    .catch(error => {
      console.log(`Error Creating user: ${error.message}`);
      next(error);
    });
  },
  redirectView: (req,res,next) =>{
    let path = res.locals.redirect;
    if(path) res.redirect(path);
    else next();
  },
  /**
   * 노트: 구독자 컨트롤러에 new와 create 액션을 추가하는 것은 새로운 CRUD 액션을 맞춰
   * getAllSubscribers와 saveSubscriber 액션을 삭제할 수 있다는 의미다. 게다가 홈
   * 컨트롤러에서 할 것은 홈페이지인 index.ejs 제공밖에 없다.
   */

  /**
   * Listing 19.7 (p. 285)
   * userController.js에서 특정 사용자에 대한 show 액션 추가
   */
  show: (req,res,next) => {
    let userID = req.params.id;
    User.findById(userID)
    .then(user => {
      res.locals.user = user;
      next();
    })
    .catch(error => {
      console.log(`Error Fetching user by ID: ${error.message}`);
      next(error);
    });
  },

  showView: (req,res) =>{
    res.render("users/show")
  }
  /**
   * @TODO: show, showView 액션을 객체 리터럴로 묶어 익스포트
   */
};
