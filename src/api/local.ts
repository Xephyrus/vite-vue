import axios from '../utils/axios'

export const getMessage = () =>
  axios({
    url: '/local/message',
    method: 'get'
  })
