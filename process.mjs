import process from "process"

process.addListener("exit", (exitcode) => {
  console.info(`node js exitcode ${exitcode}`)
})

console.info(process.version)

process.exit(1)
