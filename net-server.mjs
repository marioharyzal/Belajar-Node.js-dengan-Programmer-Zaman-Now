import net from "net"

const server = net.createServer((client) => {
  //akan dicetak klo client ada yang tersambung
  console.info("client connected")

  //opsi untuk mengirim data ke client klo ada yg tsrsambung
  //dibuat dengan event
  client.addListener("data", (data) => {
    console.info(`recive data from client : ${data.toString()}`)
    client.write(`hallo ${data.toString()}\r\n`)
  })

})

server.listen(3000, "localhost")
