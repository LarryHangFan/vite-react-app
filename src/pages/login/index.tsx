import Footer from '@/components/Footer';
import React, { useState } from 'react';
import styles from './index.module.less';
import { Button, Checkbox, Form, Input, Card, message } from 'antd';
import { loginApi } from '@/mock/user';
import { useNavigate } from "react-router-dom"

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [loginLoading, setLoginLoading] = useState(false)

  const onFinish = (values: any) => {
    console.log('Success:', values);
    login({
      userName: values.username,
      password: values.password
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const login = async (data: { userName: string, password: string }) => {
    setLoginLoading(true)
    const res = await loginApi(data)
    setLoginLoading(false)
    console.log(res)
    if (res.code === 200) {
      navigate('/')
    } else {
      message.error(res.msg)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Card
          hoverable
          style={{ width: 400 }}
        >
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="账号"
              name="username"

              rules={[{ required: true, message: '请输入账号' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button loading={loginLoading} style={{ width: '100%' }} type="primary" htmlType="submit">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
