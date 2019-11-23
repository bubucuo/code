import React from 'react'

export default function Dots(props) {
  const { data = [], activeIndex, setActive } = props
  return (
    <ul className="dots">
      {
        data.map((item, index) => {
          return <li key={"dot" + index} className={"dot" + (activeIndex === index ? " active" : "")} onClick={() => setActive(index)}></li>
        })
      }
    </ul>
  )
}
