import fs from "fs"
import zlib from "zlib"

const source = fs.readFileSync("hasil-zlib-os.mjs.txt")
const result = zlib.unzipSync(source)

console.info(result.toString())
