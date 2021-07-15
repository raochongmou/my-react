import React from "react"
// 子传父
// 父组件
class ParentCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            parentData: 'parent'
        }
    }
    render() {
        return (
            <div>
                <h3>来自子组件的数据:{this.state.parentData}</h3>
                <ChildrenCom receiveData={this.receiveData} />
            </div>
        )
    }
    receiveData = (data) => {
        this.setState({
            parentData: data
        })
    }
}
// 子组件
class ChildrenCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            childData: "来自子组件的数据"
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.sendBtn}>发送数据</button>
            </div>
        )
    }
    sendBtn = () => {
        this.props.receiveData(this.state.childData)
    }
}

export { ParentCom }