import { Spin } from "antd"
import React, { lazy, ReactNode } from "react"

type Props = {
  path: string,
  children?: any
} | {
  path?: string,
  children: any
}

const SuspenseApp: React.FC<Props> = ({ path, children }) => {
  let LazyComponent: React.FC = () => <></>;
  if (path) LazyComponent = lazy(() => import(/* @vite-ignore */ "../.." + path));
  return <React.Suspense fallback={
    <div className="f-fc f-ac" style={{
      height: '100%',
      width: '100%',
      textAlign: 'center',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
    }}> <Spin delay={300} tip="Loading..." /></div >
  }>
    {
      path && <LazyComponent />
    }
    {children}
  </React.Suspense>
}
export default SuspenseApp