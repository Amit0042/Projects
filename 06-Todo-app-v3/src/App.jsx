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


  //Below code lines will work, no doubt, but in case if it is a complex app and multiple operations are occurring simultaneously then in that case it might give us wrong results. 
  // Reason for the wrong results: 
  // React works in async form means React processes many tasks at once, then it might happen is that we can  get the current value(i.e. itemName for example) as an older or previous value. 
  // So, to solve this problem we have a solution: 

  /* const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} and Date: ${itemDueDate}`);
    const newTodoItems = [...todoItems, {
      todoName: itemName,
      dueDate: itemDueDate
    }]

    setTodoItems(newTodoItems) 
  */

  // The solution for the above problem :
  // If our set method is working on the basis of previous value, Then try to pass a method(callback function) instead of a value to the set method. The callback function will take an argument i.e. currVal and it will get the currVal and now on the basis of the currVal return the new Value. So, as a solution put the newTodoItems variable inside the callback function and in the newTodoItems variable use the currVal instead of the todoItems.

  const handleNewItem = (itemName, itemDueDate) => {
    // This format can also be used

    // setTodoItems((currVal)=>{
    //   // console.log(currVal)
    //   const newTodoItems = [...currVal, {
    //     todoName: itemName,
    //     dueDate: itemDueDate
    //   }]
    //   return newTodoItems
    // })


    // Another format for the solution

    setTodoItems((currVal)=> // no need of the parenthesis because it is only one line code.
      [...currVal, { // No need of the variable name.
        todoName: itemName,
        dueDate: itemDueDate
      }] // No need to write the return statement by default last value gets returned.
    )
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
