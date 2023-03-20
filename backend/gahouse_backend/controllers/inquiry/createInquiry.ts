import inquiry from "../../schema/inquiry";
import inquiryvalidation from "../../validation/inquiryvalidation";
import axios from "axios";
const createInquiry = async (req: any, res: any) => {

    try {
        // console.log(req.body)
        const { error, value } = inquiryvalidation.validate(req.body)
        if (error) {
            res.status(400).send({ message: error.message })
        } else {
            const InquiryType = req.body.InquiryType;
            const inquiry1 = "I want to talk about an investment property";
            console.log(inquiry1)
            const email = req.body.email
            const phone = req.body.phone
            const firstname = req.body.firstname
            const lastname = req.body.lastname

            try {
                const res1 = axios.get(`https://api-v2.liondesk.com//contacts?email=${email}`,
                    {
                        headers: {
                            "Authorization": "Bearer 888da37bd4b651d51f6e4fa3e2529aeb396d7f70 ",
                            "Content-Type": "application/json"
                        }
                    })

                res1.then((data) => {
                    if (data.data.data[0] == "") {

                        try {
                            console.log('id is not exist we try to add tha data')
                            const res1 = axios.post('https://api-v2.liondesk.com//contacts',
                                {
                                    "email": email,
                                    "mobile_phone": phone,
                                    "tags": inquiry1,
                                    "first_name": firstname
                                },
                                {
                                    headers: {
                                        "Authorization": "Bearer 888da37bd4b651d51f6e4fa3e2529aeb396d7f70 ",
                                        "Content-Type": "application/json"
                                    }
                                })

                            res1.then((data) => {
                                res.status(200).send({ message: "data is inserted" })

                            }).catch((err) => {
                                res.status({ message: err.message })
                            })



                        } catch (error: any) {
                            res.status({ message: error.message })
                        }
                    } else {
                        //update the data in the loin desk
                        try {
                            const id = data.data.data[0].id;
                            console.log(id, 'this is the id')
                            const oldtages = data.data.data[0].tags
                            console.log(inquiry1, 'this is the inquiry1 tags')
                            console.log(oldtages, 'this si the oldtags')
                            const res1 = axios.patch(`https://api-v2.liondesk.com//contacts/${id}`,
                                {

                                    "tags": oldtages + "   " + inquiry1 + ""
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



                            }).catch((err: any) => {
                                console.log('inside the errorp part')
                                // console.log(err)
                            })


                        } catch (error: any) {
                            res.status(400).send({ message: error.message })
                        }






                    }
                })
            } catch (error: any) {
                res.status(400).send({ message: error.message })
            }




        }
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
    // try {

    //     // console.log(req.body)
    //     const { error, value } = inquiryvalidation.validate(req.body)
    //     // console.log(value, 'this is the value')

    //     if (error) {
    //         console.log(error.details[0].message)
    //         res.status(400).send({ message: error.details[0].message })
    //     } else {
    //         const InquiryType = req.body.InquiryType;
    //         const inquiry1 = req.body.inquiry;
    //         const email = req.body.email
    //         const phone = req.body.phone
    //         const firstname = req.body.firstname
    //         const lastname = req.body.lastname
    //         // console.log(inquiry, InquiryType, 'this sithe value of the inquiry and the type')
    //         // console.log(inquiry1, 'this is the inquery')
    //         if (!inquiry || !InquiryType || !email || !phone || !firstname || !lastname) {
    //             res.status(400).send({ message: "enter all the details" })
    //         } else {
    //             try {

    //                 const res1 = axios.get(`https://api-v2.liondesk.com//contacts?email=${email}`,
    //                     {
    //                         headers: {
    //                             "Authorization": "Bearer 888da37bd4b651d51f6e4fa3e2529aeb396d7f70 ",
    //                             "Content-Type": "application/json"
    //                         }
    //                     })

    //                 res1.then((data) => {
    //                     // console.log(data.data.data == "")
    //                     if (data.data.data == "") {
    //                         try {
    //                             console.log('id is not exist we try to add tha data')
    //                             const res1 = axios.post('https://api-v2.liondesk.com//contacts',
    //                                 {
    //                                     "email": email,
    //                                     "mobile_phone": phone,
    //                                     "tags": inquiry1,
    //                                     "first_name": firstname
    //                                 },
    //                                 {
    //                                     headers: {
    //                                         "Authorization": "Bearer 888da37bd4b651d51f6e4fa3e2529aeb396d7f70 ",
    //                                         "Content-Type": "application/json"
    //                                     }
    //                                 })

    //                             res1.then((data) => {
    //                                 res.status(200).send({ message: "data is inserted" })
    //                                 // console.log(data.data, 'this si  thd ata')

    //                             }).catch((err) => {
    //                                 console.log(err)
    //                             })

    //                         } catch (error: any) {
    //                             res.send({ message: error.message })

    //                         }

    //                     } else {
    //                         console.log('inside the update link')
    //                         const id = data.data.data[0].id;
    //                         // console.log(data.data.data[0].tags)
    //                         const oldtages = data.data.data[0].tags
    //                         try {
    //                             console.log('id is not exist we try to  update add tha data')
    //                             const res1 = axios.patch(`https://api-v2.liondesk.com//contacts/${id}`,
    //                                 {

    //                                     "tags": oldtages + "   " + inquiry1
    //                                 },
    //                                 {
    //                                     headers: {
    //                                         "Authorization": "Bearer 888da37bd4b651d51f6e4fa3e2529aeb396d7f70 ",
    //                                         "Content-Type": "application/json"
    //                                     }
    //                                 })
    //                             res1.then((data) => {
    //                                 res.status(200).send({ message: "data is updated" })

    //                                 // console.log(data.data, 'this si  thd ata')

    //                             }).catch((err) => {
    //                                 console.log(err)
    //                             })

    //                         } catch (error: any) {
    //                             res.send({ message: error.message })

    //                         }
    //                     }

    //                 }).catch((err) => {
    //                     console.log(err)
    //                 })
    //             } catch (err: any) {
    //                 res.status(400).send({ message: err.message })
    //             }

    //         }
    //     }

    // } catch (error: any) {
    //     res.status(400).send({ message: error.message })
    // }
}


export default createInquiry;