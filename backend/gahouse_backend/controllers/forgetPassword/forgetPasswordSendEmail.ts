import user from "../../schema/userSchema";
const jwt = require('jsonwebtoken');
import sgMail from '@sendgrid/mail';

const forgetPasswordSendEmail = async (req: any, res: any) => {

    try {
        const email = req.body.email;
        const findValidEmail = await user.findOne({ email: email });
        if (!findValidEmail) {
            res.status(400).send({ message: "please enter the valid email" })
        } else {
            const payload = {
                id: findValidEmail._id,
                forgetPassword: true
            }
            const tokenforEmail = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: '30d'
            })

            sgMail.setApiKey("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");
            const msg: any = {
                to: email,

                from: "manishverma88180@gmail.com",
                subject: 'Password change  Mail',
                text: 'welcome to the GA House',
                html: `<strong>Change your password  here${tokenforEmail}</strong>`,
            }

            sgMail.send(msg).then((response) => {
                res.status(200).send({ message: "please check the email for change password" })
            }).catch((err) => {
                console.log(err)
            })
        }



    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }



}
export default forgetPasswordSendEmail;