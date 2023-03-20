// const user = require("../../schema/userSchema");
import user from "../../schema/userSchema";
const bcrypt = require('bcrypt')
var validatorEmail = require("email-validator");
const validator = require('validator');

const registerAdmin = async (req:any, res:any) => {
    try {
        const { email, phone, name, password, cpassword, isAdmin } = req.body;
        if (!email || !phone || !name || !password || !cpassword) {
            res.status(400).send({ message: "user is not valid please enter the details" })
        } else {
            const existeuser = await user.find(
                {
                    $or: [
                        { email: email },
                        { phone: phone }
                    ]
                }
            )
            if (existeuser != "") {
                res.status(400).send({ message: "user is already exist" })
            } else {
                if (password === cpassword) {
                    const phonevalidation = validator.isMobilePhone(phone);
                    if (phonevalidation) {
                        const parsePhonetoInt = parseInt(phone)
                        const bcryptpassword = bcrypt.hashSync(password, 10);
                        console.log(bcryptpassword, 'this is the  bcrypt password')
                        const saveuser = await user.create(
                            {
                                name: req.body.name,
                                password: bcryptpassword,
                                email: email,
                                phone: parsePhonetoInt,
                                isAdmin: isAdmin

                            }
                        );
                        console.log(saveuser)
                        res.status(200).send({
                            message: "registration is successful", data: {
                                name: saveuser.name,
                                email: saveuser.email,
                                id: saveuser._id,
                                phone: phone
                            }
                        })
                    } else {
                        res.status(400).send({ message: "please enter the valid phone number" })
                    }
                } else {
                    res.status(400).send({ message: "password mismatch" })
                }
            }

        }
    } catch (error:any) {
        res.status(400).send({ message: error.message })
    }
}

export default  registerAdmin;