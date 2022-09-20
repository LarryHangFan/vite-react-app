import { LogoutOutlined } from "@ant-design/icons";
import { configure, makeAutoObservable } from "mobx";
import { UserStoreType } from "../type";
// 使用该配置，可以将 Proxy 降级为 Object.defineProperty 
configure({ useProxies: "never" });
// makeAutoObservable 中的所有方法都会被处理成 action。
export const userStore = makeAutoObservable<UserStoreType>({
  token: '',
  userInfo: {},
  // 登录成功保存token
  setToken(token?: string) {
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
  setUserInfo(user?: any) {
    this.userInfo = user
  },
  logout() {
    this.setToken()
    this.setUserInfo()
  }
})