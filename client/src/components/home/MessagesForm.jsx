import { useRef } from 'react';
import styles from '/src/assets/HomeApp.module.css'


export function MessageForm(){
    
    return (
          <div className={`${styles.messageContainer} bg-white p-8 rounded-lg shadow-lg  max-w-md w-full`}>
            <h2 className={`${styles.formSendMsgText} ${styles.homeDiv} flex justify-center p-3 text-2xl font-bold text-gray-800"`}>Form send message</h2>
            <form className={styles.formSendMsg} action='/create-post-api'>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-700" 
                  placeholder="Send username" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <input
                  id="message" 
                  name="message" 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-700" 
                  placeholder="Your message" 
                />
              </div>
              <button 
                type="submit" 
                className={`${styles.sendMsgBtn} w-full text-white p-3 rounded font-medium`}
              >
                Send
              </button>
            </form>
          </div>
      );
}