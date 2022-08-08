function samplePromise() {
  return Promise.resolve("mario")
}

const name = await samplePromise()
console.info(name)
