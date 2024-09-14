import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {
  

  const {todos,handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();


  return (
    <>
      <h1>TodoApp: {todos.length}, <small>pendientes: { todos.filter(todo => !todo.done).length} </small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList 
          todos={todos} 
          onDeleteTodo={ handleDeleteTodo}
          onToggleTodo={ handleToggleTodo}
          ></TodoList>
        </div>

        <div className="col-5">
            <h4>Agregar Todo</h4>
            <hr />
            <TodoAdd onNewTodo={ handleNewTodo }></TodoAdd>
        </div>
      </div>
    </>
  );
};
