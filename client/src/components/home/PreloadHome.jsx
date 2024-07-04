import styles from '/src/assets/HomeApp.module.css'


export function Preload (){
    return (
        <div className={`${styles.preload} bg-gray-100`}>
            <img src="/src/assets/images/reload-svgrepo-com.svg" className={styles.loadSvg} alt="" />
        </div>
    )
}