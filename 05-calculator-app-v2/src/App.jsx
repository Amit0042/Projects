import Display from "./components/Display.jsx"
import Button from "./components/Button.jsx"
import styles from "./App.module.css"
import './App.css'
import { useState } from "react";

function App() {
  const buttonElements = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  const [buttonToDisplay, setButtonToDisplay] = useState("")

  const handleEventOnClick = (button) => {
    if(button === "C"){
      setButtonToDisplay("")
    } else if(button === "="){
      const result = eval(buttonToDisplay)
      setButtonToDisplay(result)
    } else{
      const newDisplayValue = buttonToDisplay + button
      setButtonToDisplay(newDisplayValue)
    }
  }


  return (
    <div className={styles["calculator-container"]}>
      <Display buttonToDisplay={buttonToDisplay}/>
      <div className={styles["button-container"]}>
        {buttonElements.map((element) => {
          return <Button 
          key={element} 
          button={element} 
          handleEventOnClick={handleEventOnClick}  
          />
        })}

      </div>
    </div>
  )
}

export default App
