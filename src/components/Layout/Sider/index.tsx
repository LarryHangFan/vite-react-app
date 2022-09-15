import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, FileOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Sider from "antd/lib/layout/Sider"
import { useEffect, useRef, useState } from "react";
import '../index.less'
type MenuItem = Required<MenuProps>['items'][number];

const BaseSider: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const siderRef: any = useRef(null);
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
  ];

  return <>
    <Sider
      ref={siderRef}
      style={{
        height: "100vh"
      }}
      className='ant-pro-sider-fixed'
      collapsedWidth={80}
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
        items={items}
      />
    </Sider>
  </>
}
export default BaseSider