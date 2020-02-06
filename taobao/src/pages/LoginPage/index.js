import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export default connect(({ user }) => ({ user }), {
    loginClick: () => ({ type: "loginSuccess" })
})(
    class LoginPage extends Component {
        render() {
            const { user, loginClick } = this.props;
            const { isLogin } = user;
            if (isLogin) {
                return <Redirect to="/" />;
            }
            return (
                <div>
                    <h3>LoginPage</h3>
                    <button onClick={loginClick}>login</button>
                </div>
            );
        }
    }
);
