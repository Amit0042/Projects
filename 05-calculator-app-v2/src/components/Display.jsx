import styles from "./Display.module.css"

const Display = ({buttonToDisplay}) => {
    return (
        <>
            <input className = {styles.calculatorOutputContainer} type="text" value = {buttonToDisplay} readOnly></input> 
            {/* readOnly means here that we cannot now type in the input box by using our keyboard. */}
        </>
    );
}

export default Display;