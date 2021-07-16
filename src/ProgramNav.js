import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => <div>欢迎来到首页!</div>

class Login extends React.Component {
    toHome = () => {
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <button onClick={this.toHome}>点击登录</button>
            </div>
        )
    }
}

class ProgramNav extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h3>初始界面</h3>
                    {/* <button onClick={this.toLogin}>跳转到登录界面</button> */}
                    <Link to={'/login'}>跳转到登录页</Link>
                    <Route path={'/login'} component={Login}></Route>
                    <Route path={'/home'} component={Home}></Route>
                </div>
            </Router>
        )
    }
}

export { ProgramNav }