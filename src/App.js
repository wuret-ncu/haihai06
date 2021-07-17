import React from 'react';
import './App.css';
import TodoList from './List';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      check: true,
      todoListDate:["讀書","寫作業","畫畫"],
    };
  }

  render() {
    return ( 
      <div>
        <h1 className="ListTitle">Todo List</h1>
        <div className="TodoList">
          {          
          <TodoList name={this.state.todoListDate} onClick={()=>{this.setState({check:!this.state.check})}}/>  
          /*this.state.check?
          <TodoList name={this.state.signInDate} onClick={()=>{this.setState({check:!this.state.check})}}/>  
        : <SignUp name={this.state.signUpDate} onClick={()=>{this.setState({check:!this.state.check})}}/>*/
        }
        </div>
      </div>
    );
  }
}

export default App;
