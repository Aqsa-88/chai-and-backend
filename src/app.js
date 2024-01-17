import  express, { Router } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

 const app = express()

 app.use (cors ({
    origin : process.env.CORS_ORIGIN,
    credentials : true
 }))

 app.use(express.json({Limit: "16kb"}))
 app.use(express.urlencoded({extended : true , Limit :"16kb"}))
 app.use(express.static("Public"))
 app.use(cookieParser())

 //rout import

import userrouter from "./routes/user.routes.js";

 //routes declearation
 app.use("/api/v1/users", userrouter)

 //http://localhost:8000/api/v1/user/rigester

 export { app }



