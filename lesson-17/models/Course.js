// models/Course.js
"use strict";

/**
 * Listing 17.6 (p. 249)
 * 새로운 스키마와 모델의 생성
 */
const mongoose = require("mongoose"),
  courseSchema = mongoose.Schema({
    _id: {
      type : String,
      required : true,
      unique : true,
    },
    title: {
      type:String,
      required : true,
    },
    description: {
      type : String,
      required : true,

    },
    price : {
      type: Number,
      required : true,
      min : 0
    },
    courseImg : {
      type: String

    }

  });
courseSchema.methods.getInfo = () => {
  return `Title : ${this.title} Description ${this.description}`
};

courseSchema.methods.findSamePrice = () => {
  return this.model("Course")
    .find({price: this.price})
    .exec();
};

courseSchema.methods.findDiscountPrice = (price) => {
  return this.model("Course")
    .find({price: {$lt:price}})
    .exec();
};

courseSchema.virtual("subscribers",{
  ref : "Subscriber",
  localField : "_id",
  foreignField : "courses"

});

courseSchema.set("toObject", {virtual :true});
courseSchema.set("toJSON", {virtual :true});

module.exports = mongoose.model("Course", courseSchema);
