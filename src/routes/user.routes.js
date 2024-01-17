import { Router } from "express";
import {rigister} from "../controllers/user.controllers.js";

const router = Router()

router.route("/register").post(rigister) 

export default router