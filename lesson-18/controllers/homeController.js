// homeController.js
"use strict";

/**
 * Listing 12.5 (p. 178)
 * 홈 컨트롤러로의 라우팅
 */


// 특정 라우트를 위한 콜백 함수 추가


// exports.showSignUp = (req, res) => {
//   res.render("contact");
// };

// exports.postedSignUp = (req, res) => {
//   res.render("thanks");
// };

/**
 * Listing 12.9 (p. 182)
 * 콘텐츠의 설정과 렌더링된 뷰에 전달
 *
 * [노트] 뷰 안에서는 offeredCourses라는 변수명을 통해 배열에 접근할 수 있다.
 * 홈 컨트롤러 내에서 이 배열은 courses라는 이름으로 다룬다.
 */
var courses = [
  {
    title: "Event Driven Cakes",
    cost: 50,
  },
  {
    title: "Asynchronous Artichoke",
    cost: 25,
  },
  {
    title: "Object Oriented Orange Juice",
    cost: 10,
  },
]; // 코스를 위한 배열 정의

/**
 * Listing 18.7 (p. 266)
 * homeController.js에서의 액션 수정
 */
module.exports = {
  // 모든 컨트롤러 액션과 함께 객체 리터럴 익스포트
  /*
   * @TODO: showHome와 showTransportation 액션을 객체 리터럴로 묶어 익스포트
   */
  showHome:  (req, res) => {
    res.render("index");
  },
  showTransportation : (req, res) => {
    res.render("transportation");
  },
};
