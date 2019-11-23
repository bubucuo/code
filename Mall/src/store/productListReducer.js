const initialState = {
  productList: []
}
const productListReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'productList':
      return { ...state, productList: action.state }
    default:
      return state
  }
}
export default productListReducer