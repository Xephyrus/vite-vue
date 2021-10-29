/*
 * @Author: your name
 * @Date: 2021-08-26 15:50:06
 * @LastEditTime: 2021-10-28 11:30:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \prismd:\code\vite-vue\src\utils\tools.ts
 */

/**
 * @description: 窗口回到顶部
 * @param {ScrollBehavior} behavior
 * @return {*}
 */
export const toTop = (behavior: ScrollBehavior = 'smooth'): void => {
  window.scrollTo({
    top: 0,
    behavior
  })
}

/**
 * @description: 获取浏览器Cookie的值
 * @param {string} name
 * @return {*}
 */
export function getCookie(name: string) {
  // (^| )name=([^;]*)(;|$),match[0]为与整个正则表达式匹配的字符串，match[i]为正则表达式捕获数组相匹配的数组；
  let arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  if (arr !== null) {
    // console.log(arr, '正则表达式捕获数组相匹配的数组');
    return unescape(arr[2])
  }
  return null
}

/**
 * @description: 存储cookie值并且设置cookie过期时间
 * @param {string} key
 * @param {string} value
 * @param {number} expires
 * @return {*}
 */
export function setCookie(key: string, value: string, expires: number) {
  let date: any = new Date()
  date.setTime(date.getTime() + expires)
  document.cookie = `${key}=${value};  expires=` + date.toGMTString()
}

/**
 * @description: 删除cookie
 * @param {string} cookieName
 * @return {*}
 */
export function removeCookie(cookieName: string) {
  let date: any = new Date()
  date.setTime(date.getTime() - 10001) // 把时间设置为过去的时间，会自动删除
  document.cookie = cookieName + '=v; expires=' + date.toGMTString()
  console.log(document.cookie, '删除cookie')
}

/**
 * @description: 清除cookie
 * @param {*}
 * @return {*}
 */
export const clearCookies = document.cookie
  .split(';')
  .forEach(
    (cookie) =>
      (document.cookie = cookie
        .replace(/^ +/, '')
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
  )

/**
 * @description: 判断是否电话号码
 * @param {string} number
 * @return {boolean} boolean
 */
export function isMobileNumber(number: string): string | boolean {
  var Mobile = '134,135,136,137,138,139,150,151,152,157,158,159,187,188,147,182,183,184,178',
    Unicomi = '130,131,132,155,156,185,186,145,176',
    Telecom = '133,153,180,181,189,177,173,170',
    tel = number || '',
    prefix = tel.substring(0, 3),
    suffix = tel.substring(0, 4),
    result =
      !!/^1\d{10}$/.test(tel) &&
      (Unicomi.indexOf(prefix) >= 0
        ? '联通'
        : Telecom.indexOf(prefix) >= 0
        ? '电信'
        : '1349' === suffix
        ? '电信'
        : Mobile.indexOf(prefix) >= 0
        ? '移动'
        : '未知')
  return result
}

/**
 * @description: 将RGB转换为十六进制
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {string}
 */
export const rgbToHex = (r: number, g: number, b: number): string =>
  '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)

/**
 * @description: 复制到剪贴板
 * @param {string} text
 * @return {*}
 */
export const copyToClipboard = (text: string) => navigator.clipboard.writeText(text)

/**
 * @description: 获取某一年的第X天
 * @param {Date} date
 * @return {*}
 */
export const dayOfYear = (date: Date): number =>
  Math.floor(((date as any) - new Date(date.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24)

/**
 * @description: 大写字符串
 * @param {string} str
 * @return {*}
 */
export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * @description: 查找两个日期之间的天数
 * @param {Date} start
 * @param {Date} end
 * @return {*}
 */
export const dayDif = (start: Date, end: Date): number =>
  Math.ceil(Math.abs(end.getTime() - start.getTime()) / 86400000)

/**
 * @description: 获取min到min + max之间的随机数
 * @param {number} min
 * @param {number} max
 * @return {*}
 */
export const randBetween = (min: number, max: number) => Math.floor(Math.random() * max) + min

/**
 * @description: 随机从数组中抽取一个元素
 * @param {any} arr
 * @return {*}
 */
export const randomOne = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]

/**
 * 注意：在javascript 中，我们一般直接使用函数利用闭包封装，这里会涉及this ，在typescript 中如果还是用函数写，this就会受到限制，无法通过编译的，所以可以使用class解决
 */

export class Debounced {
  /**
   * @description 页面防抖
   * @param fn 要执行的函数
   * @param waiting  时间
   * @param immediate 是否在触发事件后 在时间段n开始，立即执行，否则是时间段n结束，才执行
   */
  static use(fn: Function, waiting: number = 1000, immediate: boolean = false) {
    let timer: NodeJS.Timeout | null
    return (...args: any) => {
      if (timer) clearInterval(timer)
      if (immediate) {
        if (!timer) fn.apply(this, args)
        timer = setTimeout(function () {
          // n 秒内 多次触发事件,重新计算.timer
          timer = null // n 秒内没有触发事件 timeer 设置为null，保证了n 秒后能重新触发事件 flag = true = !timmer
        }, waiting)
      } else {
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, waiting)
      }
    }
  }
}

export class Throttle {
  /**
   * @description 页面节流
   * @param fn
   * @param waiting
   * @param immediate true 是启用时间戳版，false 是启用定时器版，作用一样
   */
  static use(fn: Function, waiting: number = 1000, immediate: boolean = true) {
    //时间戳
    if (immediate) {
      let prevTime = 0
      return (...args: any) => {
        let nowTime = Date.now()
        if (nowTime - prevTime >= waiting) {
          fn.apply(this, args)
          prevTime = nowTime
        }
      }
    } else {
      //定时器
      let timer: NodeJS.Timeout | null
      return (...args: any) => {
        if (!timer) {
          fn.apply(this, args)
          timer = setTimeout(() => {
            timer && clearTimeout(timer)
            timer = null
          }, waiting)
        }
      }
    }
  }
}
