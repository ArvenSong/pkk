import BackGround from './runtime/background'
import DataBus from './databus'

let ctx = canvas.getContext('2d')
let databus = new DataBus()


export default class Mine {

  constructor() {
    this.start()
  }
  start(){
    databus.reset()
    this.bg = new BackGround(ctx)
  }

}