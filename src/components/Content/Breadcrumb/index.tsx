import { Breadcrumb } from 'antd';
import { sysStore } from '@/store/modules/sys'
import { useEffect, useState } from 'react';
import { useObserver } from 'mobx-react-lite';
import { KeyPathsType } from '@/store/type';
import { Link } from 'react-router-dom';

const BaseBreadcrumb: React.FC = () => {
  return <div className='pl24 f-fs f-ac' style={{ width: '100%', height: '50px', backgroundColor: '#fff' }}>
    <Breadcrumb>
      {useObserver(() => {
        return sysStore.getBreadcrumb?.map((item: KeyPathsType, index: number) => {
          return <Breadcrumb.Item key={item.path + index}>
            <Link to={item.path}>{item.name}</Link>
          </Breadcrumb.Item>
        })
      })
      }
    </Breadcrumb>
  </div>
}

export default BaseBreadcrumb