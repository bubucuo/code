# 30min 搭建 移动端react项目 

[TOC]



## 开始

```
1. 创建cra项目：npx create-react-app taobao
2. 打开项目：cd taobao
3. 启动项目：npm start
```



### 修改初始化代码

删除不用的赘余，只剩下这些：

![image-20200206154422014](https://tva1.sinaimg.cn/large/006tNbRwly1gbmq6ge4vgj31hc0u0e6i.jpg)



### 页面显示

启动项目，显示如下：

![image-20200206154543949](../../Library/Application Support/typora-user-images/image-20200206154543949.png)



## 库文件安装

### 安装sass

```
npm install sass --D
```



### 安装redux、router

```
npm install redux react-redux react-router-dom --save 
```





## 开始页面准备

#### 新建src/pages、src/components、src/layout

![image-20200206162712918](../../Library/Application Support/typora-user-images/image-20200206162712918.png)

#### 新建模板页面

![image-20200206163756113](https://tva1.sinaimg.cn/large/006tNbRwly1gbmrq2zzomj30n4085dk1.jpg)

1. 新建首页、我的淘宝、登录页面、404页面。如首页：

   ![image-20200206163835190](https://tva1.sinaimg.cn/large/006tNbRwly1gbmrqsoty8j30mz0ab79g.jpg)



#### 新建组件

如底部导航条：

![image-20200206173821114](../../Library/Application Support/typora-user-images/image-20200206173821114.png)



Index.scss

```scss
.bottomNav {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 1001;
    background-color: #ffffff;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #f8f8f8;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 20px;
    padding-top: 2px;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);

    .menuItem {
        display: inline-block;
        -webkit-transform: scale(0.83333333);
        color: #5d656b;
        text-decoration: none;
        font-size: 18px;
        text-align: center;

        .iconfont {
            font-size: 22px;
            height: 22px;
            line-height: 22px;
            color: #5d656b;
        }

        a {
            display: block;
            font-size: 12px;
            transform: scale(0.83333333);
        }
    }
}
```



#### 修改模板页，引入导航条：

```jsx
import React, { Component } from "react";
import BottomNav from "../../components/BottomNav/index";
import styles from "./index.module.scss";

export default class PageLoyout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className={styles.pageLoyout}>
                {children}
                <BottomNav />
            </div>
        );
    }
}
```

注： iconfont图标可去下官网下载[https://www.iconfont.cn]

​		同时引入[flexibleJS](https://github.com/kaola-fed/blog/issues/133)做移动端适配



src/app.js

```jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./pages/routes";
import "./lib/flexible";
import "./static/iconfont/iconfont.css";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default App;
```

routes为路由，src/Routes/index.js：



```jsx
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import _404Page from "../pages/_404Page";
import MytaobaoPage from "../pages/MytaobaoPage";
import LoginPage from "../pages/LoginPage";

function Routes(props) {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/mytaobao" component={MytaobaoPage} />
            <Route path="/login" component={LoginPage} />
            <Route component={_404Page} />
        </Switch>
    );
}

export default Routes;
```





#### 至此，所有文件创建完毕：

![image-20200206174522452](https://tva1.sinaimg.cn/large/006tNbRwly1gbmtptfc5zj306d0pptdp.jpg)

#### 效果如下：

![image-20200206180703381](../../Library/Application Support/typora-user-images/image-20200206180703381.png)



### redux数据准备

Store/index.js

```jsx
import { createStore, combineReducers } from "redux";
import userReducer from "./userReducer";

const store = createStore(
    combineReducers({
        user: userReducer
    })
);

export default store;
```



store/userReducer.js

```jsx
const initialState = {
    userInfo: {},
    isLogin: false
};
const userReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case "loginSuccess":
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
```



### 实现登录与路由守卫状态

实现Routes/PrivateRoute.js

```jsx
import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

export default connect(
    ({ user }) => ({ user }),
    {}
)(
    class PrivateRoute extends Component {
        render() {
            const { user, component, path, location } = this.props;
            const { isLogin } = user;
            if (isLogin) {
                return <Route path={path} component={component} />;
            }
            return (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { redirect: location.pathname }
                    }}
                />
            );
        }
    }
);
```



修改LoginPage，实现登录

```jsx
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
```



修改Routes/index.js

```jsx
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import _404Page from "../pages/_404Page";
import MytaobaoPage from "../pages/MytaobaoPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";

function Routes(props) {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/mytaobao" component={MytaobaoPage} /> */}
            <PrivateRoute path="/mytaobao" component={MytaobaoPage} />
            <Route path="/login" component={LoginPage} />
            <Route component={_404Page} />
        </Switch>
    );
}

export default Routes;
```

至此登录与路由状态实现完毕。



### 框架搭建完成，页面细节可自己完善。

![image-20200206201148607](../../Library/Application Support/typora-user-images/image-20200206201148607.png)

代码地址