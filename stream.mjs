import fs from "fs"

const writer = fs.createWriteStream("target.log")

writer.write("mario\n")
writer.write("Haryzal\n")
writer.write("handsome\n")

const reader = fs.createReadStream("target.log")

reader.addListener("data", (data) => {
  console.info(data.toString())
})
