// models/User.js
"use strict";

/**
 * Listing 18.1 (p. 259)
 * user.js에서 사용자 모델 생성
 */

/**
 * 노트: Mongoose Schema 객체에서 객체 소멸(object destruct)의 사용에 주목하자.
 * {Schema}는 Mongoose의 Schema 객체를 동일한 이름의 상수로 할당한다. 나중에 이
 * 새로운 형식을 다른 모델에 적용할 것이다.
 */
const mongoose = require("mongoose"),
  { Schema } = mongoose,
  userSchema = Schema({
    name : {
      first : {
        type:String,
        required : true,
        trim:true,
      },
      last : {
        type : String,
        trim : true,
      }
    },
    email : {
      type : String,
      required : true,
      lowercase : true,
      unique : true,
      trim:true,
    },
    phoneNumber : {
      type: String,
      trim : true,
    },
    password : {
      type : String,
      required : true,

    },
    courses: [{

      type: mongoose.Schema.Types.ObjectId,
      ref : "Course"
    }],
    subscribedAccount: {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Subscriber"
    },
  },
    {
      timestamps : true
    }

  


  ); // @TODO: 사용자 스키마 생성

/**
 * Listing 18.2 (p. 260)
 * 사용자 모델에 가상 속성 추가
 */

userSchema.virtual("fullName").get(function() {
  return `${this.name.first} ${this.name.last}`;
});

userSchema.virtual("fullHangulName").get(function() {
  return `${this.name.last} ${this.name.first}`;
});
// @TODO: 사용자의 풀 네임을 얻기 위한 가상 속성 추가

module.exports = mongoose.model("User", userSchema);

/**
 * 노트: 이 책을 쓰는 시점에 Mongoose 메소드는 더 이상 의존하지 않는 어휘 this를
 * 사용하기 때문에 화살표 함수를 사용할 수 없다.
 */
