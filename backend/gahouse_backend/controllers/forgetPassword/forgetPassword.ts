import user from "../../schema/userSchema";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const forgetPassword = async (req: any, res: any) => {

    try {
        const token = req.query.token;
        const decodetoken = jwt.verify(token, process.env.SECRET_KEY);

        console.log(token)
        if (decodetoken.forgetPassword == true) {
            const email = req.body.email;
            const password = req.body.password;
            const bcryptpassword = await bcrypt.hash(password, 10);

            const updateuser = await user.findOneAndUpdate({ email: email }, { $set: { password: bcryptpassword } }, {
                projection: { _id: 0, password: 0 }
            });
            res.status(200).send({ message: "user password is updated successfully", data: updateuser })

        } else {
            res.status(400).send({ message: "please try again" })
        }

    } catch (error: any) {
        res.status(401).send({ message: error.message })
    }



}

export default forgetPassword;