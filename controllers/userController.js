import {userModel} from "../models/userSchema.js"

let handleRegisteruser = async (requestAnimationFrame,res) => {
    try {

        let {name, phone, email, address, password} = req.body

        if (!name || !phone || !email || !address || !password) throw ("Incomplete data. Cannot Register User !")

            // if user trying to create with same number and email 

         let userExists = await userModel.findOne({ $or: [{ "email": email }, { "phone": phone }] })   
         
         if (userExists) throw ("email/phone already registred please enter a different email/phone or please head to login.")

        let newUser = new userModel({ name, phone, email, address, password })    

        await newUser.save()

         res.status(202).json({ message: `Successfully Registreded user with email ${email}` })



        
    }catch (error) {
        console.log('error while registering the user  : ', err)
        res.status(400).json({ message: "unable to register user", err })
    }
}

export {handleRegisteruser}