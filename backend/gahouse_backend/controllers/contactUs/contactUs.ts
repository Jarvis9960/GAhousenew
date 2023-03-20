import contactUs from "../../schema/contactUs";
import contactUsValidation from "../../validation/contactUs";
import axios from "axios";
const createContactUs = async (req: any, res: any) => {
    try {
        console.log(req.body, 'tjos soi')
        const { error, value } = contactUsValidation.validate(req.body);
        if (error) {
            res.status(400).send({ message: error.details[0].message })
        } else {

            let { email, firstName, phone, quary } = req.body
            quary = "I am interested in renting a place"
            console.log(quary)
            console.log(email, 'this is the email')
            try {

                const res1 = axios.get(`https://api-v2.liondesk.com//contacts?email=${email}`,
                    {
                        headers: {
                            "Authorization": "Bearer 888da37bd4b651d51f6e4fa3e2529aeb396d7f70 ",
                            "Content-Type": "application/json"
                        }
                    })

                res1.then((data) => {
                    console.log(data.data.data == "")
                    if (data.data.data == "") {
                        try {
                            console.log('id is not exist we try to add tha data')
                            const res1 = axios.post('https://api-v2.liondesk.com//contacts',
                                {
                                    "email": email,
                                    "mobile_phone": phone,
                                    "tags": quary,
                                    "first_name": firstName
                                },
                                {
                                    headers: {
                                        "Authorization": "Bearer 888da37bd4b651d51f6e4fa3e2529aeb396d7f70 ",
                                        "Content-Type": "application/json"
                                    }
                                })

                            res1.then((data) => {
                                res.status(200).send({ message: "data is inserted" })
                                console.log(data.data, 'this si  thd ata')

                            }).catch((err) => {
                                console.log(err)
                            })

                        } catch (error: any) {
                            res.send({ message: error.message })

                        }

                    } else {
                        console.log('inside the update link')
                        const id = data.data.data[0].id;
                        console.log(data.data.data[0].tags)
                        const oldtages = data.data.data[0].tags
                        console.log(oldtages + "     " + quary)

                        try {
                            console.log('id is not exist we try to  update add tha data')
                            const res1 = axios.patch(`https://api-v2.liondesk.com//contacts/${id}`,
                                {

                                    "tags": oldtages + "" + quary
                                },
                                {
                                    headers: {
                                        "Authorization": "Bearer 888da37bd4b651d51f6e4fa3e2529aeb396d7f70 ",
                                        "Content-Type": "application/json"
                                    }
                                })
                            res1.then((data) => {
                                console.log(data)
                                res.status(200).send({ message: "data is updated" })

                                // console.log(data.data, 'this si  thd ata')

                            }).catch((err) => {
                                console.log(err)
                            })

                        } catch (error: any) {
                            res.send({ message: error.message })

                        }
                    }

                }).catch((err) => {
                    console.log({ err: err.message })
                })
            } catch (err: any) {
                res.status(400).send({ message: err.message })
            }

        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const getContactUs = async (req: any, res: any) => {
    try {
        const contacts = await contactUs.find()
        res.status(200).send(contacts)
    } catch (err) {
        res.status(500).send(err)
    }
}

export default { createContactUs, getContactUs }