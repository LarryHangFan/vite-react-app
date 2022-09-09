import { createContext, useContext } from 'react';
import { userStore } from './modules/user';

export const stores = { userStore };

export const RootStoreContext = createContext(stores); // 将stores创建到react上下文（用于跨组件间数据传递）
export const useStores = () => useContext(RootStoreContext);