// models/17.9.js
"use strict";

/**
 * Listing 17.9 (p. 254)
 * REPL.js에서의 명령 수행
 */
const mongoose = require("mongoose"),
  Subscriber = require("./Subscriber"),
  Course = require("./Course");

var testCourse, testSubscriber;

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://lim021298:ERBJYBO43EvfIngF@ut-node.z7jjt1w.mongodb.net/?retryWrites=true&w=majority&appName=ut-node",
  {}
);
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connect to MONGODB!!!");
});
// mongoose.Promise = global.Promise;

Subscriber.remove({}) // 모든 구독자와 강좌 정보를 삭제한다
  .then((items) => console.log(`Removed ${items.n} records!`))
  .then(() => {
    return Course.remove({});
  })
  .then((items) => console.log(`Removed ${items.n} records!`))
  .then(() => {
    // 새로운 구독자 생성
    return Subscriber.create({
      name: "Jon Wexler",
      email: "jon@wexler.com",
      zipCode: 12345,
    });
  })
  .then((subscriber) => {
    console.log(`Created Subscriber: ${subscriber.getInfo()}`);
  })
  .then(() => {
    return Subscriber.findOne({
      name: "Jon",
    });
  })
  .then((subscriber) => {
    testSubscriber = subscriber;
    console.log(`Found one subscriber: ${testSubscriber.getInfo()}`);
  })
  .then(() => {
    // 새로운 강좌 생성
    return Course.create({
      title: "Tomato Land",
      description: "Locally farmed tomatoes only",
      zipCode: 12345,
      items: ["cherry", "heirloom"],
    });
  })
  .then((course) => {
    console.log(`Created Course: ${course.title}`);
  })
  .then(() => {
    // 구독자와 강좌 연결
    testSubscriber.courses.push(testCourse);
    testSubscriber.save();
  })
  .then(() => {
    // 구독자에서 강좌 도큐먼트의 populate
    return Subscriber.populate(testSubscriber, "courses");
  })
  .then((subscriber) => console.log(subscriber))
  .then(() => {
    // ObjectID가 같은 강좌의 구독자를 퀴리
    return Subscriber.find({
      courses: mongoose.Types.ObjectId(testCourse._id),
    });
  })
  .then((subscriber) => console.log(subscriber));

/**
 * 팁: Mongoose와 몽고DB의 퀴리는 좀 복잡해질 수 있다. 동일한 퀴리를 Mongoose로
 * 해보고 몽고DB 퀴리 문법과 연계시키는 연습을 하는 것을 권한다.
 */
