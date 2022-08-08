import net from "net"

const client = net.createConnection({
  port: 3000,
  host: "localhost"
})

client.addListener("data", (data) => {
  console.info(`recive data from server : ${data.toString()}`)
})

setInterval(() =>{
  client.write("mario\r\n")
}, 3000)
