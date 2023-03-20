import * as mongoose from 'mongoose'
import property from "../schema/propertySchema";
const getSingleProperty = async (req: any, res: any) => {

  try {
    const { id } = req?.params
    console.log(id)
    var objectId = new mongoose.Types.ObjectId(id);

    const result = await property.findById(objectId)

    if (result) {
      res.status(200).send(result);
      return
    }
    res.status(400).send("no property exists with this _id");
  } catch (error: any) {
    console.log(error)
    res.status(400).send({ message: error.message })
  }


}
// for testing
// [{ "_id": "63de9a443a895c9819070a8a" }, { "_id": "63de9a443a895c9819070a8b" }, { "_id": "63de9a443a895c9819070a8c" }, { "_id": "63de9a443a895c9819070a8f" }, { "_id": "63de9a453a895c9819070a90" }]

export default getSingleProperty