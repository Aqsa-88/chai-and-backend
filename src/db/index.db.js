import mongoose from "mongoose";
import { Db_Name } from "../constants.js";

const ConnectDb  = async ()=>{
    try {
        const ConnectionDb = await mongoose.connect(`${process.env.MongoDb_Url }/ ${Db_Name}`)
        console.log(`Mongoose conect!! local host: ${ConnectionDb.connection.host}`) //varibale .connection .host is lis use hota ha kese or local host per use na ho

    } catch (error) {
        console.log(`Mongoose can be  Failed` ,error)
        process.exit(1)
    }
} 
export default ConnectDb 