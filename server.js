const express=require("express");
const dotenv=require("dotenv");   
const morgan=require("morgan");
const path=require('path');
const bodyparser=require('body-parser')
const connnectDB=require('./server/database/connection');  //calling the db connection js file

const app=express();          

dotenv.config({path:'config.env'})    //dotenv file ko use krne k liye
const PORT=process.env.PORT||8080;

app.use(morgan('tiny'))               //tiny message to print after every request like time taken

connnectDB();

app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine','ejs')   //setting template engine
// app.set('views') agar views k alawa folder use kiya to path mentioon krna pdega ,by default views rhta h

app.use(express.static('assets'))
// app.use('/css',express.static(path.resolve('__dirname','assets/css')))  //for using simple path name for using files
// app.use('/js',express.static(path.resolve('__dirname','assets/js')))
// app.use('/img',express.static(path.resolve('__dirname','assets/img')))

app.use('/',require('./server/routes/router'))  //routing through router file, all routing will be done through this path

app.listen(PORT,()=>{
    console.log(`server is running on https://localhost:${PORT}`);
})
