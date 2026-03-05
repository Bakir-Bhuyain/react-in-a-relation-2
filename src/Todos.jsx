import { use } from "react"
import Todo from "./Todo";
export default function Todos({ todosPromise }) {
      const todos = use(todosPromise);
      console.log(todos);
      return (
            <div>
                  <h3>Todos:{todos.length}</h3>
                  {
                        // todos.map(todo => { <Todo todo={todo} key={todo.id}></Todo> })

                        todos.map(todo => (
                              <Todo todo={todo} key={todo.id}></Todo>
                        ))
                  }
            </div>
      )
}