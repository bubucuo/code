import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHomeCarousel, getMallNav } from '../../action/homeAction'
import Carousel from '../../components/Carousel'
//import './index.scss'
import styles from './index.module.scss'
import NavMall from './NavMall';
import Layout1 from '../Layout/Layout1';
import homeOther from './homeOther.png'
import SearchInput from './SearchInput';

@connect(
  state => {
    return {
      data: state.home,
      user: state.user
    }
  }, {
    getHomeCarousel, getMallNav
  }
)
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSearchPage: false
    }
  }
  componentDidMount() {
    this.props.getHomeCarousel()
    this.props.getMallNav()
  }
  setShowSearchPage = (val) => {
    this.setState({
      showSearchPage: !!val
    })
  }
  render() {
    const { data, user, history } = this.props
    const { counter, homeCarousel, mallNav = [] } = data
    const { showSearchPage } = this.state
    return (
      <Layout1 title="多快好省，购物上京东！" style={showSearchPage ? { height: "100vh", overflow: 'hidden' } : {}} shortIcon="//m.jd.com/favicon.ico" >
        <div className={styles.home}>
          <SearchInput user={user} showSearchPage={showSearchPage} setShowSearchPage={this.setShowSearchPage} history={history} />
          <section className={styles.part1}>
            <Carousel data={homeCarousel} />
          </section>
          <section className={styles.part2}>
            <NavMall data={mallNav} />
          </section>
          <img src={homeOther} style={{ width: '100%' }} />
        </div>
      </Layout1>
    )
  }
}

export default Home
