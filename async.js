function samplePromise() {
  return Promise.resolve("mario")
}

//error
//const name = await samplePromise()
//console.info(name)

//success
async function run() {
  const name = await samplePromise()
  console.info(name)
}

run()
