import { loginRequest, getUserInfoRequest } from '../services/login'

export const loginPost = (payload) => dispatch => {
  loginRequest().then((res = {}) => {
    dispatch({
      type: "login",
      state: res.data || { id: null }
    })
  })
}

export const getUserInfo = (payload) => dispatch => {
  getUserInfoRequest().then((res = {}) => {
    dispatch({
      type: "userInfo",
      state: res.data || { id: null }
    })
  })
}