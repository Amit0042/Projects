import styles from "./DisplayCount.module.css"

function DisplayCount({count}) {
    return (
        <>
            <input 
            type='text' 
            readOnly 
            value={count}
            className={styles["display-container"]}
            ></input>
        </>
    );
}

export default DisplayCount;