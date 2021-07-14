import React from "react"
// import PropsTypes from "prop-types"

// function Person(props) {
//     return <ul>
//         <li>姓名:{props.name}</li>
//         <li>性别:{props.sex}</li>
//         <li>年龄:{props.age}</li>
//     </ul>
// }
// const p1 = {
//     name: "kack",
//     age: 19,
// }
// Person.defaultProps = {
//     name: "kack",
//     age: 19,
//     sex: "女"
// }

// Person.PropsTypes = {
//     name: PropsTypes.string.isRequired,
//     age: PropsTypes.number.isRequired,
//     sex: PropsTypes.string.isRequired,
// }

// export { Person, p1 }
// class AlertValue extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleBtn = this.handleBtn.bind(this)
//     }
//     handleBtn() {
//         alert(this.input.value)
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={input => this.input = input} />
//                 <button onClick={this.handleBtn}>点击弹出input的value值</button>
//             </div>
//         )
//     }
// }
// export { AlertValue }
// 父传子
// 父组件
class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.showChildren = this.showChildren(this)
        this.state = {
            isActive:false
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.showChildren}>点击显示子组件</button>
                <Children isActive={this.state.isActive} />
            </div>
        )
    }
    showChildren() {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    // componentDidCatch(error, errorInfo) {
    //     console.log('==============',error,errorInfo);
    // }
}
// 子组件
class Children extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let strClass = null
        if(this.props.isActive) {
            strClass = " child"
        }else {
            strClass = ""
        }
        return (
            <div className={"nochild" + strClass}></div>
        )
    }
}

export { Parent }