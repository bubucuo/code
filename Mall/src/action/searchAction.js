import { getFirstCatgoriesRequest, getSecondCatgoriesRequest } from '../services/search'

export const getFirstCatgories = (payload) => dispatch => {
  getFirstCatgoriesRequest().then((res = {}) => {
    dispatch({
      type: "firstCatgories",
      state: res.data
    })
  })
}

export const getSecondCatgories = (payload) => dispatch => {
  getSecondCatgoriesRequest().then((res = {}) => {
    dispatch({
      type: "secondCatgories",
      //state: res.data
      state: res.data && (Math.random() > 0.5 ? res.data : res.data.reverse())
    })
  })
}