import styles from "./Button.module.css"

const Button = ({ button, handleEventOnClick }) => {
    // console.log(element)
    return (
        <>
            <button className={styles["button-element"]}
            onClick = {() => {handleEventOnClick(button)}}
            >{button}</button>
        </>
    );
}

export default Button;