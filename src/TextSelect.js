import React from "react"

class TextSelect extends React.Component {
    constructor(props) {
        super(props)
        this.txtRef = React.createRef()
    }
    state = {
        txt: '',
        city: '1',
        isCheck: false
    }
    render() {
        return (
            <div>
                <input name="txt" type="text" ref={this.txtRef} value={this.state.txt} onChange={this.handlechanges} />
                <h4>{this.state.txt}</h4>
                <select name="city" value={this.state.city} onChange={this.handlechanges} >
                    <option value='1'>北京</option>
                    <option value='2'>武汉</option>
                    <option value='3'>上海</option>
                </select>
                <input name="isCheck" type="checkbox" checked={this.state.isCheck} onChange={this.handlechanges} />
                {/* 操作dom获取文本框的值 */}
                <button onClick={() => {console.log('当前的值为:',this.txtRef.current.value)}}>点击获取</button>
            </div>
        )
    }
    // 事件处理函数
    // // 普通文本框处理事件
    // handleChange = (e) => this.setState({ txt: e.target.value })
    // // 选择文本框处理事件
    // handleChangeCity = (e) => this.setState({ city: e.target.value })
    // // 复选框的处理事件
    // handleChangeChk = (e) => this.setState({isCheck:e.target.checked})
    // 事件处理函数封装
    handlechanges = e => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }
}

// export { TextSelect }