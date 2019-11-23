import { getProductListRequest } from '../services/productList'

export const getProductList = (payload) => dispatch => {
  getProductListRequest().then((res = {}) => {
    dispatch({
      type: "productList",
      state: res.data
    })
  })
}