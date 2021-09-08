import axios from '../utils/axios'

export const getMessage = () => {
    return axios({
      url: '/local/message',
      method: 'get'
    })
  }