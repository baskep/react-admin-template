const TOKEN_KEY = 'user_token'

export function getToken() {
  return localStorage.get(TOKEN_KEY)
}

export function setToken(token) {
  return localStorage.set(TOKEN_KEY, token)
}

export function removeToken() {
  return localStorage.remove(TOKEN_KEY)
}
