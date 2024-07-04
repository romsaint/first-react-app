import styles from '/src/assets/HomeApp.module.css'
import { useRef, useState } from 'react';
import axios from 'axios';


export function CreatePost(){

    return (
        <div className={`${styles.createPostContainer} bg-white p-8 rounded-lg shadow-lg w-full mb-8`}>
            <h2 className={`${styles.formCreatePostText} ${styles.homeDiv} flex justify-center mb-5 p-3 text-2xl font-bold text-gray-800"`}>Form create post</h2>

            <form method='post' action='/create-post-api' className={styles.formCreatePost}>
              <div className="mb-4">
                <label  htmlFor="title" className={`${styles.createPostLabel} block text-gray-700 font-medium mb-2`}>Title</label>
                <input 
                  type="text" 
                  name="title" 
                  id='title'
                  className={`${styles.input} w-full p-3 rounded`}
                  placeholder="Write title" 
                />
              </div>
              <div className="mb-4">
                <label  htmlFor="additionalInfo" className={`${styles.createPostLabel} block text-gray-700 font-medium mb-2`}>Additional info about post</label>
                <textarea
                  name="about" 
                  id='additionalInfo'
                  className={`${styles.additionalTextArea} ${styles.input} w-full p-3 rounded`} 
                  placeholder="Write additional info" 
                />
              </div>
              <button 
                type="submit" 
                className={`${styles.createPostBtn} w-full text-white p-3 rounded font-medium`}
              >
                Create post
              </button>
            </form>
        </div>
    )
}