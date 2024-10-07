const mongoose = require("mongoose")
const {data} = require("express-session/session/cookie");

mongoose.connect("mongodb://127.0.0.1:27017/EndGame_02_Db")

const userSchema = mongoose.Schema({
  username:String,
  nickname:String,
  description:String,
  categories:{
    type:Array,
    default:[]
  },
  datecreated:{
    type:Date,
    default: Date.now()
  }
})

 module.exports = mongoose.model('user',userSchema)