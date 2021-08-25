/*
作者：基努李维张
链接：https://juejin.cn/post/6844903846880215047
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

const englishMonthList: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
]

// 获取某个时间的年月日
export const getNewDate = (date: Date) => {
  let year: number = date.getFullYear()
  let month: number = date.getMonth()
  let day: number = date.getDate()
  return { year, month, day }
}

export const getDate = (year: number, month: number, day: number) => {
    return new Date(year, month, day)
}

// 获取对应月的英文名, 月份是从0开始的
export const englishMonth = (month: number) => {
    return englishMonthList[month]
}

export const formatDate = (date: number|string) => {
    date = String(date)
    return date.padStart(2, '0')
}
