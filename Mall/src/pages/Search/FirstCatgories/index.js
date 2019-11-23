import React from 'react'
import './index.scss'

export default function firstCatgories(props) {
  const { data = [], activeIndex, changeFirst } = props
  return (
    <div className="firstCatgories">
      {
        data.map((item, index) => {
          return <Node key={"fir" + index} data={item} active={activeIndex === index} changeFirst={() => changeFirst(index)} />
        })
      }
    </div>
  )
}
function Node(props) {
  const { data, active, changeFirst } = props
  const { id, title } = data
  return <div className={"node" + (active ? " node-active" : "")} onClick={changeFirst}>
    {title}
  </div>
}
