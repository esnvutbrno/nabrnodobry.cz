import computeHashOfDirectory from "../utils/hash";
import fs from "fs";

const {createHash} = require("crypto");


export default function writeVersionModule() {
  /**
   * @param generator Generator
   */
  this.nuxt.hook('generate:done', async (generator, errors) => {
    const hash = createHash('sha256');

    await computeHashOfDirectory(generator.distPath, hash);

    await fs.writeFile(
      generator.distPath + '/version.json',
      JSON.stringify({version: hash.digest('hex')}),
      err => {
      },
    )
  })
}
