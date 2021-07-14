import React from 'react'
import { render } from 'react-dom';

class Hello extends React.Component {
    // 状态
    state = {
        count: 0
    }
    // 绑定this
    // constructor() {
    //     super()
    //     this.clickBtn = this.clickBtn.bind(this)
    // }
    // 事件绑定从处理函数   
    clickBtn = () => {
        this.setState({ count: this.state.count + 1 })
        // console.log(e,a);
    }
    render() {
        return (
            <div onClick={
                // 箭头函数处理this指向
                // () => this.clickBtn()
                // 构造函数处理this指向
                this.clickBtn
            }>计数:{this.state.count}</div>
            //   <button></button>
        )
    }
}
// function Fn() {
//     function clickBtn2() {
//         console.log('clickBtn2')
//     }
//     render(); {
//         return (
//             <button onClick={this.clickBtn2}>点我</button>
//         )
//     };
// }
export { Hello }