const TOKEN_KEY = 'r_token'
const USER_KEY = 'r_info'

function getUserToken() {
  return localStorage.getItem(TOKEN_KEY)
}

function setUserToken(token) {
  return localStorage.setItem(TOKEN_KEY, token)
}

function removeUserToken() {
  return localStorage.removeItem(TOKEN_KEY)
}

function getUserInfo() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY))
  } catch (error) {
    return {}
  }
}

function setUserInfo(userInfo) {
  return localStorage.setItem(USER_KEY, JSON.stringify(userInfo))
}

function removeUserInfo() {
  return localStorage.removeItem(USER_KEY)
}

export { getUserToken, setUserToken, removeUserToken, getUserInfo, setUserInfo, removeUserInfo }
