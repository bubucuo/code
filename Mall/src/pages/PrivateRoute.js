import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
//import { getUserInfo } from '../action/loginAction'

@connect(
  state => {
    return {
      data: state.user
    }
  }, {
    //getUserInfo
  }
)
class PrivateRoute extends Component {
  constructor(props) {
    super(props)
  }
  /* componentDidMount() {
    this.props.getUserInfo()
  } */
  render() {
    const { props } = this
    const { compponent: Component, data, ...rest } = props
    const { isLogin } = data
    return (
      <Route
        {...rest}
        render={
          props =>
            isLogin ? (<Component {...props} />) :
              <Redirect to={{
                pathname: '/login',
                state: { redirect: props.location.pathname }
              }} />
        }
      ></Route>
    )
  }
}
export default PrivateRoute