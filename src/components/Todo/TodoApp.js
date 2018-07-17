import React from 'react';
import AddToDo from './AddToDo';
import ListToDo from './ListToDo';
import Filter from './Filter';
import './Todo.scss';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: [], filter: 'active'};
    this.addToDo = this.addToDo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }
  addToDo(thing) {
    this.state.list.length > 0 && this.state.list.find(item => item.title === thing.title) ||
    this.setState({list: this.state.list.concat(thing)})
  }
  changeStatus(title) {
    const newList = this.state.list;

    for (let item in newList) {
      if(newList[item].title === title) {
        newList[item].status = !newList[item].status;
      }
    }
    this.setState({list: newList})
  }
  changeFilter(value) {
    this.setState({filter: value})
  }
  render() {
    return (
      <div className="todo-app">
        <h1> Todo App! </h1>
        <AddToDo addToDo={this.addToDo}/>
        <ListToDo list={this.state.list} changeStatus={this.changeStatus} filter={this.state.filter}/>
        <Filter changeFilter={this.changeFilter}/>
      </div>
    )
  }
}

export default TodoApp;