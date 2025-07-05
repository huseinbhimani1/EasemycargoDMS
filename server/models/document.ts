
import mongoose from 'mongoose'
const schema = new mongoose.Schema({
  name: String,
  fileUrl: String,
  required: Boolean,
  layer: String,
  uploadedAt: Date
})
export default mongoose.models.Document || mongoose.model('Document', schema)
