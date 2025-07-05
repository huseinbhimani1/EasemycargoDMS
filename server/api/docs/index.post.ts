
import { defineEventHandler, readBody } from 'h3'
import { connectDB } from '../../db/mongo'
import Document from '../../models/document'

export default defineEventHandler(async (event) => {
  await connectDB()
  const body = await readBody(event)
  const doc = await Document.create(body)
  return { success: true, doc }
})
