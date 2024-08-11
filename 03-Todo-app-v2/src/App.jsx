import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"


function App() {

  let items = [
    {
      todoName : "Buy Milk",
      dueDate : "07/08/2024" 
    },
    {
      todoName : "Go to Market",
      dueDate : "08/08/2024" 
    },
    {
      todoName: "Assignment",
      dueDate: "11/25/2024"
    }
  ]

  return (
    <div>
      <center>
        <AppName />
        <div className="container text-center">
        <div className='add-container'>
          <AddTodo />
        </div>
          
          <div className="items-container">
            <TodoItems to_do_items = {items}/>
          </div>

        </div>
      </center>

    </div>
  )
}

export default App
