import React, { Component } from 'react'
import TabBar from '../../components/TabBar';
import TopBar from '../../components/TopBar';
const menu = [
  {
    title: '首页',
    icon: 'shouye',
    link: '/',
  },
  {
    title: '分类',
    icon: 'fenlei',
    link: '/search',
  },
  {
    title: '我的',
    icon: 'wode',
    link: '/user',
  }
]
export default class Layout1 extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { title = "京东商城", shortIcon = "//www.jd.com/favicon.ico" } = this.props
    document.title = title
    document.querySelector('link[rel="shortcut icon"]').href = shortIcon

  }
  render() {
    const { style, children, showTabBar = true, topBarConfig } = this.props
    return (
      <div className="layout1">
        {
          topBarConfig &&
          <TopBar {...topBarConfig} />
        }
        <div className="content" style={{ paddingBottom: '54px', ...style }}>
          {children}
        </div>
        {
          showTabBar && <TabBar menu={menu} />
        }
      </div>

    )
  }
}
