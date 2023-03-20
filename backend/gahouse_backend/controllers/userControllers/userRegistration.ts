// const mongoose = require("mongoose")
// import mongoose from "mongoose";
// const bcrypt = require('bcrypt');
import user from "../../schema/userSchema";
// const validator = require('validator');
import sgMail from '@sendgrid/mail';
const jwt = require('jsonwebtoken')
import bcrypt from "bcrypt";
import useschemavalidation from "../../validation/userSchema";
import Joi from "joi";
const userRegistration = async (req: any, res: any) => {

    try {
        const { email, first_name, last_name, password } = req.body;
        const { error, value } = useschemavalidation.validate({ email, first_name, last_name, password });
        if (error) {
            res.send({ message: error.details[0].message })
            // console.log(error.details[0].message)
        } else {
            console.log(value, 'this is the value')
            const { email, first_name, last_name, password } = value;
            // console.log(req.body)
            if (!email || !first_name || !last_name || !password) {
                res.status(400).send({ message: "user is not valid please enter the details" })
            }

            else {
                const existeuser = await user.findOne({ email: email })
                if (existeuser) {
                    res.status(400).send({ message: "user is already exist" })
                } else {
                    const bcryptpassword = bcrypt.hashSync(password, 10);
                    console.log(bcryptpassword, 'this is the  bcrypt password')

                    const saveData = await user.create({
                        first_name: first_name,
                        last_name: last_name,
                        email: email,
                        password: bcryptpassword,

                    })
                    console.log(saveData)

                    console.log(email)
                    const payload = {
                        first_name: first_name,
                        last_name: last_name,
                        password: bcryptpassword,
                        email: email,
                        registerEmail: false
                    }
                    const tokenforEmail = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: '30d'
                    })
                    console.log(tokenforEmail)

                    // sgMail.setApiKey("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");
                    // const msg: any = {
                    //     to: email,
                    //     from: process.env.GRID_EMAIL,
                    //     subject: 'Registration confirmation Mail',
                    //     text: 'welcome to the GA House',
                    //     html: `<strong>welcome to the GA House choose your property here click here ${tokenforEmail}</strong>`,
                    // }
                    // sgMail.send(msg).then((response) => {
                    //     console.log('message confirmation is send successfully')
                    // }).catch((err) => {
                    //     console.log(err)
                    // })

                    res.status(200).send({ message: " registration is successful" })
                }

            }
        }




    } catch (error: any) {


        res.status(400).send({ message: error.message })
    }

}

export default userRegistration