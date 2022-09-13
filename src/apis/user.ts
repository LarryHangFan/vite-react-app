import http from '@/utils/http/request'
import { BaseResponse } from '@/utils/http/type'
import { AxiosRequestConfig } from 'axios'

export const loginApi = (data: { userName: string, password: string }) => {
  return http<BaseResponse>({
    method: 'get',
    url: '/user/login',
    data
  })
}
export const getUserInfoApi = () => {
  return http<BaseResponse>({
    method: 'get',
    url: '/user/userinfo'
  })
}