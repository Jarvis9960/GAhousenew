import contactInformation from "../../schema/contactInformation";
import contactInformatinvalidation from "../../validation/contactINformationvalidation";
import axios from "axios";
const createcontactInformation = async (req: any, res: any) => {
    const { Name, email, phone, quary } = req.body
    if (!Name || !email || !phone || !quary) {
        res.status(400).send({ message: "please enter all the details for the contact" })
    } else {

        const savedata = await contactInformation.create({
            Name: Name,
            email: email,
            phone: phone,
            quary: quary

        })
        res.status(200).send({ message: "submitted successfully", data: savedata });

        //client discussion//
        //          {
        //   "assigned_user_id": 2,
        //   "first_name": "Bill",
        //   "last_name": "Gates",
        //   "email": "bill@microsoft.com",
        //   "mobile_phone": "1 (604) 555-4572",
        //   "home_phone": "1 (604) 555-1124",
        //   "office_phone": "1 (208) 555-4432",
        //   "fax": "1 (306) 555-0449",
        //   "company": "Microsoft",
        //   "birthday": "1955-10-28",
        //   "anniversary": "2017-10-31",
        //   "spouse_name": "Melinda Gates",
        //   "spouse_email": "melinda@gatesfoundation.com",
        //   "spouse_phone": "1 (604) 555-1124",
        //   "spouse_birthday": "1964-08-15",
        //   "tags": "Pending",
        //   "created_at": "2016-07-01T12:12:11.000Z",
        //   "modified_at": "2018-01-09T12:24:09.000Z",
        //   "hotness_id": 12,
        //   "source_id": 12
        // } 
        // try {

        //     const res = axios.post('https://api-v2.liondesk.com//contacts',
        //         {
        //             "email": email,
        //             "mobile_phone": phone
        //         },
        //         {
        //             headers: {
        //                 "Authorization": "Bearer 888da37bd4b651d51f6e4fa3e2529aeb396d7f70 ",
        //                 "Content-Type": "application/json"
        //             }
        //         })

        //     res.then((data) => {
        //         console.log(data)
        //     }).catch((error) => {
        //         console.log(error)
        //     })

        // } catch (error) {

        // }

    }

}
export default createcontactInformation;