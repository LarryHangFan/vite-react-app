import { Layout, Menu } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import BaseHeader from './Header';
import BaseSider from './Sider';
import Breadcrumb from '@/components/Content/Breadcrumb'
const { Header, Content, Footer } = Layout;

interface Props {
  children?: Node
}

const LayoutApp = (props: Props) => (
  <Layout style={{
    minHeight: '100vh',
    flexDirection: 'row'
  }}>
    <BaseSider />
    <Layout style={{
      minHeight: '100vh',
    }}>
      <BaseHeader />
      <Content className='ant-base-content'>
        <Breadcrumb />
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);

export default LayoutApp;