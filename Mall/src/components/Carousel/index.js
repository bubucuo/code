import React, { Component } from 'react'
import classname from 'classnames'
import Nodes from './Nodes'
import './index.scss'
import Dots from './Dots';

/*
data: [],//
默认
intervalTime: 3000, 
autoplay: true,
hideDots: false,
*/

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }
  componentDidMount() {
    !this.props.autoplay && this.play()
  }
  componentWillUnmount() {
    clearInterval(this.runCar)
  }
  play = () => {
    this.runCar = setInterval(() => {
      this.next()
    }, this.props.intervalTime || 3000)
  }
  next = () => {
    const { activeIndex } = this.state
    const len = this.props.data && this.props.data.length
    let newActiveIndex = activeIndex + 1
    if (newActiveIndex === len) {
      newActiveIndex = 0
    }
    this.setState({
      activeIndex: newActiveIndex
    })
  }
  prev = () => {
    const { activeIndex } = this.state
    const len = this.props.data.length
    let newActiveIndex = activeIndex - 1
    if (newActiveIndex < 0) {
      newActiveIndex = len - 1
    }
    this.setState({
      activeIndex: newActiveIndex
    })
  }
  setActive = (newActiveIndex) => {
    this.setState({
      activeIndex: newActiveIndex
    })
  }
  render() {
    const { className = "", data, hideDots } = this.props
    const { activeIndex } = this.state

    return (

      <div className={className + " carousel"}>
        <Nodes data={data} activeIndex={activeIndex} />
        {
          !hideDots && <Dots data={data} activeIndex={activeIndex} setActive={this.setActive} />
        }
      </div>
    )
  }
}

