import React, { Component } from "react";
import BottomNav from "../../components/BottomNav/index";
import styles from "./index.module.scss";

export default class PageLoyout extends Component {
    render() {
        const { children, _className } = this.props;
        return (
            <div className={styles.pageLoyout + " " + _className}>
                {children}
                <BottomNav />
            </div>
        );
    }
}
