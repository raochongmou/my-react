import React, { Children } from 'react'


/**
 * setState为异步函数
 */
class SetState extends React.Component {
    state = {
        count: 0
    }
    handleAdd = () => {
        this.setState(
            () => {
                return {
                    count: Math.floor(Math.random() * 3)
                }
            }
        )
        // this.setState可以多次调用
        //可以传两个参数
        //第一个参数(state,props)
        //state最新的状态值
        //props最新的属性值
        // this.setState(
        //     (state, props) => {
        //         return {
        //             count: state.count + 1
        //         }
        //     },
        //     // 更新后的count
        //     () => {
        //         console.log('第二个参数的count:',this.state.count);
        //     }
        // )
        // this.setState(
        //     (state, props) => {
        //         return {
        //             count: state.count + 1
        //         }
        //     }
        // )
        // console.log('更新后的count:',this.state.count);
    }
    // shouldComponentUpdate (preProps,preState) {
    //     console.log('更新前的状态:',this.state,"更新后的状态:",preState);
    //     return preState.count !== this.state.count
    //     // if(preState.count !== this.state.count) {
    //     //     return true
    //     // }
    //     // return false        
    // }
    render() {
        // console.log('render中的count:', this.state.count);
        // console.log('render');
        return (
            <div>
                {/* <h1>计数器:{this.state.count}</h1> */}
                <ChildCom number={this.state.count} />
                <button onClick={this.handleAdd}>+1</button>
            </div>
        )
    }
}

// 在钩子shouldComponentUpdate中处理不必要的render频繁更新(类似防抖和节流)
class ChildCom extends React.Component {
    shouldComponentUpdate(props) {
        console.log('更新前的props:',this.props,'更新后的props:',props);
        return this.props.number !== props.number
    }
    render() {
        console.log('render');
        return (
            <h1>计数器:{this.props.number}</h1>
        )
    }
}

export { SetState }