import { getRamNumber } from '@/utils/common'
import mock from 'mockjs'
import { userList } from './data'

export default [
  {
    url: '/user/login',
    type: 'get',
    response: (options: any) => {
      let data = JSON.parse(options.body)
      console.log(data)
      for (let item of userList) {
        if (item.name === data.userName && item.password === data.password) {
          return mock.mock({
            code: 200,
            msg: 'success',
            data: {
              userInfo: item,
              token: getRamNumber() + '&^' + item.id
            }
          })
        }
      }
      return mock.mock({
        code: 400,
        msg: '账号或密码错误'
      })
    }
  }
]
