import mongoose from 'mongoose'

export const connectDB = async () => {
  try {

    const mongo_uri = process.env.MONGO_URI
    console.log("Mongo URI: ", mongo_uri);
    
    await mongoose.connect(mongo_uri!)
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error("MongoDB error: ", error);
    process.exit(1)
  }
}