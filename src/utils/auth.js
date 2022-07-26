import storage from './storage'
const TOKEN_KEY = 'HEIMA_TOUTIAO_TOKEN'
export const getToken = () => storage.get(TOKEN_KEY)
export const setToken = (key) => storage.set(TOKEN_KEY, key)
export const removeToken = () => storage.remove(TOKEN_KEY)

// 获取当前城市
const NOW_CITY = 'HEIMA_HAOKE_NOW_CITY'
export const getCity = () => storage.get(NOW_CITY)
export const setCity = (key) => storage.set(NOW_CITY, key)
