import React from "react";
import HeaderTodo from "../HeaderTodo/HeaderTodo";
import AddingBlock from "../AddingBlock/AddingBlock";
import TaskList from "../TaskList/TaskList";
import "./AppHolder.css";
// Массивы для заданий и ключей

class AppHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.handleAdding = this.handleAdding.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      this.setState({
        tasks,
      });
    }
  }
  // обработчик для кнопки добавить
  handleAdding(value) {
    const { tasks } = this.state;
    const temp = {
      value,
      edit: false,
    };
    const data = [...tasks, temp];
    this.handleTasksState(data);
  }
  // обработчик для клика по крестику на элементе списка - удаление элемента
  handleDelete(item) {
    const { tasks } = this.state;
    const data = [...tasks];
    const idx = data.findIndex((el) => el === item);
    data.splice(idx, 1);
    this.handleTasksState(data);
  }

  handleTasksState = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.setState({
      tasks,
    });
  };

  // обработчик для изменения элемента чере двойной клик
  handleEdit = (task) => {
    const { tasks } = this.state;
    debugger;
    const data = [...tasks];
    const idx = data.findIndex((el) => el.value === task);
    data[idx].edit = true;
    this.setState({
      tasks: data,
    });
  };
  render() {
    const { tasks } = this.state;
    return (
      <div className="app-holder">
        <HeaderTodo />
        <AddingBlock handleAdd={this.handleAdding} />
        <TaskList
          tasks={tasks}
          handleDelete={this.handleDelete}
          keys={this.state.keys}
          editor={this.handleEdit}
        />
      </div>
    );
  }
}

export default AppHolder;
