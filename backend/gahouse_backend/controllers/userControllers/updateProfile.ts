
// const updateprofile = async (req:any) => {
//     try {
//         db.query('UPDATE users SET first_name="' + req.body.first_name + '",image="' + req.file.path + '",email="' + req.body.email + '", phone="' + req.body.phone + '" WHERE id = "' + req.body.id + '"', (err, res) => {
//             if (err) {
//                 console.log(err);
//                 result.status(502).send({ message: "unable to update the details" })
//             }
//             else {
//                 console.log(res)
//                 result.send({ message: " profile is updated" })
//             }
//         })
//     } catch (error) {
//         result.status(400).send({ message: "error occurs" })
//     }

// }
// module.exports = updateprofile;
import phone from "phone";
import user from "../../schema/userSchema"


const updateprofile = async (req: any, res: any) => {
    var updateObject: any = {}
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const id = req.body.id;
    if (name) {
        updateObject['name'] = name
    }
    if (phone) {
        updateObject['phone'] = phone
    }
    if (email) {
        updateObject['email'] = email
    }
    console.log(updateObject)

    if (!id) {
        res.status(400).send({ message: "please enter the user details" })
    } else {
        const result = await user.findOneAndUpdate({ _id: id }, { $set: updateObject }, { new: true });
        res.status(200).send({ data: result })
    }

}
export default updateprofile;