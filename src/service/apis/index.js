import request from '../request'

export function Ping() {
  return request({
    method: 'get',
    url: '/ping'
  })
}
