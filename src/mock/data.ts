/**
 * authList 为权限对象，key 为侧栏权限，value为元素权限
 */
export const userList: UserApi.User[] = [
  {
    name: 'admin', password: '123456', id: 1,
    authList: {
      skeleton: ['add']
    }
  },
  {
    name: 'admin', password: 'admin', id: 2,
    authList: {
      tree: ['add', 'look']
    }
  },
  {
    name: '123', password: '123', id: 3
  },
  {
    name: '123456', password: '123456', id: 4
  }
]