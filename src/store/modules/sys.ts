import { makeAutoObservable, configure, observable, action, makeObservable, computed } from "mobx";
import { layoutRoutes } from '@/router/index'
import { BaseRouteObject } from "@/router/type";
import path from "path";
import { KeyPathsType, SysStoreType } from "../type";
// 使用该配置，可以将 Proxy 降级为 Object.defineProperty 
configure({ useProxies: "never" });

export const sysStore = makeObservable<SysStoreType>(
  // 需要代理的响应对象
  {
    keyPaths: [], // 侧栏选中的keyPath
    setKeyPaths(keys: string[] = []) {
      this.keyPaths = keys
    },
    get getKeyPaths(): string[] {
      return this.keyPaths
    },
    get getBreadcrumb() {
      let paths: string[] = this.keyPaths.slice().reverse().map((item: any, index: number) => {
        let splitArr = item.split('-&&||-')
        return splitArr[0]
      })
      let names: string[] = []
      const getNames = (routes: BaseRouteObject[], index = 0) => {
        for (let i = 0; i < routes.length; i++) {
          if (paths.length > 0) {
            if (routes[i].path === paths[index]) {
              names.push(routes[i].name)
              getNames(routes[i].children || [], ++index)
            }
          }
        }
      }
      getNames(layoutRoutes)
      let arrs: KeyPathsType[] = []
      for (let i = 0; i < paths.length; i++) {
        if (i === 0) {
          paths[i] = '/' + paths[i]
        } else {
          paths[i] = (paths[i - 1] + '/' + paths[i])
        }
        arrs.push({
          name: names[i] || '',
          path: paths[i]
        })
      }
      return arrs
    }
  },
  // 对各个属性进行包装，用于标记该属性的作用 
  {
    keyPaths: observable, // 需要跟踪的响应属性 
    getBreadcrumb: computed,  // 计算属性 
    setKeyPaths: action, // action 调用后，会修改响应对象 
  }
)