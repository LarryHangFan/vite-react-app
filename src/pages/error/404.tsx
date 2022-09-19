import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const App404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary"><Link to='/'>返回首页</Link></Button>}
  />
);

export default App404;