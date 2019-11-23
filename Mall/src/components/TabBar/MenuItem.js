import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuItem(props) {
  const { data, handleMenuItem, active } = props
  const { title, link, icon } = data
  return (
    <Link to={link} className={"menuItem" + (active ? " active" : "")}>
      <div className={"iconfont icon-" + icon}></div>
      <div className="name">{title}</div>
    </Link>
  )
}
