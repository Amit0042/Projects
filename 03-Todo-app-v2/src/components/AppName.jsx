import styles from "./AppName.module.css"

function AppName(){
    return (
        <h1 className={`${styles.todoHeading} heading`}>Todo App</h1> 
        // using module.css(local styling) as well as global styling(i.e. heading class here)
    );
}

export default AppName;