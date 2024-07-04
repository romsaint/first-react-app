import { useEffect, useRef } from 'react'
import styles from '/src/assets/LoginApp.module.css'


export function ErrhandleLogin({ textAlert }) {

    const handleClick = () => {
        const alert = document.querySelector(`.${styles.alertDangerous}`)
        alert.style.display = 'none' 

    };

    return (
        <div className={`${styles.alertDangerous} bg-red-500 p-4 mb-4 w-full`}>
            <p className={styles.alertText}>{textAlert}</p>
            <img
                className={`${styles.closeSvg} close-svg-login`}
                src="/src/assets/images/close-1511-svgrepo-com.svg"
                alt=""
                onClick={handleClick}
            />
        </div>
    );
}