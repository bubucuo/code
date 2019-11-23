import React, { useState } from 'react'
import MenuItem from './MenuItem'
import './index.scss'

export default function TabBar(props) {
  const { menu = [] } = props
  const currentPath = window.location.pathname
  return (
    <div className="tabBar">
      {
        menu.map((item, index) => {
          return <MenuItem key={'menuItem' + index} data={item} active={currentPath === item.link} />
        })
      }
    </div>
  )
}




