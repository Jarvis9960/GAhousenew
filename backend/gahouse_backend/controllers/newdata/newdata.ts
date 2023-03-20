import axios from "axios";
import property from "../../schema/propertySchema";
const getPropertyDataApi = async (link: string) => {
    const { data } = await axios.get(`${link}`)
    if (data?.value?.length > 0) {
        return data
    } else {
        await getPropertyDataApi(link)
    }
}
const newpropertyData = async (req: any, res: any) => {
    try {
        const data: any = await getPropertyDataApi("https://api.bridgedataoutput.com/api/v2/OData/fmls/Property?access_token=dfc72dc837e59be168de5b27086a5085&$top=2&$skip=100&$filter=contains(CountyOrParish,'Cobb') and MlsStatus eq 'Active'")
        const conunt = data["@odata.count"]
        await property.create(data?.value)
        while (data['@odata.nextLink']) {
            const data2 = await getPropertyDataApi(data['@odata.nextLink'])
            await property.create(data2?.value)
            console.log(data2['@odata.nextLink'])
            if (!data2['@odata.nextLink']) {
                break
            }
        }
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

export default newpropertyData;