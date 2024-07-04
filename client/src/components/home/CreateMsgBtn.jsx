import styles from '/src/assets/HomeApp.module.css'


export function CreateMsgBtn(){
    return (
        <button className={`${styles.createMsgBtn} w-full inline-block text-white py-3 px-4 rounded-md shadow-md hover:bg-opacity-90 transition duration-300`}>
            My profile
        </button> 
    )
}