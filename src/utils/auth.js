import Cookies from 'js-cookie'

const UserInfo = 'UserInfo'

export function getUserInfo() {
  return Cookies.get(UserInfo)
}
export function getToken() {
  return Cookies.get(UserInfo)
}

export function setUserInfo(userInfo) {
  return Cookies.set(UserInfo, userInfo)
}

export function removeUserInfo() {
  return Cookies.remove(UserInfo)
}
