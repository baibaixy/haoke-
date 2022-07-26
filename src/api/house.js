import request from '@/utils/request'
import store from '@/store'

export const getUserDetail = (id) =>
  request({
    url: `/houses/${id}`
  })

export const getInCollect = (id) =>
  request({
    url: `/user/favorites/${id}`
  })

export const setInCollect = (id) =>
  request({
    url: `/user/favorites/${id}`,
    method: 'POST'
  })

export const deleteInCollect = (id) =>
  request({
    url: `/user/favorites/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: store.state.user.token
    }
  })
