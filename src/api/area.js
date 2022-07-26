import request from '@/utils/request'

export const getAreaCity = (level) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}

export const getAreaHotCity = () => {
  return request({
    url: '/area/hot'
  })
}
