import { c as defineEventHandler } from '../../_/nitro.mjs';
import { readFile, mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const config = { api: { bodyParser: false } };
const upload_post = defineEventHandler(async (event) => {
  const formidable = (await import('formidable')).default;
  const form = formidable({ multiples: false });
  const files = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, _fields, files2) => {
      if (err) reject(err);
      else resolve(files2);
    });
  });
  const file = Array.isArray(files.file) ? files.file[0] : files.file;
  const data = await readFile(file.filepath);
  const uploadDir = path.resolve("public/uploads");
  if (!existsSync(uploadDir)) await mkdir(uploadDir, { recursive: true });
  const uploadPath = path.join(uploadDir, file.originalFilename);
  await writeFile(uploadPath, data);
  return { url: "/uploads/" + file.originalFilename };
});

export { config, upload_post as default };
//# sourceMappingURL=upload.post.mjs.map
