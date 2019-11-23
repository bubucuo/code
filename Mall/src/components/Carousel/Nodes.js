import React from 'react'

export default function Nodes(props) {
  const { data = [], activeIndex } = props
  return (
    <>
      {
        data.map((item, index) => {
          return <Node key={'car' + index} data={item} active={activeIndex === index} />
        })
      }
    </>
  )
}

function Node(props) {
  const { data, active } = props
  const { src, link } = data
  return (
    <div className={"node" + (active ? " active" : "")}>
      <img src={src} />
    </div>
  )
}

