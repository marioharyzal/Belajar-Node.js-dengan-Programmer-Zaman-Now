import http from "http"

//penulisan callbak request response tidak bisa terbalik
const server = http.createServer((request, response) => {
  console.info(request.method)
  console.info(request.url)

  if (request.url === "/mario") {
    response.write("hallo mario")
  } else {
    response.write("hallo world")
  }
  response.end()
})

server.listen(3000)
