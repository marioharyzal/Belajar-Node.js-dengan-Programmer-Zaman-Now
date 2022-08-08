import https from "https"

const endpoint = "https://hookb.in/RZJGyEP0q7UNyj3N71wY"

const request = https.request(endpoint, {
  header: {
    Content: "application/json",
    Accept: "application/json"
  },
  method: "POST"
}, (response) => {
  response.addListener("data", (data) =>{
    console.info(`Receive data ${data}`)
  })
})

const body = JSON.stringify({
  firstname: "loli",
  lastname: "haryzal"
})

request.write(body)
request.end()
