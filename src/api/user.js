import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/broker/api/v1/user/login',
    method: 'post',
    data
  })
}
