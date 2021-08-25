class Arc {
  // 角度转弧度
  angle: number
  constructor(angle: number) {
    this.angle = angle
  }

  value() {
    return (Math.PI * this.angle) / 180
  }

  sin() {
    return Math.sin(this.value())
  }

  cos() {
    return Math.cos(this.value())
  }

  tan() {
    return Math.tan(this.value())
  }
}

export default Arc
