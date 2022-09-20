import { Breadcrumb } from 'antd';
import { sysStore } from '@/store/modules/sys'
import { useEffect, useState } from 'react';
import { KeyPathsType } from '@/store/type';
import { Link } from 'react-router-dom';
import { Observer } from 'mobx-react-lite';

const BaseBreadcrumb: React.FC = () => {
  return <div className='pl24 f-fs f-ac' style={{ width: '100%', height: '50px', backgroundColor: '#fff' }}>
    <Observer>
      {() => <Breadcrumb>
        {
          sysStore.getBreadcrumb?.map((item: KeyPathsType, index: number) => {
            return <Breadcrumb.Item key={item.path + index}>
              <Link to={item.path}>{item.name}</Link>
            </Breadcrumb.Item>
          })
        }
      </Breadcrumb>}
    </Observer>
  </div>
}

export default BaseBreadcrumb