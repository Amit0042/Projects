import { useState } from "react";
import { MdAddBox } from "react-icons/md";

function AddTodo({ onNewItem }) {

  // Use hooks here to avoid getting the initialisation of the incomingTodoName and incomingDueDate every time it renders, the value event.target.value is not getting assigned to the incomingTodoName and incomingDueDate.That's the reason we are defining states.

  // let incomingTodoName = "initial" 
  // let incomingDueDate = "26-07-2024"

  // const handleEventOnChangeForTodoName = (event) => {
  //     incomingTodoName = event.target.value
  // }

  // const  handleEventOnChange = (event) => {
  //   incomingDueDate = event.target.value
  // }
  // const handleOnClick = (event) => {
  //   console.log("TodoName: "+incomingTodoName);
  //   console.log("dueDate: "+incomingDueDate)
  //   onNewItem(incomingTodoName,incomingDueDate)
  // }

  const [toDoName, setToDoName] = useState("")
  const [dueDate, setDueDate] = useState("")

  const handleEventOnChangeForTodoName = (event) => {
    // toDoName = event.target.value  // Reason: In React, even though toDoName and dueDate are declared as const variables, their values are managed through the state mechanism provided by useState. The const keyword ensures that the reference to the variable does not change, but it doesn't mean that the value itself cannot change.
    setToDoName(event.target.value)
  }

  const handleEventOnChange = (event) => {
    // dueDate = event.target.value // Reason: In React, even though toDoName and dueDate are declared as const variables, their values are managed through the state mechanism provided by useState. The const keyword ensures that the reference to the variable does not change, but it doesn't mean that the value itself cannot change.
    setDueDate(event.target.value)
  }

  const handleEventOnClick = () => {
    onNewItem(toDoName, dueDate)
    setToDoName("")
    setDueDate("")
  }

  return (
    <div className="row new-row-custom">
      <div className="col-4">
        <input
          type="text"
          placeholder='Enter Todo Here'
          value={toDoName}  // Controlled Components: The value attribute keeps the input in sync with the component's state. This value attribute should be updated manually to synchronise the component's state and input's value.
          onChange={(event) => { handleEventOnChangeForTodoName(event) }}
        ></input>
      </div>

      <div className="col-4">
        <input
          type='date'
          placeholder='date'
          value={dueDate} //Controlled Components: The value attribute keeps the input in sync with the component's state.This value attribute should be updated manually to synchronise the component's state and input's value.
          onChange={(event) => { handleEventOnChange(event) }}
        ></input>
      </div>

      <div className="col-2">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleEventOnClick}
        >
        <MdAddBox />
        </button>
      </div>

    </div>
  );
}
export default AddTodo;