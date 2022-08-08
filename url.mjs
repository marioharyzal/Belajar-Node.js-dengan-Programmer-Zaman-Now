import {URL} from "url"

const myUrl = new URL("https://www.mario.com/belajar?class=common")

myUrl.host = "www.mario-haryzal"

console.info(myUrl.href)
console.info(myUrl.protocol)
console.info(myUrl.host)
console.info(myUrl.pathname)
console.info(myUrl.searchParams)
