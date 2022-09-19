import { createContext, useContext } from 'react';
import { userStore } from './modules/user';
import { sysStore } from './modules/sys';
export const stores = { userStore, sysStore };

export const RootStoreContext = createContext(stores); // 将stores创建到react上下文（用于跨组件间数据传递）
export const useStores = () => useContext(RootStoreContext);