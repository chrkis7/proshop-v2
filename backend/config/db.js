import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.inverse)
    
  } catch (err) {
    console.log(`Error: ${err.message}`.red.inverse)
    process.exit(1)
  }
}

export default connectDB