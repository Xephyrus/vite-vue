/*
 * @Author: your name
 * @Date: 2021-08-26 15:50:06
 * @LastEditTime: 2021-10-05 22:06:27
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
 * @description:
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
 * @description:
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
