import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProductList } from '../../../action/productListAction'
//import UserCard from './UserCard'
import './index.scss'
import Layout1 from '../../Layout/Layout1';
import Nodes from './Nodes/';

@connect(
  state => {
    return {
      data: state.productList
    }
  }, {
    getProductList
  }
)
class ProductList extends Component {
  componentDidMount() {
    this.props.getProductList()
  }
  render() {
    const { data, history } = this.props
    const { productList = [] } = data
    return (
      <Layout1
        title="商品搜索-京东"
        style={{ bacgroundColor: 'white' }}
        topBarConfig={{ title: "搜索" }}>
        <div className="productList">
          <Nodes data={productList} />
        </div>
      </Layout1>
    )
  }
}

export default ProductList