import styles from "./WelcomeMessage.module.css"

const WelcomeMessage = () => {
    return (
        <>
            <p className={styles["message-style"]}>Enjoy your Day!</p>
        </>
    );   
}

export default WelcomeMessage;