import fs from "fs"
import zlib from "zlib"

const source = fs.readFileSync("os.mjs")
const result = zlib.gzipSync(source)

fs.writeFileSync("hasil-zlib-os.mjs.txt", result)

console.info(result)
