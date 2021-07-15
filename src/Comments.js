import React from 'react'
import './comments.css'

class Comments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                { id: 1, userName: "张三", content: "沙发到手" },
                { id: 2, userName: "李四", content: "冒个泡" },
                { id: 3, userName: "王五", content: "前排" },
                { id: 4, userName: "赵六", content: "热乎的up猪" },
            ],
            // 评论内容:
            content: '',
            // 评论人:
            userName: ''
        }
        this.sendComments = this.sendComments.bind(this)
    }

    // 渲染评论区
    renderList() {
        // 三元运算符
        // return this.state.comments.length === 0 ?
        //     (<div className={"no-comments"}>
        //         <p>暂无评论,赶快去抢沙发吧!</p>
        //     </div>) :
        // (<ul>
        //     {this.state.comments.map(item => (
        //         <li key={item.id}>
        //             <h4>评论人:{item.userName}</h4>
        //             <p>评论内容:{item.content}</p>
        //         </li>
        //     ))}
        // </ul>)
        // if语句
        const { comments } = this.state
        if (comments.length === 0) {
            return (<div className={"no-comments"}>
                <p>暂无评论,赶快去抢沙发吧!</p>
            </div>)
        }
        return (<ul>
            {comments.map(item => (
                <li key={item.id}>
                    <h4>评论人:{item.userName}</h4>
                    <p>评论内容:{item.content}</p>
                </li>
            ))}
        </ul>)
    }
    // 发表评论
    sendComments = () => {
        const {comments,content,userName} = this.state
        if(content.trim() === "" || userName.trim() === ""){
            alert("评论人或评论内容不能为空!")
            return
        }
        const newComments = [{
            id:parseInt(Math.random()*100),
            userName:userName,
            content:content
        },...comments]

        this.setState({
            comments:newComments,
            content:'',
            userName:'',
        })

        // this.state.comments.contents = content
        // this.state.comments.userNames = userName
    }
    handleChanges = (e) => {
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }
    render() {
        const { content, userName } = this.state
        return (
            <div className={'app'}>
                <label htmlFor="user">评论人&nbsp;:&nbsp;&nbsp;
                    <input
                        style={{ width: '500px', height: '30px', marginBottom: "30px", marginTop: '30px' }}
                        id="user"
                        type="text"
                        name="userName"
                        value={userName}
                        onChange={this.handleChanges}
                        placeholder="请输入评论人" />
                </label>
                <br />
                <textarea
                    cols="80"
                    rows="10"
                    name="content"
                    value={content}
                    onChange={this.handleChanges}
                    placeholder="请输入评论内容"
                />
                <br />
                <button onClick={this.sendComments}>发表评论</button>
                <br />
                <hr />
                {this.renderList()}


























                {/* {
                    this.state.comments.length === 0 ?
                        (<div className={"no-comments"}>
                            <p>暂无评论,赶快去抢沙发吧!</p>
                        </div>) :
                        (<ul>
                            {this.state.comments.map(item => (
                                <li key={item.id}>
                                    <h4>评论人:{item.userName}</h4>
                                    <p>评论内容:{item.content}</p>
                                </li>
                            ))}
                        </ul>)
                } */}

            </div>
        )
    }
}

export { Comments }