import Login from "@/pages/login"
import Layout from '@/components/Layout'
import IndexPage from '@/pages/index'
import { RouteItem } from './type'
import Test from "@/pages/test"
import { Navigate, RouteObject } from "react-router-dom"
import ErrorPage from "@/pages/error/404"

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'test/*',
        element: <h1>这是test1页面</h1>,
        children: [
          {
            path: 'a',
            element: <h1>这是test1下的a页面</h1>
          }
        ]
      },
      {
        index: true,
        path: 'test2',
        element: <h1>这是test2页面</h1>
      },
      {
        path: 'test3/a',
        element: <h1>这是test3/a页面</h1>
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: '404',
    element: <ErrorPage />
  },
]

