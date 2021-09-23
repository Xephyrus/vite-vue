// 页面滚动到顶部

import { arrayBuffer } from 'stream/consumers'

// by maosheng
export const toTop = (behavior: ScrollBehavior = 'smooth'): void => {
  window.scrollTo({
    top: 0,
    behavior
  })
}

// 判断是否手机号码
// @params e: 电话号码
// by maosheng
export function isMobileNumber(e: string) {
  var i = '134,135,136,137,138,139,150,151,152,157,158,159,187,188,147,182,183,184,178',
    n = '130,131,132,155,156,185,186,145,176',
    a = '133,153,180,181,189,177,173,170',
    o = e || '',
    r = o.substring(0, 3),
    d = o.substring(0, 4),
    s =
      !!/^1\d{10}$/.test(o) &&
      (n.indexOf(r) >= 0
        ? '联通'
        : a.indexOf(r) >= 0
        ? '电信'
        : '1349' == d
        ? '电信'
        : i.indexOf(r) >= 0
        ? '移动'
        : '未知')
  return s
}
