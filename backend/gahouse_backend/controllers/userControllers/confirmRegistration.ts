import user from "../../schema/userSchema";
const jwt = require('jsonwebtoken')

const confirmRegister = async (req: any, res: any) => {
    const token = req.query.token;

    if (!token) {
        res.status(401).send({ message: "please fill the details for the registration" })
    } else {
        const decodeduser = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decodeduser)
        const saveData = await user.findOneAndUpdate({ email: decodeduser.email }, { $set: { isEmailVerified: decodeduser.registerEmail } });
        res.status(200).send({ data: saveData })
    }
}

export default confirmRegister;