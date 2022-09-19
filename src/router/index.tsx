import Login from "@/pages/login"
import Layout from '@/components/Layout'
import IndexPage from '@/pages/index/index'
import { BaseRouteObject, RouteItem } from './type'
import Test from "@/pages/test"
import { Navigate, RouteObject } from "react-router-dom"
import ErrorPage from "@/pages/error/404"
import BasicForm from '@/pages/form/basicForm'
import StepForm from '@/pages/form/stepForm'
import ResultFail from '@/pages/result/fail'
import ResultSuccess from '@/pages/result/success'
import Error403 from "@/pages/result/403"
import { FormOutlined, HomeOutlined, OrderedListOutlined } from "@ant-design/icons"

export const layoutRoutes: BaseRouteObject[] = [
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
        element: <StepForm />,
      },
      {
        index: true,
        path: 'basic-form',
        name: '基础表单',
        element: <BasicForm />
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
            element: <ResultFail />,
          },
          {
            index: true,
            path: 'success',
            name: '成功页',
            element: <ResultSuccess />
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
                element: <Error403 />,
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
    element: <Login />
  },
  {
    path: '404',
    name: '404',
    element: <ErrorPage />
  },
]

export const routes: BaseRouteObject[] = [
  ...layoutRoutes,
  ...firstRoutes
]