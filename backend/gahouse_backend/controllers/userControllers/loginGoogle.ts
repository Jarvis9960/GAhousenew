// const user = require("../../schema/userSchema");
import user from "../../schema/userSchema";

import bcrypt from "bcrypt";
// import bcrypt from 'bcrypt'
const jwt = require('jsonwebtoken');

const GoogleLogin = async (req: any, res: any) => {

    const userData = req?.body;
    console.log(userData, 'this is the userdata')
    if (!userData) {
        return "No user from google"
    }
    let userExist

    userExist = await user.findOne({ email: userData.email })

    let userObj = {
        email: userData.email,
        first_name: userData.firstName,
        last_name: userData.lastName,
        loginType: "google",
        isEmailVerified: true,
        profilePicture: userData?.profilePicture,
    }
    if (!userExist) {
        userExist = await user.create(userObj)

    } else {
        userExist = await user.findOneAndUpdate({ email: userData.email }, { ...userObj })
    }
    const token = await jwt.sign(
        { id: userExist?._id }, process.env.SECRET_KEY,
        {
            expiresIn: process.env.JWT_TOKEN_EXPIRY_TIME,
        }
    )

    await res.cookie("authorization", `Bearer ${token}`, {
        httpOnly: true,
        secure: true,
        maxAge: Date.now() + 10 * 365 * 24 * 60 * 60,
        sameSite: 'none',
        // sameSite: "lax"
        // 	domain:process.env.FRONTEND_BASE_DOMAIN
    })
    
        res.status(200).send(userExist)


}
export default GoogleLogin