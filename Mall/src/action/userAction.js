import { logoutRequest } from '../services/user'

export const logout = (payload) => dispatch => {
  logoutRequest().then((res = {}) => {
    dispatch({
      type: "userInfo",
      state: res.data
    })
  })
}