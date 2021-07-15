import ReactDOM from 'react-dom';
import './index.css';

// import { ParentCom } from './Test.js'
// import { ParentCom } from './Props.js'
// import { Person, p1 } from './Test.js'
// import { AlertValue } from './Test.js'
// import { TextSelect } from './TextSelect.js'
// import { Comments } from './Comments.js'
import { Parent } from './Communi.js'
import { AppCom } from './Context.js'
// ReactDOM.render(<Person {...p1} ></Person>, document.getElementById('root'))
// ReactDOM.render(<AlertValue/>, document.getElementById('root'))
// ReactDOM.render(<ParentCom/>, document.getElementById('root'))
// ReactDOM.render(<TextSelect/>, document.getElementById('root'))
// ReactDOM.render(<Comments/>, document.getElementById('root'))
ReactDOM.render(<AppCom/>, document.getElementById('root'))
