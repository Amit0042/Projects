import AppName from "./components/AppName"
import DisplayCount from "./components/DisplayCount"
import Button from "./components/Button"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./App.module.css"
import { useState } from "react"


function App() {

  const buttonIncrement = "Increment"
  const buttonDecrement = "Decrement"
  // const buttonName = ["Increment","Decrement"] 

  const [count, setCount] = useState(0)

  const handleOnClick = (buttonColor) => {
    buttonColor === "btn-success" ? setCount(count + 1) :
      (count === 0 ? alert("Cannot decrease further") : setCount(count - 1))

  }

  return (
    <div className={styles["main-container"]}>

      <AppName />
      <DisplayCount count={count} />

      <div>
        <Button
          buttonName={buttonIncrement}
          buttonColor={"btn-success"}
          handleOnClick={handleOnClick}
        ></Button>
        <Button
          buttonName={buttonDecrement}
          buttonColor={"btn-danger"}
          handleOnClick={handleOnClick}
        />
      </div>
      {/* <button type="button" class="btn btn-danger">Danger</button> */}

    </div>
  )
}

export default App
