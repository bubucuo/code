const initialState = {
  counter: 0,
  homeCarousel: [],
  mallNav: []
}
const homeReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case 'homeCarousel':
      return { ...state, homeCarousel: action.state }
    case 'mallNav':
      return { ...state, mallNav: action.state }
    default:
      return state
  }
}
export default homeReducer