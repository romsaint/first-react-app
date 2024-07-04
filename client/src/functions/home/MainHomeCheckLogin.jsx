import { useContext, useEffect, useMemo } from 'react';
import { LoginContext } from '/src/contexts/LoginContext'; // Убедитесь, что путь к контексту правильный
import axios from 'axios';


export function MainHomeCheckLogin(){
    const { user, setUser } = useContext(LoginContext);

    useEffect(() => {
        
        async function isAuth() {
            if (localStorage.token) {
                try {
                    const getAuth = await axios.get('http://localhost:5000/is-auth', {
                        headers: { 'Authorization': `Bearer ${localStorage.token}` }
                    });
                    if (getAuth.data.ok) {
                        setUser(getAuth.data.user);
                    }
                } catch (error) {
                    console.error('Authentication check failed', error);
                }
            }
        }

        isAuth();
        
    }, [setUser]);


    return user;
}