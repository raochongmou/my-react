import React from 'react'
import img from './imgs/logo192.png'

// 高阶组件
function withMouse(WrappedComponent) {
    class Mouse extends React.Component {
        state = {
            x: 0,
            y: 0
        }
        handleMouseMove = e => {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }
        componentDidMount() {
            window.addEventListener("mousemove", this.handleMouseMove)
        }
        componentWillUnmount() {
            window.removeEventListener("mousemove", this.handleMouseMove)
        }
        render() {
            return <WrappedComponent {...this.state} {...this.props} />
            // return <WrappedComponent {...this.state} />
        }
    }
    Mouse.displayName = getDisplayName(WrappedComponent)
    return Mouse
}

//获取displayName处理函数
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component"
}


// 调用的组件
const Position = props => {
    return (
        <p>
            鼠标位置:
            x:{props.x}
            y:{props.y}
        </p>
    )
}

// 获取增强的组件
const MousePosition = withMouse(Position)

const ImgMove = props => (
    <img src={img}
        style={{
            position: 'absolute',
            top: props.y - 76,
            left: props.x - 76
        }}
    />
)

const MousePosition2 = withMouse(ImgMove)

class WithCom extends React.Component {
    render() {
        return (
            <div>
                <h1>父组件</h1>
                <MousePosition a2={5} />
                <MousePosition2 />
            </div>
        )
    }
}

export { WithCom }