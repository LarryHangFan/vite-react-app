import { makeAutoObservable } from "mobx";

export const userStore = makeAutoObservable({
  token: '',
  userInfo: '',
  // 登录成功保存token
  setToken(token: string) {
    if (token) {
      this.token = token
      localStorage.setItem('TOKEN', token)
    } else {
      this.token = ''
      localStorage.removeItem('TOKEN')
    }
  },
  setUserInfo(user: any) {
    this.userInfo = user
  }
})