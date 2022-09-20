import React, { ReactNode, useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { userStore } from '@/store/modules/user'
import Layout from "@/components/Layout";
import BasicForm from "@/pages/form/basicForm";
import StepForm from "@/pages/form/stepForm";
import { LayoutContext } from "antd/lib/layout/layout";
import { BaseRouteObject } from "./type";
import { deepClone } from "@/utils/common";
import { useObserver } from 'mobx-react-lite';
export const guardRoute = (routes: BaseRouteObject[]): any => {
  const [isLogin, setIsLogin] = useState(userStore.getToken() ? true : false)
  // useEffect(() => {
  //   setIsLogin(userStore.getToken() ? true : false)
  // }, [])
  //请求页面路径需要验证 && 没有登录 
  const RouteNav = (param: BaseRouteObject[]) => {
    return (
      // 一级路由
      param.map((item: BaseRouteObject, index: number) => {
        return useObserver(() => {
          return item.path && (<Route
            path={item.path}
            element={
              !userStore.getToken ? <Navigate to='/login' replace={true} /> :
                item.element}
            key={`${item?.path + index}`}>
            {
              // 二级路由
              item?.children && RouteNav(item.children)
            }
          </Route>)
        })

      })
    )
  }

  // 二级路由以上扁平化
  const delayeringRoutes = (routes: BaseRouteObject[]) => {
    let routeNavs = []
    const delayering = (sub: BaseRouteObject, first: BaseRouteObject) => {
      let { children = [] } = first
      let list = sub.children || []
      for (let item of list) {
        if (item.children) {
          item.path = sub.path + '/' + item.path
          let currentItem: BaseRouteObject = {
            path: item.path,
            element: item.element,
            name: item.name
          }
          // 添加至二级路由
          children.push(currentItem)
          // 递归次级路由 > 扁平化到二级路由
          delayering(item, first)
        } else {
          item.path = sub.path + '/' + item.path
          children.push(item)
        }
      }
    }
    for (let item of routes) {
      if (item.children && item.children?.length > 0) {
        // Layout布局页
        if (item.children) {
          for (let _item of item.children) {
            // 三级之后的路由
            if (_item.children) {
              // 递归次级路由 > 扁平化到二级路由
              delayering(_item, item)
              delete _item.children
            }
          }
          routeNavs.push(item)
        }
      } else {
        // 一级页面
        routeNavs.push(item)
      }
    }
    return routeNavs
  }

  return (
    <Routes>
      {
        RouteNav(delayeringRoutes(deepClone(routes)))
      }
      <Route path="*" element={<Navigate to='/404' />} />
    </Routes>
    // <>
    //   <Routes>
    //     <Route path="/login" element={<>login</>}></Route>
    //     <Route path="form" element={<Layout />}>
    //       <Route path="basic-form" element={<BasicForm />} />
    //       <Route path="step-form" element={<StepForm />} />
    //       <Route path="step-form/basic-form" element={<BasicForm />} />
    //       <Route path="test" element={<Navigate to='/form/step-form' />} />
    //     </Route>
    //   </Routes>
    // </>
  )
}