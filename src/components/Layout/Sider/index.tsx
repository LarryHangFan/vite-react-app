import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, FileOutlined, HomeOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Sider from "antd/lib/layout/Sider"
import { layoutRoutes } from '@/router/index'
import { useEffect, useRef, useState } from "react";
import '../index.less'
import { BaseRouteObject } from "@/router/type";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { Navigate, useNavigate } from "react-router-dom";

const BaseSider: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState<ItemType[]>([])
  const siderRef: any = useRef(null);
  const navigate = useNavigate()
  const getMenuItems = () => {
    const getItem = (routes: any) => {
      let items: ItemType[] = []
      for (let i = 0; i < routes.length; i++) {
        let itemRoute = routes[i]
        let item: any = {
          icon: itemRoute?.meta?.icon,
          key: itemRoute.path ? (itemRoute?.path + '-&&||-' + i) : i,
          title: itemRoute.name,
          label: itemRoute.name,
        }
        if (itemRoute.children && itemRoute.children.length > 0) {
          item.children = getItem(itemRoute.children)
        }
        items.push(item)
      }
      return items
    }
    return getItem(layoutRoutes)
  }

  useEffect(() => {
    setMenuItems(getMenuItems())
  }, [])

  return <>
    <div style={{
      width: !collapsed ? '200px' : '80px',
      height: '100vh'
    }}></div>
    <Sider
      ref={siderRef}
      style={{
        height: "100vh",
        position: 'fixed',
        top: '0',
        left: "0",
      }}
      className='ant-pro-sider-fixed'
      collapsedWidth={80}
      width={200}
      collapsible
      trigger={
        <div style={{ width: '100%', height: '100%' }}
          onClick={() => {
            setCollapsed(!collapsed);
          }}>
          {
            collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
          }
        </div>
      }
    >
      <Menu
        defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={menuItems}
        onSelect={({ keyPath }) => {
          let paths: string[] = []
          for (let item of keyPath.reverse()) {
            paths.push(item.split('-&&||-')[0])
          }
          console.log(paths.join('/'))
          navigate("/" + paths.join('/'), {
            replace: false,
            state: {}
          })
        }}
      />
    </Sider>
  </>
}
export default BaseSider