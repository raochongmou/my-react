import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const First = () => <div>我是路由页面一</div>


class RouterCom extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h3>页面路由跳转</h3>
                    <Link to={'/first'}>页面一</Link>
                    <Route path={'/first'} component={First}></Route>
                </div>
            </Router>
        )
    }
}

export { RouterCom }