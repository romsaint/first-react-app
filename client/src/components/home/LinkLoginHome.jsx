import styles from '/src/assets/HomeApp.module.css'

export function LinkLoginHome(){
    return (
        <a href="/login" className={`${styles.bgTomato} mt-auto text-center w-full inline-block text-white py-3 px-4 rounded-md shadow-md hover:bg-opacity-90 transition duration-300`}>
            Go to Login
        </a> 
    )
}