import dns from "dns/promises"

const address = await dns.lookup("www.codashop.com")

console.info(address.address)
console.info(address.family)
