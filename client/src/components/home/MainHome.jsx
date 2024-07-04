import styles from '/src/assets/HomeApp.module.css'

import {LinkLoginHome} from './LinkLoginHome'
import {CreateMsgBtn} from './CreateMsgBtn'
import {MessageForm} from './MessagesForm'
import { CreatePost } from './CreatePost'

import {MainHomeCheckLogin} from '/src/functions/home/MainHomeCheckLogin'
import { Preload } from './PreloadHome'

export function MainHome(){
    const user = MainHomeCheckLogin()

    return (
        <>
            {user 
                ? <div className={`bg-gray-100 flex items-center justify-center`}>
                    <div className={`${styles.mainContainer} mt-8`}>
                        <div className={`${styles.ourHomeCard} ${!user ? styles.ourHomeCardNotLogin : ''} flex flex-col bg-white p-8 rounded-lg shadow-lg max-w-md w-full`}>
                            {user 
                            ? <h1 className={`${styles.homeDiv} ${styles.user} mb-6 p-4 text-center`}>Hello {user.username} !</h1>
                            : null}
                            <h2 className={`${styles.homeDiv}  text-3xl font-bold text-gray-800 mb-4 p-4`}>Welcome to Our Home Page</h2>
                            <p className={`${styles.homeDiv}  text-gray-700 mb-6 p-4`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            {!user  ? <LinkLoginHome /> : <CreateMsgBtn />}
                        </div>
                        <MessageForm />
                        <CreatePost />
                    </div>
                </div>
                : <Preload /> 
            }
        </>
    )
}