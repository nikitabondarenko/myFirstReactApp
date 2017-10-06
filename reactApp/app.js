import React from 'react';
import ReactDOM from 'react-dom';
const dummyData = ['eat', 'sleep', 'code', 'repeat']

class InputLine extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <input type = "text"/>
        <input type = "submit" value = "Submit" />
      </div>
    )
  }
}


class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(<ul> {dummyData.map((dummyData) => (
      <li>
        <button> X </button>
        {dummyData}
      </li>))}
      </ul>
    )
  }
}

class TodoApp extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
      <InputLine />
      <TodoList />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
