import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFirstCatgories, getSecondCatgories } from '../../action/searchAction'
import './index.scss'
import FirstCatgories from './FirstCatgories';
import SecondCatgories from './SecondCatgories';
import Layout1 from '../Layout/Layout1';

@connect(
  state => {
    return {
      data: state.search
    }
  }, {
    getFirstCatgories, getSecondCatgories
  }
)

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }
  componentDidMount() {
    this.props.getFirstCatgories()
    this.props.getSecondCatgories()
  }
  changeFirst = (newActiveIndex) => {
    this.setState({
      activeIndex: newActiveIndex
    }, () => {
      this.props.getSecondCatgories()
    })
  }
  render() {
    const { firstCatgories, secondCatgories } = this.props.data
    const { activeIndex } = this.state
    return (
      <Layout1 title="京东商品分类 - 京东商城" topBarConfig={{ title: "商品分类" }} shortIcon="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp">
        <div className="search">
          <FirstCatgories data={firstCatgories} activeIndex={activeIndex} changeFirst={this.changeFirst} />
          <SecondCatgories data={secondCatgories} />
        </div>
      </Layout1>
    )
  }
}
export default Search
