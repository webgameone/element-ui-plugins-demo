import Cookies from 'js-cookie'

const TokenKey = 'erpToken';

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  // return Cookies.set(TokenKey, token)
  return Cookies.set(TokenKey, token, {
    // expires: datetime,
    path: "/",
    SameSite:"None",
    Secure:true
  });
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
