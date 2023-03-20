// const mongoose= require("mongoose");
import mongoose from "mongoose";
const adminSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

})

const admin= mongoose.model("admin",adminSchema);
module.exports= admin;