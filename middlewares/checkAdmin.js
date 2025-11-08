import jwt from "jsonwebtoken"

import {userModel} from "../models/userSchema.js"


let checkAdmin = async (req, res, next) => {
       try{
        let userToken = req.headers.authorization

        if (!userToken) throw ("token not found/invalid token !") 

            // verify

            let result = jwt.verify(userToken, process.env.JWT_SECRET)

            let user = await userModel.findOne({"email.userEmail": result.email})

            if (!user) throw ("user not found !")

                if (!user.email.verified) throw ('Email not verified please verify the email first to perform this action !')

                    req.user = user
                    
                next()



    } catch(err) {
        console.log("auth failed with an error : ", err)
        res.status(401).json({ message: "auth admin failed please login !" })
    }
}

export { checkAdmin}