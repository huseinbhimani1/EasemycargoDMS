
import mongoose from 'mongoose'
const schema = new mongoose.Schema({
  name: String,
  fileUrl: String,
  required: Boolean,
  layer: String,
  uploadedAt: Date,
  content: Buffer, // Add content field for file data
  tenantId: { type: String, required: true },
  industryId: { type: String, required: true }
})
export default mongoose.models.Document || mongoose.model('Document', schema)
