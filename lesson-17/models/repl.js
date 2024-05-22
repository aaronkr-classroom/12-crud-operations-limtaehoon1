// models/REPL.js
"use strict";

/**
 * Listing 17.4 (p. 245)
 * REPL 터미널에서의 구독자 모델 설정
 */
const mongoose = require("mongoose"), // REPL에서 Mongoose 모듈 요청
  Subscriber = require("./subscriber"); // 로컬 프로젝트 파일과 모델명을 사용해 Subscriber 모델의 변수 할당

  
  
mongoose.connect(
    "mongodb+srv://lim021298:ERBJYBO43EvfIngF@ut-node.z7jjt1w.mongodb.net/?retryWrites=true&w=majority&appName=ut-node",
    {}
  );
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connect to MONGODB!!!");
  });
// mongoose.Promise = global.Promise; // Mongoose에 main.js에서 했던 것처럼 기본 프라미스의 사용 알리기

/**
 * Listing 17.5 (p. 246)
 * REPL 터미널에서의 Mongoose 퀴리 모델 메소드의 테스트
 */
Subscriber.create({
  name: "Jon Wexler",
  email: "jon@wexler",
  phoneNumber: "555-555-5555",
})
  .then((subscriber) => {
    console.log(subscriber.getInfo());
  })
  .catch((error) => {
    console.log(error.message); // 구독자 도큐먼트의 생성
  });

var testSubscriber; // 퀴리 결과를 할당하기 위한 변수 설정

Subscriber.findOne({
  name: "Jon Wexler",
}).then((result) => {
  testSubscriber = result; // 방금 생선한 도큐먼트 검색
  console.log(testSubscriber.getInfo()); // 구독자 레코드 로깅
});

/**
 * Listing 17.7 (p. 252)
 * REPL 터미널을 사용해 연결 모델 테스팅하기
 */
const Course = require("./Course"); // Course 모델 요청
var testCourse, testSubscriber; // 프라미스 체인 외부에서 2개의 변수 설정

Course.create({
  title: "Tomato Land",
  description: "Locally farmed tomatoes only",
  zipCode: 12345,
  items: ["cherry", "heirloom"],
})
  .then((course) => {
    testCourse = course; // 새로운 강좌 인스턴스의 생성
    console.log(testCourse);
  })
  .catch((error) => {
    console.log(error.message);
  });

Subscriber.findOne({}).then((subscriber) => {
  testSubscriber = subscriber; // 구독자 찾기
  console.log(testSubscriber.getInfo());
});

testSubscriber.courses.push(testCourse); // testCourse 강좌를 testSubscriber의 강좌 배열에 Push한다
testSubscriber.save(); // 모델 인스턴스를 다시 저장한다

Subscriber.populate(testSubscriber, "courses").then((subscriber) => {
  console.log(subscriber.courses); // 모델에서 populate를 사용한다
});

/**
 * 노트: 이 예제를 위해 에러 처리를 위한 errors를 사용하지 않아 코드가 짧다. 하지만 테스트 시에는
 * 이런 에러 처리를 하려 할 수도 있다. catch(error => console.log(error.message))와 같은 간단한
 * 코드도 디버깅 시 많은 도움이 된다.
 */
