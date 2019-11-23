import React from 'react'
import styles from './NavMall.module.scss'

export default function NavMall(props) {
  const { data } = props
  //console.log('props', props)
  return (
    <ul className={styles.navMall}>
      {
        data.map((item, index) => {
          return <Nav key={'nav' + index} data={item} />
        })
      }
    </ul>
  )
}


function Nav(props) {
  const { icon, title, link } = props.data
  return (
    <li className={styles.nav}>
      <a href={link}>
        <img className={styles.navIcon} src={icon} />
        <div className={styles.title}>{title}</div>
      </a>
    </li>
  )
}
