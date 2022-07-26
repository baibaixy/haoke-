import request from '@/utils/request'
import store from '@/store'
export const login = (username, password) =>
  request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
export const getUserInfo = () =>
  request({
    url: '/user',
    headers: {
      Authorization: store.state.user.token
    }
  })
export const getUserFav = () =>
  request({
    url: '/user/favorites',
    headers: {
      Authorization: store.state.user.token
    }
  })
export const getUserRent = () =>
  request({
    url: '/user/houses',
    headers: {
      Authorization: store.state.user.token
    }
  })
