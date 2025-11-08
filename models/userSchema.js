import mongoose from "mongoose";
import bcrypt from "bcrypt"

let addressObject = {
    street: "", city: "", state: "", country: "", pincode: ""
}

let emailObject = {
    userEmail: "", verify : false
}


let usersSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email:{
        type: Object,
        required:true,
        default: emailObject
    },
    address: {
        type: Object,
        required: true,
        default: addressObject
    },
    password: {
        type: String,
        require: true
    },
    registeredAt: {
        type: Object,
        require: true,
        default: Date.now
    }
})

usersSchema.pre("save", async function () {
    try {
        console.log('pre method called !')

        this.registeredAt = "D:" + new Date().toLocaleDateString() + "T:" + new Date().toLocaleTimeString()

        let hash = await bcrypt.hash(this.password, 12)

        this.password = hash

    } catch (error) {
        console.log("error in pre save method of user schema : ", error)
    }
})

let userModel = new mongoose.model("user", usersSchema)

export { userModel }



