import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default function TopBar(props) {
  const { history, title = "", children } = props
  const goBack = () => {
    history.goBack()
  }
  return (
    <div className="topBar">
      {
        history ?
          <i className="iconfont icon-jiantou-copy" onClick={goBack} /> :
          <Link to="/home">
            <i className="iconfont icon-jiantou-copy" />
          </Link>
      }
      {children}
      <div className="title">{title}</div>
    </div>
  )
}
