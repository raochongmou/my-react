import React from 'react'

class Parent extends React.Component {
    state = {
        count: 0
    }
    addCount = () => {
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <Child1 count={this.state.count} />
                <Child2 addCount={this.addCount} />
            </div>
        )
    }
}

const Child1 = props => {
    return (
        <div>
            <h1>计数器:{props.count}</h1>
        </div>
    )
}

const Child2 = props => {
    return (
        <div>
            <button onClick={() => {
                props.addCount()
            }}>+1</button>
        </div>
    )
}

export { Parent }