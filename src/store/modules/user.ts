import { makeAutoObservable } from "mobx";

// makeAutoObservable 中的所有方法都会被处理成 action。
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
  getToken(): string {
    return this.token || localStorage.getItem('TOKEN') || ''
  },
  setUserInfo(user: any) {
    this.userInfo = user
  }
})