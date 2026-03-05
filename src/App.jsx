import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import { Suspense } from 'react';



const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users/1/posts')
  .then(res => res.json())

function App() {

  function handleClick() {
    alert('here is the alert');
  }
  const handleButton = () => {
    alert('handle click 3')
  }
  const handleAdd5 = (value) => {
    const newNumber = value + 5;
    alert(newNumber);
  }
  return (
    <>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>



      <Batsman></Batsman>
      <Counter></Counter>
      <h3>Vite + React</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handle2() {
        alert('click2')
      }}>Click Me</button>
      <button onClick={handleButton}>Click 3</button>
      <button onClick={() => {
        alert('click5')
      }}>Click 4</button>
      <button onClick={() => handleAdd5(5)}>Click 5</button>
    </>
  )
}

export default App
