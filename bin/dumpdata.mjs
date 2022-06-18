import 'dotenv/config'

import {createClient} from "../plugins/contentful.js";
import {mkdirSync, writeFileSync} from 'fs'
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = `${__dirname}/../data/`

try {
  await mkdirSync(targetDir)
} catch (e) {
}

const c = createClient()

const CONTENT_TYPES = ['event', 'announcement', 'teamMember', 'faq', 'link', 'place'];

for (const content_type of CONTENT_TYPES) {
  const path = `${targetDir}${content_type}.json`;
  console.info(`Dumping ${content_type} into ${path}`)
  const data = await c.getEntries({content_type})

  await writeFileSync(
    path,
    JSON.stringify(data.items, undefined, 4),
  )
}
