import axios, { Axios, AxiosInstance, AxiosRequestConfig } from "axios";
import { BaseRequestConfig, BaseResponse } from "./type";
import { userStore } from '@/store/modules/user'
import { Navigate } from "react-router-dom"

const instance: AxiosInstance = axios.create({
  timeout: 8000,
  baseURL: import.meta.env.VITE_BASE_URL as string,
})


instance.interceptors.request.use(
  config => {
    if (userStore?.token && config.headers) {
      // 请求头token信息，请根据实际情况进行修改
      config.headers['Authorization'] = userStore.token;
      // 下面数据用于模拟mock token
      if (import.meta.env.VITE_ENV === 'dev') {
        config.data = JSON.stringify({ ...JSON.parse(config?.data || '{}'), token: userStore.token })
      }
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  function (response) {
    // 对响应数据进行操作
    let res = response.data as BaseResponse
    return res;
  },
  function (error) {
    // 对响应错误进行操作
    return Promise.reject(error);
  }
);

const request = <T>(config: AxiosRequestConfig): Promise<T> => {
  return instance.request(config)
}

export default request;