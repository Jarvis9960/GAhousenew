// const user = require("../../schema/userSchema");
import user from "../../schema/userSchema";
import loginvalidation from "../../validation/loginvalidation";
import bcrypt from "bcrypt";
const jwt = require('jsonwebtoken');

const Logout = async (req: any, res: any) => {

    res.cookie("authorization", "")
    res.status(200).send({ message: "logout successful" })

}
export default Logout

