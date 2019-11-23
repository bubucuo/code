import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import LoginItem from './LoginItem';
import { loginPost, getUserInfo } from '../../action/loginAction'

import './index.scss'
import Layout1 from '../Layout/Layout1';
import TopBar from '../../components/TopBar';

@connect(
  state => {
    return {
      data: state.user
    }
  }, {
    loginPost, getUserInfo
  }
)
class Login extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getUserInfo()
  }
  render() {
    const { location, data, login, loginPost } = this.props
    const { isLogin } = data || {}
    const redirect = (location && location.state && location.state.redirect) || "/"
    if (isLogin) {
      return <Redirect to={redirect} />
    }
    return (
      <Layout1 title="京东登录" showTabBar={false} topBarConfig={{ title: "京东登录" }}>
        <div className="login">
          <LoginItem loginPost={loginPost} />
        </div>
      </Layout1>
    )
  }
}
export default Login