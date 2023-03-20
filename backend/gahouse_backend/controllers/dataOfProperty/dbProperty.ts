// const proprty = require('../../schema/propertySchema')

import property from "../../schema/propertySchema";

const propertyLocal = async (req:any, res:any) => {
    try {
        const finddata = await property.find();
        // console.log(finddata);
        res.status(200).send({message:"data of the all property",data:finddata})
    } catch (error:any) {
        console.log(error)
        res.status(400).send({message:error.message})
    }

}


export default propertyLocal
