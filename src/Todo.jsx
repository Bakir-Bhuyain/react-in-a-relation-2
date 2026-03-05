export default function Todo({ todo }) {
      
      return (
            <div>
                  <h3>UserId: {todo.id}</h3>
                  <h2>Title: {todo.title}</h2>
                  <h2>Complete: </h2>
            </div>
      )
}