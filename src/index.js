import './styles.css';

// import { todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();
// const tarea = new Todo('Aprender JavaScript!!');

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC1234');
// sessionStorage.setItem('mi-key', 'ABC1234');

// setTimeout(()=> {

//     localStorage.removeItem('mi-key');
// },1500)

//console.log(todoList.todos);

//todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);


//const newTodo = new Todo('Aprender javascript en Educa');
// todoList.nuevoTodo(newTodo);


//console.log('todos', todoList.todos);
//todoList.todos[0].imprimirClase();


//const valorCoger= new Todo(todoList.todos[0]);

//console.log('todos',todoList.todos);

//valorCoger.imprimirClase();
//console.log(valorCoger);