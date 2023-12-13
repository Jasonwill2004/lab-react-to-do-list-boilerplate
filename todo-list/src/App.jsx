import React, { Component } from 'react'

import './App.css'
import TodoItem from './Component/TodoItem'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      input : "",
      todoList : []
    }
  }
  
  inputChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      input: e.target.value
    })

  }

  formSubmit =(e) =>{
    e.preventDefault()
    if (this.state.input.length > 0) // if the input string is empty
    this.setState({
      input:"",
      todoList:[...this.state.todoList, this.state.input]
    })

  }

  updateItem =(newItem,index)=>{
    //created a copy of todolist
    let arr = this.state.todoList
    //update the element 
    arr.splice(index,1,newItem)
    //change the set
    this.setState({})

  }

  deleteItem =(index)=>{
    //created a copy of todolist
    let arr = this.state.todoList
    //update the element 
    arr.splice(index,1)
    //change the set
    this.setState({})

  }

  componentDidUpdate(){
    console.log(this.state);

  }
  

  render(){
    return <>
    <h1>TODO-LIST</h1>
    <form onSubmit={this.formSubmit}>
      <input type="text" onChange={this.inputChange} value={this.state.input}/>
      <button>ADD</button>
    </form>
    <p> My input : {this.state.input}</p>

    <div className='todoList'>
      <h2>🤷‍♂️ L I S T 🤷‍♂️</h2>
      {this.state.todoList.length == 0 ? (
            <h4>List is Empty</h4>
          ) : (
            this.state.todoList.map((e, i) => {
              return (
                <TodoItem
                  e={e}
                  i={i}
                  deleteItem={this.deleteItem}
                  updateItem={this.updateItem}
                  
                />
              );
            })
          )}
    </div>
    </>
  }
}
