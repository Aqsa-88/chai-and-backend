import { asynchandler } from "../utile/asynchandler.js";

const rigister = asynchandler (async (req,res) =>{
        res.status(200).json({
            message : "ok"
        })
})
export {rigister}