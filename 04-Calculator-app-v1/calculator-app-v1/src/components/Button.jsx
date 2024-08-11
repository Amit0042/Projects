import styles from "./Button.module.css"

const Button = ({ button }) => {
    // console.log(element)
    return (
        <>
            <button className={styles["button-element"]}>{button}</button>
        </>
    );
}

export default Button;