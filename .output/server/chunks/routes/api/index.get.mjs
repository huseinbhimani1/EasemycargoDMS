import { c as defineEventHandler } from '../../_/nitro.mjs';
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

const index_get = defineEventHandler(async () => {
  await connectDB();
  const docs = await Document.find({});
  return docs;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
