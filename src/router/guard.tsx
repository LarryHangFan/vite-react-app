import React, { ReactNode, useEffect, useState } from "react";
import { RouteObject, Route, Routes, Navigate } from "react-router-dom";
import { userStore } from '@/store/modules/user'

export const guardRoute = (routes: RouteObject[]): any => {
  const [isLogin, setIsLogin] = useState(true)
  useEffect(() => {
    setIsLogin(userStore.getToken() ? true : false)
  }, [])
  //请求页面路径需要验证 && 没有登录 
  const RouteNav = (param: RouteObject[]) => {
    return (
      param.map((item: RouteObject, index: number) => {
        return item.path && (
          <Route
            path={item.path}
            element={!isLogin ? <Navigate to='/login' replace={true} /> : item.element}
            key={`${item?.path + index}`}>
            {
              item?.children && RouteNav(item.children)
            }
          </Route>
        )
      })
    )
  }
  return (
    <Routes>
      {
        RouteNav(routes)
      }
    </Routes>
  )
}