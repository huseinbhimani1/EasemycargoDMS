import { c as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import { c as connectDB, D as Document } from '../../_/document.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'mongoose';

const index_post = defineEventHandler(async (event) => {
  await connectDB();
  const body = await readBody(event);
  const doc = await Document.create(body);
  return { success: true, doc };
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
