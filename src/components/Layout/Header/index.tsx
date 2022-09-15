import { Image, Space, Avatar, Menu, message, MenuProps, Dropdown } from "antd"
import { Header } from "antd/lib/layout/layout"
import logo from '@/assets/images/svg/logo.svg'
import avatarImg from '@/assets/images/avatar.png'
import '../index.less'
import { QuestionCircleOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons"
const BaseHeader: React.FC = () => {
  const handleMenuClick: MenuProps['onClick'] = e => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '个人信息',
          key: '1',
          icon: <UserOutlined />
        },
        {
          label: '退出登陆',
          key: '2',
          icon: <SettingOutlined />
        },
      ]}
    />
  );
  return <Header className="ant-base-header" style={{ color: '#fff', }}>
    <div className="f-sb f-ac" style={{ height: '100%' }}>
      <div className="f-fs f-ac" style={{ height: '100%' }}>
        <Image preview={false} className="f-fs f-ac" height={35} src={logo} />
        <h1 className="headr-title">
          Ant Pro
        </h1>
      </div>
      <div className="f-fs f-ac">
        <Space>
          {/* <QuestionCircleOutlined style={{ color: '#fff' }} /> */}
          <Dropdown overlay={menu}>
            <div className="f-fs f-ac">
              <Avatar src={avatarImg} />
              <div style={{ marginLeft: '8px' }}>陌陌</div>
            </div>
          </Dropdown>
        </Space>
      </div>
    </div>
  </Header>
}

export default BaseHeader