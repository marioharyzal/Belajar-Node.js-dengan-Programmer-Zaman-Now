import fs from "fs/promises"

//buat variabel buffer yang assignment dengan file
const buffer = await fs.readFile("async.js")

//cetak buffer ke string
console.info(buffer.toString())

//menulis dan membuat file baru dengan nama test
//di android pemberian nama file tidak boleh tempt
fs.writeFile("test.txt", "ini isi file tempt")

const file = await fs.readFile("test.txt")

console.info(file.toString())
