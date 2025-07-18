import { c as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import fs from 'fs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const docsConfig_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  fs.writeFileSync("server/data/docs-config.json", JSON.stringify(body, null, 2));
  return { success: true };
});

export { docsConfig_post as default };
//# sourceMappingURL=docs-config.post.mjs.map
