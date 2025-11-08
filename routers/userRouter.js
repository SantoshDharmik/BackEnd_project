import express from "express";

import {handleUserRegister,handleOTPVerification,handleUserLogin,handleResetPasswordRequest,handleOTPForPasswordReset,handleResetPasswordRequestOldToNew} from "../controllers/userController.js"

import { checkAdmin } from "../middlewares/checkAdmin.js";

const userRouter = express.Router()

userRouter.post("/register", handleUserRegister)

userRouter.post("/verify-otp", handleOTPVerification)

userRouter.post("/user-login", handleUserLogin)

userRouter.post("/password-reset-request",checkAdmin,handleResetPasswordRequest)

userRouter.post("/verify-reset-password-request",handleOTPForPasswordReset)

userRouter.patch("/old-password-newPassword",checkAdmin,handleResetPasswordRequestOldToNew )


export { userRouter }