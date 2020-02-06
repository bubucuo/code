const initialState = {
    userInfo: {},
    isLogin: false
};
const userReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case "loginSuccess":
            console.log("omg"); //sy-log
            return {
                isLogin: true,
                userInfo: {
                    name: "gaoshaoyun"
                }
            };
        case "login":
        case "userInfo":
            return {
                userInfo: action.state,
                isLogin: action.state.id != null ? true : false
            };
        default:
            return state;
    }
};
export default userReducer;
