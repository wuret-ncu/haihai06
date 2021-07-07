import React from 'react';


function Data(props) {
    return ( 
        <div>
            <input type="checkbox"/>
            <span>{props.name}</span>
            <button type="submit">edit</button>
            <button type="submit">delete</button>
        </div>
    );
}

function TodoList(props) {
    const datalist = props.name.map(value =>
        <Data key={value} name={value} complete={value} id={value}/>)
    return ( 
        <div className="Todolist">
          <input type="input"/>
          <button onClick={props.onClick}>Add</button>
          <nav>
              <div>
                <button>全部</button>
                <button>已完成</button>
                <button>未完成</button>
              </div>
          </nav>
          {datalist}
        </div>
    );
}

export default TodoList;