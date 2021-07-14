import React from "react"

class Text extends React.Component{
    state = {
        txt: ''
    }
    handleChange = e => {
        this.setState({
            txt: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.txt} onChange={this.handleChange} />
            </div>
        )
    }
}

export {Text}



