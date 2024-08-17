import styles from "./Button.module.css"

const Button = ({ buttonName, buttonColor, handleOnClick }) => {
    // const {buttonName} = props
    return (
        <>
            <button
                type="button"
                className={`${styles["button-container"]} btn ${buttonColor}`}
                onClick={() => {handleOnClick(buttonColor)}}
            >{buttonName}</button>
        </>
    );
}

export default Button;