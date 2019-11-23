import React from 'react'
import './index.scss'

export default function SearchWithInputPage(props) {
  const { onFocus, onBlur } = props
  return (
    <div className="searchWithInput">
      <div className="inputBox">
        <i className="iconfont icon-sousuo"></i>
        <input placeholder="京东商城" onFocus={onFocus} onBlur={onBlur} />
      </div>
    </div>
  )
}
