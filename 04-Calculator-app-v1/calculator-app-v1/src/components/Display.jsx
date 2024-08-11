import styles from "./Display.module.css"

const Display = () => {
    return (
        <>
            <input className = {styles.calculatorOutputContainer} type="text" ></input>
        </>
    );
}

export default Display;