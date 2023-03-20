const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
import user from "../schema/userSchema";

const auth = async (req: any, res: any, next: any) => {

    try {
        // console.log(process.env.SECRET_KEY, 'process.env.SECRET_KEYprocess.env.SECRET_KEY')
        let token = req.cookies.authorization
        token=token.replace("Bearer ","")
        // console.log(token)
        // console.log(req.cookies, 'this is the tpken')
        if (!token) {
            res.status(401).send({ message: "user is not autheroised" })
        } else {
            const verifyUser = await jwt.verify(token, process.env.SECRET_KEY);
            const id = verifyUser.id;
            const validateUser = await user.findById({ _id: id });
            if (!validateUser) {
                res.status(404).send("unauthorized")
            }
            req.user = validateUser;
            next();
        }

    } catch (error) {
        console.log(error)
        res.status(400).send({ message: "error occurs" })

    }

}
export default auth;