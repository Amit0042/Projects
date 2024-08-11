import Display from "./components/Display.jsx"
import Button from "./components/Button.jsx"
import styles from "./App.module.css"
import './App.css'

function App() {
  const buttonElements = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  return (
    <div className={styles["calculator-container"]}>
      <Display />
      <div className={styles["button-container"]}>
        {buttonElements.map((element) => {
          return <Button key={element} button={element} />
        })}

      </div>
    </div>
  )
}

export default App
