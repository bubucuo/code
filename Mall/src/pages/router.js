import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import Search from './Search/';
import User from './User/';
import _404 from './404/'
import Login from './Login';
import ProductList from './Product/ProductList';
import PrivateRoute from './PrivateRoute';
import SearchWithInputPage from './SearchWithInputPage';

function Router(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route path="/search" component={Search}></Route>
      <PrivateRoute path="/user" compponent={User} />
      <Route path="/login" component={Login}></Route>
      <Route path="/productList" component={ProductList}></Route>
      <Route path="/searchWithInputPage" component={SearchWithInputPage} />
      <Route component={_404}></Route>
    </Switch >
  )
}
export default Router

/*


function setTitle(title) {
  return (title) => {
    document.title = title
  }
}

function Router(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} onEnter={setTitle("多快好省，购物上京东！")}></Route>
      <Route exact path="/home" component={Home} onEnter={setTitle("多快好省，购物上京东！")}></Route>
      <Route path="/search" component={Search} onEnter={setTitle("京东商品分类 - 京东商城")}></Route>
      <PrivateRoute path="/user" compponent={User} onEnter={setTitle("用户中心 - 京东商城")} />
      < Route path="/login" component={Login} onEnter={setTitle("京东登录")} ></Route>
      <Route component={_404} onEnter={setTitle("404")}></Route>
    </Switch>
  )
}*/