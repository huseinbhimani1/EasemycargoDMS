
import { defineEventHandler } from 'h3'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { connectDB } from '../db/mongo'
import Document from '../models/document'

export const config = { api: { bodyParser: false } }

export default defineEventHandler(async (event) => {
  const formidable = (await import('formidable')).default
  const form = formidable({ multiples: false })

  // Parse form fields and files
  const { fields, files } = await new Promise<any>((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) reject(err)
      else resolve({ fields, files })
    })
  })

  const file = Array.isArray(files.file) ? files.file[0] : files.file
  const data = await readFile(file.filepath)
  const uploadDir = path.resolve('public/uploads')
  if (!existsSync(uploadDir)) await mkdir(uploadDir, { recursive: true })
  const uploadPath = path.join(uploadDir, file.originalFilename)
  await writeFile(uploadPath, data)

  // Prepare metadata
  let tenantId = fields.tenantId;
  let industryId = fields.industryId;
  if (Array.isArray(tenantId)) tenantId = tenantId[0];
  if (Array.isArray(industryId)) industryId = industryId[0];
  const tenantIdStr = tenantId ? String(tenantId) : null;
  const industryIdStr = industryId ? String(industryId) : null;
  const fileUrl = '/uploads/' + file.originalFilename

  // Save metadata to MongoDB
  await connectDB()
  let docName = fields.name;
  if (Array.isArray(docName)) docName = docName[0];
  const nameStr = docName ? String(docName) : file.originalFilename;
  await Document.create({
    name: nameStr,
    fileUrl,
    uploadedAt: new Date(),
    tenantId: tenantIdStr,
    industryId: industryIdStr
    // Optionally: content: data
  })

  return { url: fileUrl }
})
