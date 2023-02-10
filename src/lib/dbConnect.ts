import mongoose from 'mongoose'

const MONGODB_URI = "mongodb://localhost:27017/investment_app"; 

export const connect = async () => {
  const connection = await mongoose
    .connect(MONGODB_URI)
    .catch(err => console.log(err))
  console.log("Mongoose Connection Established")

  return connection
}