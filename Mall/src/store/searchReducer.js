const initialState = {
  firstCatgories: [],
  secondCatgories: []
}
const loginReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'firstCatgories':
      return { ...state, firstCatgories: action.state }
    case 'secondCatgories':
      return { ...state, secondCatgories: action.state }
    default:
      return state
  }
}
export default loginReducer