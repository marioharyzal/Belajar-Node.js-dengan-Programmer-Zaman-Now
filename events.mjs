import {EventEmitter} from "events"

//inisialisasi EventEmitter ke objek emmiter
const emmiter = new EventEmitter()
//console.info(emmiter)

//listener untuk emmit event yg membutuhkan
//nama event dan callback
emmiter.addListener("sayHello", (name) => {
  console.info(`Hai ${name}`)
})

//pembuatan emmiter event dengan nama sayHello
emmiter.emit("sayHello", "Mario")
