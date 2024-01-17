//require('dotenv').config({path : './env'})
import dotenv from "dotenv";
import ConnectDb from "./db/index.db.js";
import { app } from "./app.js";

dotenv.config({
    path : '/.env',
})


ConnectDb()

.then(() =>{
        app.listen(process.env.Port || 8000 ,()=>{
        console.log(`Server is running at port : ${process.env.Port}
        `);
    })
})
.catch((err) =>{
    console.log("Mongoose Db connection Failed !! ",err)
})








/*
import { Express } from "express";
const app = Express()
// function use ifi  ;(async()=>{})this is a function ( ) and imidaitly use 
( async()=>{ 
    try {
      await  mongoose.Connection (`${process.env.MongoDb_Url}/${Db_Name}`) // (/database ka name b import kervana ha)
      app.on("Error" ,(error) =>{
        console.log("Error :" ,error);
       throw error
      })
      app.listen(process.env.Port,() =>{
       console.log(`This app can be listening ${process.env.Port}`)
      })
    } catch (error) {
        console.log("Error", error)
        throw error;
    }
})() */


// function connectDb (){}
// connectDb()