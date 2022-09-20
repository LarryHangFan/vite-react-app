export interface SysStoreType {
  keyPaths: string[],
  setKeyPaths: function
  getBreadcrumb: any,
  getKeyPaths: any
}
export interface UserStoreType {
  token: string,
  userInfo: {
    authList?: string[]
  },
  setToken: function,
  getToken: function,
  setUserInfo: function,
  logout: function,
}
export interface KeyPathsType {
  name: string,
  path: string
}
