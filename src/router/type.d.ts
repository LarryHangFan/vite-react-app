import React from "react"
import { RouteObject } from "react-router-dom"
export interface RouteItem {
  path: string,
  redirect?: string,
  element?: React.Component | React.FunctionComponent | React.Node,
  component?: React.Component | React.FunctionComponent,
  children?: RouteItem[]
}
export interface BaseRouteObject extends RouteObject {
  name: string,
  meta?: {
    icon?: any,
    auth?: string
  },
  children?: BaseRouteObject[]
}