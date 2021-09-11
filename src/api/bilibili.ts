import axios from '../utils/axios'

// search_type: 搜索类型 (综合结果: '', 视频: 'video', 番剧: 'media_bangumi', 影视: 'media_ft', 直播: 'live', 专栏: 'article', 话题: 'topic', 用户: 'bili_user')
export const getSearchList = (params: any) => {
  return axios({
    url: '/api/x/web-interface/search/type',
    method: 'get',
    params
  })
}

export const getOnlineList = () => {
  return axios({
    url: '/api/x/web-interface/online',
    method: 'get'
  })
}

export const getSearchDefault = () => {
  return axios({
    url: '/api/x/web-interface/search/default',
    method: 'get'
  })
}

/*
mid: 用户uid, jsonp: 是否使用jsonp
*/
interface Info {
  mid?: string | number
  jsonp?: string
}
export const getUserInfo = (data: Info) => {
  return axios({
    url: '/api/x/space/acc/info',
    method: 'get',
    params: data
  })
}
