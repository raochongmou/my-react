import React, { createContext } from 'react'
import './context.css'

const { Provider, Consumer } = React.createContext()

class AppCom extends React.Component {
    render() {
        return (
            <Provider value='pink'>
                <div className={'one'}>
                    <Second />
                </div>
            </Provider>
        )
    }
}

const Second = props => {
    return (
        <div className={'two'}>
            <Third />
        </div>
    )
}

const Third = props => {
    return (
        <div className={'three'}>
            <Four />
        </div>
    )
}

const Four = props => {
    return (
        <div className={'four'}>
            <Consumer>
                {data => (<h2>获取app数据:{data}</h2>)}
            </Consumer>
        </div>
    )
}

export { AppCom }