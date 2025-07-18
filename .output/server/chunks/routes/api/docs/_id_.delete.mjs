import { c as defineEventHandler } from '../../../_/nitro.mjs';
import { c as connectDB, D as Document } from '../../../_/document.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'mongoose';

const _id__delete = defineEventHandler(async (event) => {
  await connectDB();
  const id = event.context.params.id;
  const deleted = await Document.findByIdAndDelete(id);
  return { success: !!deleted };
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
