// const user = require("../../schema/userSchema");
import user from "../../schema/userSchema";
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const adminLogin = async (req:any, res:any) => {
    const { email, password, isAdmin } = req.body;
    if (!email || !password) {
        res.status(400).send({ message: "please enter the details" });
    } else {
        const finduser = await user.find({
            email: email
        });
        if (finduser == "") {
            res.status(400).send({ message: "user is not login" })
        } else {
            const hashhpassword = bcrypt.compareSync(password, finduser[0].password);
            if (hashhpassword) {
                const payload = { id: finduser[0]._id }
                const token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: '1d',
                })
                res.cookie("jwt", token)
                res.status(200).send({ message: "login successful" })
            } else {
                res.status(400).send({ message: "password mismatch" })
            }
        }
    }
}
export default  adminLogin;