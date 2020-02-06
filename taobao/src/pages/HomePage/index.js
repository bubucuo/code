import React, { Component } from "react";
import PageLoyout from "../../layout/PageLayout/index";
import { connect } from "react-redux";
import homePage1 from "../../static/homePage1.png";
import homePage2 from "../../static/homePage2.png";
import styles from "./index.module.scss";

export default connect(
    ({ user }) => ({ user }),
    {}
)(
    class HomePage extends Component {
        render() {
            const { user } = this.props;
            const { isLogin, userInfo } = user;
            console.log("isLogin", user); //sy-log
            return (
                <PageLoyout _className={styles.homePage}>
                    <img src={homePage1} />
                    <img src={homePage2} />
                    首页
                    {isLogin ? userInfo.name : "未登录"}
                </PageLoyout>
            );
        }
    }
);
