import React, { useState, useEffect } from 'react'

export default function LoginItem(props) {
  const login = () => {
    const { loginPost } = props
    loginPost({
      userName: 'gao',
      pass: 'shaoyun'
    })
  }
  useEffect(() => {
    if ((userName.trim().length > 8) && pass.trim().length > 6) {
      setBtnActive(true)
    } else {
      setBtnActive(false)
    }
  })

  const userNameChange = (e) => {
    let v = e.target.value
    setUserName(v)
  }
  const passChange = (e) => {
    let v = e.target.value
    setPass(v)
  }

  const [userName, setUserName] = useState('')
  const [pass, setPass] = useState('')
  const [btnActive, setBtnActive] = useState(false)
  return (
    <div className="loginForm">
      <div className="input-container">
        <input placeholder="用户名/邮箱/已验证手机" onChange={userNameChange} />
      </div>
      <div className="input-container">
        <input placeholder="请输入密码" onChange={passChange} />
      </div>
      <button className={"btn" + (btnActive ? " btn-active" : "")} onClick={login}>登录</button>
    </div>
  )
}
