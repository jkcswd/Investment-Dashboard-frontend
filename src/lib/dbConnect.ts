import mongoose from 'mongoose'

const MONGODB_URI : string = "mongodb://localhost:27017/investment_app"; 

const dbConnect = async () => {
  const connection = await mongoose
    .connect(MONGODB_URI)
    .catch(err => console.log(err))

  console.log("Mongoose Connection Established")

  return connection
}

export default dbConnect