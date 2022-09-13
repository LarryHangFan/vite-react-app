import { AxiosRequestConfig } from "axios"

export interface BaseResponse {
  code: number,
  msg: string,
  data?: any
}

export interface BaseRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders | undefined
}