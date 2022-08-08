import util from "util"

const name = "Mario"
console.info(util.format("hello %s", name))

const person = {
  firstName: "Mario",
  lastName: "Haryzal"
}

console.info(util.format("person : %j", person))
