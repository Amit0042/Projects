import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import ItemOne from './components/ItemOne'
import ItemTwo from './components/ItemTwo'
import "./App.css"

function App() {

  return (
    <div>
      <center>
        <AppName />
        <div className="container text-center">
        <div className='add-container'>
          <AddTodo />
        </div>
          
          <div className="items-container">
            <ItemOne></ItemOne> {/* can be called in this way also */}
            <ItemTwo />
          </div>

        </div>
      </center>

    </div>
  )
}

export default App
