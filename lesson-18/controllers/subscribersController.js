// controllers/subscribersController.js
"use strict";

/**
 * Listing 16.4 (p. 230-231)
 * 구독자를 위한 컨트롤러 액션 정의
 */
// 구독자 모델 요청
const Subscriber = require("../models/Subscriber");

// 구독자 가져오기
exports.getAllSubscribers = (req, res, next) => {
  Subscriber.find({})
    .exec()
    .then((subscribers) => {
      console.log("Found subscribers: ", subscribers);
      res.render("subscribers", {
        subscribers: subscribers,
      });
    })
    .catch((error) => {
      console.log(`Error fetching subscribers: ${error.message}`);
      return next(error);
    });
};

// 구독 페이지 레더링
exports.getSubscriptionPage = (req, res) => {
  res.render("contact");
};

// 구독자 저장
exports.saveSubscriber = (req, res) => {
  let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  });

  newSubscriber
    .save()
    .then((result) => {
      res.render("thanks");
    })
    .catch((error) => {
      res.send(error);
    });
};

// 구독자 삭제
exports.deleteAllSubscribers = (req, res) => {
  Subscriber.deleteMany({})
    .exec()
    .then((result) => {
      res.render("subscribers", {
        subscribers: [],
      });
    })
    .catch((error) => {
      console.log(`Error deleting subscribers: ${error.message}`);
      return next(error);
    });
};
