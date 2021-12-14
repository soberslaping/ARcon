
const express=require("express");
const route=express.Router();
const services=require('../services/render')
const controller=require('../controller/controller')

route.get('/',services.homeRoutes) //homeRoutes func in render.js that render the data with imgPath as argument

route.get('/viewObject',services.viewObject3d)    //viewObject func in render.js id k through document leke webxr wali hit_test.js m jayga

//API
route.get('/api/medias',controller.find) //find func from controller.js file that sends the data to browser


module.exports=route