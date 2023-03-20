import axios from "axios";
import property from "../../schema/propertySchema";

const getPropertyDataApi = async (link: string) => {
    const { data } = await axios.get(`${link}`)
    console.log(data['@odata.nextLink'])
    console.log(data["@odata.count"])
    if (data.value.length > 0) {

        await property.create(data.value)

    }
    if (data['@odata.nextLink']) {
        getPropertyDataApi(link)
    }

}
const newpropertyData = async (req: any, res: any) => {
    const county = ["Cherokee", "Cobb", "Dekalb", "Forsyth", "Fulton", "Gwinnett"]
    const status = ["ACTIVE", "AUC", "PENDING", "HOLD", "CLOSED"]




    try {

        for (let i = 0; i < county.length; i++) {
            for (let l = 0; l < status.length; l++) {
                const data: any = await getPropertyDataApi(`https://api.bridgedataoutput.com/api/v2/OData/fmls/Property/replication?access_token=dfc72dc837e59be168de5b27086a5085&$top=5000&$filter=contains(CountyOrParish,'${county[i]}') and MlsStatus eq '${status[l]}'`)
            }
        }




        // const saveddata = await property.create(data?.value)
        // while (
        //     data)['@odata.nextLink'] {
        //     const data2 = await getPropertyDataApi(data['@odata.nextLink'])
        //     console.log(data2)
        //     await property.create(data2?.value)
        //     console.log(data2['@odata.nextLink'])
        //     if (!data2['@odata.nextLink']) {
        //         // console.log('hiiiiiii')
        //         break
        //     }
        // }
        res.send({ data: 'data' })
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

export default newpropertyData
