import cluster from "cluster"
import os from "os"
import process from "process"
import http from "http"

//logic untuk main cluster yg berguna untuk
//menghandle worker
if (cluster.isPrimary) {
  console.info(`primary ${process.pid}`)
  for (let i = 0; i < 5; i++){
      cluster.fork()
  }

  //listener untuk worker yang exit
  cluster.addListener("exit", (worker) => {
    console.info(`worker id ${worker.id} is exit`)
    cluster.fork()
  })
}

//logic worker yang berisi server memiliki request
//dan response
if (cluster.isWorker) {
  const server = http.createServer((request, response) => {
    response.write(`response dari proses ${process.pid}`)
    response.end()
    process.exit()
  })

  server.listen(3000)
}
