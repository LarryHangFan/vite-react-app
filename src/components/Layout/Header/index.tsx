import { Image, Space, Avatar, Menu, message, MenuProps, Dropdown, Tooltip } from "antd"
import { Header } from "antd/lib/layout/layout"
import logo from '@/assets/images/svg/logo.svg'
import avatarImg from '@/assets/images/avatar.png'
import '../index.less'
import { FullscreenExitOutlined, FullscreenOutlined, QuestionCircleOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons"
import { useState } from "react"
import screenfull from "screenfull"
import { Link } from "react-router-dom"
const BaseHeader: React.FC = () => {
  const [full, setFull] = useState<boolean>(false)
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
  const setScreenfull = () => {
    setFull(!full)
    screenfull.toggle()
  }
  return <Header className="ant-base-header" style={{ color: '#fff', }}>
    <div className="f-sb" style={{ height: '100%' }}>
      <div className="f-fs f-ac" style={{ height: '100%' }}>
        <Image preview={false} className="f-fs f-ac" height={35} src={logo} />
        <h1 className="headr-title">
          Ant Pro
        </h1>
      </div>
      <div className="f-fs f-ac" style={{ lineHeight: '100%' }}>
        <Space size='large'>
          {full ? <Tooltip placement="bottom" title='全屏展开'>
            <FullscreenExitOutlined className="header-icon-style" onClick={() => { setScreenfull() }} />
          </Tooltip> :
            <Tooltip placement="bottom" title='关闭全屏'>
              <FullscreenOutlined className="header-icon-style" onClick={() => { setScreenfull() }} />
            </Tooltip>}
          <Tooltip placement="bottom" title='antd文档'>
            <QuestionCircleOutlined className="header-icon-style" style={{ color: '#fff' }}
              onClick={() => {
                location.href = 'https://ant.design/components/overview-cn/'
              }}
            />
          </Tooltip>
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