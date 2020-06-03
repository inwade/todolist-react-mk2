import React from 'react';
import HeaderTodo from '../HeaderTodo/HeaderTodo';
import AddingBlock from '../AddingBlock/AddingBlock';
import TaskList from '../TaskList/TaskList';
import './AppHolder.css';
// Массивы для заданий и ключей
let allTasks = [];
let keyHolder = [];

class AppHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            tasks: '',
            keyHolder: ''
        }
        this.handleAdding = this.handleAdding.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount () {
        // На каждом входе сортирую localStorage по ключам, потому что по умолчанию оно сортирует по value
        let properlySortLs = [];
        for(let key in localStorage) {
            if (key.startsWith('1')) {
                let sorter = [key, localStorage.getItem(key)]
                properlySortLs.push(sorter);
            }
        }   
        properlySortLs.sort(function (a,b) {
                return a[0] - b[0] })
        // добавляю в state отсортированный localstorage
        for (let i = 0; i < properlySortLs.length; i++) {
            localStorage.setItem(properlySortLs[i][0], properlySortLs[i][1])
            keyHolder.push(properlySortLs[i][0]);
            allTasks.push(properlySortLs[i][1]);
        }
        this.setState({
            tasks: allTasks,
            keys: keyHolder
        })        
    }
// обработчик для кнопки добавить
    handleAdding () {
        let textarea = document.querySelector('#textarea-main');
        allTasks.push(textarea.value);
        // ключ устанавливаю по текущему времени
        // ключ как key для li и как key в localstorage
        let key = new Date().getTime() + '';
        keyHolder.push(key);
        for (let i = 0; i < allTasks.length; i++) {
        localStorage.setItem(key, allTasks[i])
    }
    this.setState({
            tasks: allTasks,
            keys: keyHolder
        })
        textarea.value = '';
    }
// обработчик для клика по крестику на элементе списка - удаление элемента
    handleDelete (event) {
        let list = event.target.closest('li');
        localStorage.removeItem(list.id);
        let keyHolderDelete = [];
        let allTasksDelete = [];
        let properlySortLs = [];
        for(let key in localStorage) {
            if (key.startsWith('1')) {
                let sorter = [key, localStorage.getItem(key)]
                properlySortLs.push(sorter);
            }
        }   
        properlySortLs.sort(function (a,b) {
                return a[0] - b[0] })
        for (let i = 0; i < properlySortLs.length; i++) {
            localStorage.setItem(properlySortLs[i][0], properlySortLs[i][1])
            keyHolderDelete.push(properlySortLs[i][0]);
            allTasksDelete.push(properlySortLs[i][1]);
        }
        this.setState({
            tasks: allTasksDelete,
            keys: keyHolderDelete
        })
        allTasks = allTasksDelete;
        keyHolder = keyHolderDelete;
}
// обработчик для изменения элемента чере двойной клик
        handleEdit (event) {
            let editorTextarea = document.createElement('textarea');
            if (event.target.closest('p') !== null) {
            let par = event.target.closest('p');
            // добавляю высоты если букв больше чем строка
            if (par.innerHTML.length > 85) {
                editorTextarea.style.height = '100px';
            }
            editorTextarea.value = par.innerHTML;
            let neededKey = event.target.closest('li').id;
            editorTextarea.className = 'editor-textarea';
            par.replaceWith(editorTextarea)
            editorTextarea.focus()
            editorTextarea.onblur = function () {
                let p = document.createElement('p');
                if (editorTextarea.value === '') {
                    p.innerHTML = '- - - - -';    
                } else {
                p.innerHTML = editorTextarea.value;
                }
                editorTextarea.replaceWith(p);
                localStorage.setItem(neededKey, p.innerHTML)
                }
            }
        }
    render () {
        return (
            <div className="app-holder">
                <HeaderTodo />
                <AddingBlock handleAdd={this.handleAdding}/>
                <TaskList taskData={this.state.tasks} 
                handleDelete={this.handleDelete} 
                keys={this.state.keys}
                editor={this.handleEdit}/>
            </div>
        )
    }
}

export default AppHolder;