const mongoose= require('mongoose')

const connection= async ()=>{
   await mongoose.connect(process.env.DBCONNECTION).then((data:any)=>{
    console.log('connection is successful')
}).catch((error:any)=>{
    console.log('error is occured',error)
})
}
module.exports= connection()