import { c as defineEventHandler } from '../../_/nitro.mjs';
import fs from 'fs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const docsConfig_get = defineEventHandler(() => JSON.parse(fs.readFileSync("server/data/docs-config.json", "utf-8")));

export { docsConfig_get as default };
//# sourceMappingURL=docs-config.get.mjs.map
