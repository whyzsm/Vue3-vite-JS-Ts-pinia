import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token:any) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
// const TOKEN_KEY = 'token'

// const isLogin = () => {
//   return !!localStorage.getItem(TOKEN_KEY)
// }

// const getToken = () => {
//   return localStorage.getItem(TOKEN_KEY)
// }

// const setToken = (token: string) => {
//   localStorage.setItem(TOKEN_KEY, token)
// }

// const clearToken = () => {
//   localStorage.removeItem(TOKEN_KEY)
// }

// export { isLogin, getToken, setToken, clearToken }
