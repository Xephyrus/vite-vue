/*
封装Bus
*/
class Bus {
  list: { [key: string]: Array<Function> }
  constructor() {
    // 收集订阅信息, 调度中心
    this.list = {}
  }

  // 订阅
  $on(name: string, fn: Function) {
    this.list[name] = this.list[name] ?? []
    this.list[name].push(fn)
  }

  // 发布
  $emit(name: string, data?: any) {
    let callback: Function[] = this.list[name] // 回调函数列表
    callback.forEach((fn: Function) => fn(data)) // 依次执行
  }

  // 取消订阅
  $off(name: string) {
    if (this.list[name]) {
      delete this.list[name]
    }
  }
}

export default new Bus()