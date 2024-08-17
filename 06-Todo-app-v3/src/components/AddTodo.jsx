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

  const handleEventOnClick = (event) => {
    // console.log(event)
    event.preventDefault() // to prevent form's default behaviour.
    onNewItem(toDoName, dueDate)
    setToDoName("")
    setDueDate("")
  }

  return (
    <form className="row new-row-custom" onSubmit={handleEventOnClick}>
      {/* Form is a set containing input boxes and a submit button to send the data to the server.
      Wrap all the inputs and the button inside the form element. 
      It's default behaviour is to send the form data to the server. 
      Button's default type is always of "submit" type whether we mention type attribute or not.
      Form requires an "action" attribute which is where url or path of the data to be send is to be provided. If we donot provide anything in the "action" attribute then the data is sent to the localhost on which we are working right now. Hence, due to the data sent to the localhost our page gets refreshed thus all data is not able to display for the todo application or gets lost. 
      So, the solution is we should remove the onClick attribute from the button and then provide an attribute "onSubmit" to the form.

      So, what is happening here is when the button is clicked the button tells the form that you are getting submitted and thus the form calls the handler onSubmit.

      Still if we try to console out event object of the handler function, if will not be seen in the console as our app gets refreshed again.So, to come up for the solution to this problem it will be that we should prevent the default behaviour of the onSubmit handler by using "event.preventDefault()" in the handler function of onSubmit. Now it prevents data to be sent to server and also now our page won't get refreshed and we can display the data on our page in our way.

      Conclusion: 
      It seems now that what is the purpose of using forms because this sort we were able to earlier by not using forms. But it is not usefaul at this point of time, but in case when we want to sent data to the server we can integrate our api and paths in which the data is to be sent to the server.
      */}

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
          // type="button"
          type = "submit" //mention it or not the default type will be submit.
          className="btn btn-success"
          // onClick={handleEventOnClick} // Instead of this, provide an attribute in the form which is "onSubmit".
        >
        <MdAddBox />
        </button>
      </div>

    </form>
  );
}
export default AddTodo;