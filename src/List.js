import React,{useEffect, useState} from 'react';
import {nanoid} from 'nanoid';

function Data(props) {
    const {name,id,complete,ChangeStatus,Delete} = props;
    return ( 
        <div>
            <input type="checkbox" onChange={()=>ChangeStatus(id)}/>
            <span>{name}</span>
            <button type="submit">edit</button>
            <button type="submit" onClick={()=>Delete(id)}>delete</button>
        </div>
    );
}

function TodoList(props) {
    const [todos,setTodos] = useState([]);
    const [userInput,setUserInput] = useState('');
    /*初始化todolist*/
    useEffect(()=>{
        const tempTodo = todos;
        for(let i = 0;i < props.name.length;i++){
            tempTodo.push({
                todo:props.name[i],
                id:nanoid(),
                complete:false
            });
        }
        setTodos([...tempTodo]);
    },[])
    
    /*當Add button被按下時，更新todos*/
    function newTodo(todo){
        let temp = todo;
        setTodos([...todos,{
            todo:temp,
            id:nanoid(),
            complete:false
        }]);
    }

    function Delete(id){
        setTodos(todos.filter(todo => todo.id !== id)) //把Todos中id一樣的東西過濾出來刪除
    }

    function ChangeStatus(id){
        let i = todos.findIndex(todo => todo.id === id); // i means index
        let tempTodo = todos; // 複製一個todos，避免直接動到
        tempTodo[i].complete = !tempTodo[i].complete;
        setTodos([...tempTodo]);
    }
    
    return ( 
        <div className="Todolist">
          <input type="text" onChange={event => setUserInput(event.target.value)}/>
          <button onClick={()=>newTodo(userInput)}>Add</button>
          <nav>
              <div>
                <button>全部</button>
                <button>已完成</button>
                <button>未完成</button>
              </div>
          </nav>
          {todos.map((value,index) =>
        <Data key={index} name={value.todo} id={value.id} complete={value.complete} ChangeStatus={ChangeStatus} Delete={Delete}/>)}
        </div>
    );
}

export default TodoList;