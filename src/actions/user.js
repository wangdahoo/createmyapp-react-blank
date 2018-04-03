import { notification } from 'antd'
import { KEY_UID } from '@/constants'
import Cookie from '@/utils/cookie'

const fakeLogin = (username, password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(username === 'admin' && password === '666666' ? 1 : 0)
    }, 500)
  })
}

export const login = (username, password) => {
  return fakeLogin(username, password)
    .then(uid => {
      if (uid === 0) {
        notification['error']({
          message: '登录失败',
          description: '用户名或密码错误'
        })

        return {
          type: 'DEFAULT'
        }
      }

      Cookie.set(KEY_UID, uid)

      return {
        type: 'LOGIN',
        username,
        uid
      }
    })
}

const fakeLogout = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 500)
  })
}

export const logout = () => fakeLogout().then(() => ({
  type: 'LOGOUT'
}))
