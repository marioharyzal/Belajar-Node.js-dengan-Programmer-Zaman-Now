import timers from "timers/promises"

console.info(new Date())
const name = await timers.setTimeout(3000, "mario")
console.info(new Date())

console.info(name)


