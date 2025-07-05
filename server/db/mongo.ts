
import mongoose from 'mongoose'
let conn: any = null
export async function connectDB() {
  if (conn) return
  const uri = process.env.MONGO_URI || ''
  conn = await mongoose.connect(uri)
}
