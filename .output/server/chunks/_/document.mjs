import mongoose from 'mongoose';

let conn = null;
async function connectDB() {
  if (conn) return;
  const uri = process.env.MONGO_URI || "";
  conn = await mongoose.connect(uri);
}

const schema = new mongoose.Schema({
  name: String,
  fileUrl: String,
  required: Boolean,
  layer: String,
  uploadedAt: Date
});
const Document = mongoose.models.Document || mongoose.model("Document", schema);

export { Document as D, connectDB as c };
//# sourceMappingURL=document.mjs.map
