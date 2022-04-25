const fsp = require("fs/promises");
const {createHash} = require("crypto");
const path = require('path');

// -----------------------------------------------------
// Returns a buffer with a computed hash of all file's metadata:
//    full path, modification time and filesize
// If you pass inputHash, it must be a Hash object from the crypto library
//   and you must then call .digest() on it yourself when you're done
// If you don't pass inputHash, then one will be created automatically
//   and the digest will be returned to you in a Buffer object
// -----------------------------------------------------

// https://stackoverflow.com/questions/68074935/hash-of-folders-in-nodejs

export default async function computeHashOfDirectory(folder, inputHash = null) {
  const hash = inputHash ? inputHash : createHash('sha256');
  const info = await fsp.readdir(folder, {withFileTypes: true});
  // construct a string from the modification date, the filename and the filesize
  for (let item of info) {
    const fullPath = path.join(folder, item.name);
    if (item.isFile()) {
      const statInfo = await fsp.stat(fullPath);
      // compute hash string name:size:mtime
      const fileInfo = `${fullPath}:${statInfo.size}:${statInfo.mtimeMs}`;
      hash.update(fileInfo);
    } else if (item.isDirectory()) {
      // recursively walk sub-folders
      await computeHashOfDirectory(fullPath, hash);
    }
  }
  // if not being called recursively, get the digest and return it as the hash result
  if (!inputHash) {
    return hash.digest();
  }
}
