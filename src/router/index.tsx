import Login from "@/pages/login"
import { BaseRouteObject } from './type'
import { Navigate } from "react-router-dom"
import { FormOutlined, HomeOutlined, OrderedListOutlined } from "@ant-design/icons"
import SuspenseApp from "@/components/Suspense/index"
import Layout from '@/components/Layout/index'
import { userStore } from '@/store/modules/user'
export const baseLayoutRoutes: BaseRouteObject[] = [
  {
    path: '/',
    name: '首页',
    meta: {
      icon: <HomeOutlined />
    },
    element: <Navigate to='form/step-form' replace />,
  },
  {
    path: 'form',
    element: <Layout />,
    name: '表单页',
    meta: {
      icon: <FormOutlined />
    },
    children: [
      {
        path: 'step-form',
        name: '分步表单',
        element: <SuspenseApp path='/pages/form/stepForm' />
      },
      {
        index: true,
        path: 'basic-form',
        name: '基础表单',
        element: <SuspenseApp path='/pages/form/basicForm' />
      },
    ]
  },
  {
    path: 'request',
    element: <Layout />,
    name: '请求页',
    meta: {
      icon: <OrderedListOutlined />
    },
    children: [
      {
        path: 'result',
        element: <Navigate to='/request/result/fail' replace />,
        name: '结果页',
        children: [
          {
            path: 'fail',
            name: '失败页',
            element: <SuspenseApp path='/pages/result/fail' />
          },
          {
            index: true,
            path: 'success',
            name: '成功页',
            element: <SuspenseApp path='/pages/result/success' />
          },
        ]
      },
      {
        path: 'error',
        element: <Navigate to='/request/error/sever-error' replace />,
        name: '错误页',
        children: [
          {
            path: 'sever-error',
            element: <Navigate to='/request/error/sever-error/403' replace />,
            name: '服务器错误页',
            children: [
              {
                path: '403',
                element: <SuspenseApp path='/pages/result/403' />,
                name: '403',
              },
            ]
          },
        ]
      },
    ]
  },
]
export const firstRoutes: BaseRouteObject[] = [
  {
    path: 'login',
    name: '登陆页',
    element: <SuspenseApp path='/pages/login' />
  },
  {
    path: '404',
    name: '404',
    element:
      <SuspenseApp path='/pages/error/404' />
  },
]
export const layoutRoutes: BaseRouteObject[] = [
  ...baseLayoutRoutes
]

export const asyncRoutes: BaseRouteObject[] = [
  {
    path: 'skeleton',
    element: <Layout />,
    name: '骨架页',
    meta: {
      icon: <OrderedListOutlined />,
      auth: 'skeleton'
    },
    children: [
      {
        path: 'index',
        element: <SuspenseApp path='/pages/skeleton' />,
        name: '',
      },
    ]
  },
  {
    path: 'tree',
    element: <Layout />,
    name: '树形页',
    meta: {
      icon: <OrderedListOutlined />,
      auth: 'tree'
    },
    children: [
      {
        index: true,
        path: 'index',
        element: <SuspenseApp path='/pages/tree' />,
        name: '',
      },
    ]
  }
]

export const routes: BaseRouteObject[] = [
  ...layoutRoutes,
  ...asyncRoutes,
  ...firstRoutes
]
const getAsyncRoutes = () => {

}
export const getSiderRoutes = (): BaseRouteObject[] => {
  console.log(userStore)
  if (userStore?.userInfo?.authList) {
    for (let key in userStore?.userInfo?.authList) {

    }
  }
  return baseLayoutRoutes
}