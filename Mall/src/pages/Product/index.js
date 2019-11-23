import React, { Component } from 'react'
import { connect } from 'react-redux'
//import UserCard from './UserCard'
import './index.scss'
import Layout1 from '../Layout/Layout1';

@connect(
  state => {
    return {
      data: state.product
    }
  }, {
    //loginPost
  }
)
class Product extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout1 title="用户中心 - 京东商城">
        <div className="product">
          Product
        </div>
      </Layout1>
    )
  }
}

export default User