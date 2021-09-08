const chnNumChar: string[] = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
const chnUnitSection: string[] = ['', '万', '亿', '万亿', '亿亿']
const chnUnitChar: string[] = ['', '十', '百', '千']
const chnNumMap = new Map([
  ['零', 0],
  ['一', 1],
  ['二', 2],
  ['三', 3],
  ['四', 4],
  ['五', 5],
  ['六', 6],
  ['七', 7],
  ['八', 8],
  ['九', 9]
])

export function sectionToChinese(section: number) {
  var strIns = '',
    chnStr = ''
  var unitPos = 0
  var zero = true
  while (section > 0) {
    var v = section % 10
    if (v === 0) {
      if (!zero) {
        zero = true
        chnStr = chnNumChar[v] + chnStr
      }
    } else {
      zero = false
      strIns = chnNumChar[v]
      strIns += chnUnitChar[unitPos]
      chnStr = strIns + chnStr
    }
    unitPos++
    section = Math.floor(section / 10)
  }
  return chnStr
}

export function numberToChinese(num: number) {
  var unitPos = 0
  var strIns = '',
    chnStr = ''
  var needZero = false

  if (num === 0) {
    return chnNumChar[0]
  }

  while (num > 0) {
    var section = num % 10000
    if (needZero) {
      chnStr = chnNumChar[0] + chnStr
    }
    strIns = sectionToChinese(section)
    strIns += section !== 0 ? chnUnitSection[unitPos] : chnUnitSection[0]
    chnStr = strIns + chnStr
    needZero = section < 1000 && section > 0
    num = Math.floor(num / 10000)
    unitPos++
  }

  return chnStr
}
