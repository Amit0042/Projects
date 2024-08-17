import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'


function App() {

  // let initialItems = [
  //   {
  //     todoName: "Buy Milk",
  //     dueDate: "07/08/2024"
  //   },
  //   {
  //     todoName: "Go to Market",
  //     dueDate: "08/08/2024"
  //   },
  //   {
  //     todoName: "Assignment",
  //     dueDate: "11/25/2024"
  //   }
  // ]
  

  const [todoItems, setTodoItems] = useState([])

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} and Date: ${itemDueDate}`);
    const newTodoItems = [...todoItems, {
      todoName: itemName,
      dueDate: itemDueDate
    }]

    setTodoItems(newTodoItems)

  }

  const handleOnClickItems = (todoName) => {
    const newItemsAfterDeletion = todoItems.filter((item)=>{
        return item.todoName !== todoName
    })
    setTodoItems(newItemsAfterDeletion)
}



  return (
    <div>
      <center>
        <AppName />
        <div className="container text-center">
          <div className='add-container'>
            <AddTodo onNewItem={handleNewItem} />
          </div>

          {todoItems.length === 0 && <WelcomeMessage/>}

          <div className="items-container">
            <TodoItems to_do_items={todoItems} handleOnClickItems={handleOnClickItems} />
          </div>

        </div>
      </center>

    </div>
  )
}

export default App
