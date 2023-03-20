import axios from "axios";
import property from "../../schema/propertySchema";

const allPropertydataApi = async (req: any, res: any) => {
    axios.get("https://api.bridgedataoutput.com/api/v2/OData/fmls/Property/replication?access_token=dfc72dc837e59be168de5b27086a5085").then(async (data) => {

        // const savedatadb= await property.create(data.data.value)
        // res.status(200).send({data:savedatadb})
    }).catch((error) => {
        console.log(error)
    })
}
export default allPropertydataApi;