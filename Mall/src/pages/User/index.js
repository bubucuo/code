import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../action/userAction'
import UserCard from './UserCard'
import './index.scss'
import Layout1 from '../Layout/Layout1';
import TopBar from '../../components/TopBar';

@connect(
  state => {
    return {
      data: state.user
    }
  }, {
    logout
  }
)
class User extends Component {
  render() {
    const { history, data, logout } = this.props
    const { userInfo } = data
    return (
      <Layout1 title="用户中心 - 京东商城" topBarConfig={{ title: "我的京东" }}>
        <div className="user">
          <UserCard data={userInfo} />
          <div className="more">很多信息。。。</div>
          <button className="btn" onClick={logout}>退出登录</button>
        </div>
      </Layout1>
    )
  }
}

export default User