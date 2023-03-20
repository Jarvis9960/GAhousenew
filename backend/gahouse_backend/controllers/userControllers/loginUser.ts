// const user = require("../../schema/userSchema");
import user from "../../schema/userSchema";
import loginvalidation from "../../validation/loginvalidation";
import bcrypt from "bcrypt";
const jwt = require('jsonwebtoken');

const Login = async (req: any, res: any) => {

    const { email, password } = req.body;
    const { error, value } = loginvalidation.validate(req.body);
    if (error) {
        // console.log(error?.details[0])
        res.status(400).send({ message: error.details[0].message })
    } else {
        console.log(password)
        if (!email || !password) {
            res.status(400).send({ message: "please enter the details" });
        } else {
            console.log(email)
            const finduser = await user.findOne({ email: email });
            console.log(finduser)

            if (!finduser) {
                res.status(400).send({ message: "user is not find" })
            } else {
                if (finduser?.password == undefined) {
                    res.status(400).send({ message: "incorrect password" })
                } else {

                    if (finduser.isEmailVerified == true) {
                        console.log(finduser)
                        const hashhpassword = await bcrypt.compare(password, finduser?.password);
                        console.log(hashhpassword)
                        if (hashhpassword) {
                            const payload = { id: finduser?._id }
                            const token = await jwt.sign(payload, process.env.SECRET_KEY)
                            const options = {
                                httpOnly: true,
                                secure: true,
                                maxAge: Date.now() + 10 * 365 * 24 * 60 * 60,
                                sameSite: 'none',
                            }
                            console.log(token)
                            res.cookie("authorization", `Bearer ${token}`, options)
                            res.status(200).send({ message: "login successful" })
                        } else {
                            res.status(400).send({ message: "password mismatch" })
                        }
                    } else {
                        res.status(400).send({ message: "please verify the email" })
                    }


                }
            }


        }
    }

}
export default Login

