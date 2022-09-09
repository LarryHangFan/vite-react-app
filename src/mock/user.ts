import mock from 'mockjs'
import { userList } from './data'

export const loginApi = (data: { userName: string, password: string }) => {
  for (let item of userList) {
    if (item.name === data.userName && item.password === data.password) {
      return mock.mock({
        code: 200,
        msg: 'success',
        data: item
      })
    }
  }
  return mock.mock({
    code: 400,
    msg: '账号或密码错误'
  })
}