
import { defineEventHandler } from 'h3'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

type UploadedFile = { filepath: string; originalFilename: string }
type FilesObject = { file: UploadedFile | UploadedFile[] }

export const config = { api: { bodyParser: false } }

export default defineEventHandler(async (event) => {
  const formidable = (await import('formidable')).default
  const form = formidable({ multiples: false })

  const files: FilesObject = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, _fields, files) => {
      if (err) reject(err)
      else resolve(files)
    })
  })

  const file = Array.isArray(files.file) ? files.file[0] : files.file
  const data = await readFile(file.filepath)
  const uploadDir = path.resolve('public/uploads')
  if (!existsSync(uploadDir)) await mkdir(uploadDir, { recursive: true })
  const uploadPath = path.join(uploadDir, file.originalFilename)
  await writeFile(uploadPath, data)

  return { url: '/uploads/' + file.originalFilename }
})
