import styles from '/src/assets/LoginApp.module.css'

export function AlreadyLogin(){
    return (
        <div className={`${styles.alertWarning} bg-yellow-500 p-4 mb-4 w-full`}>
            <p className={styles.alertText}>You've already login.</p>
        </div>
    )
}