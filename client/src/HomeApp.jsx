import styles from './assets/HomeApp.module.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from 'axios'
import { useEffect, useState, useContext } from 'react';

import {LinkLoginHome} from './components/home/LinkLoginHome'
import {CreateMsgBtn} from './components/home/CreateMsgBtn'
import {MessageForm} from './components/home/MessagesForm'
import {Preload} from './components/home/PreloadHome'
import { MainHome } from './components/home/MainHome';


export function HomeApp(){
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta name="description" content="Домашняя страница" />
                </Helmet>
                <MainHome />
                
            </HelmetProvider>
        </>
    )
}