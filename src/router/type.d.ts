import React from "react"

export interface RouteItem {
  path: string,
  redirect?: string,
  element?: React.Component | React.FunctionComponent | React.Node,
  component?: React.Component | React.FunctionComponent,
  children?: RouteItem[]
} 