import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import style from './HomePage.module.css'

export default function HomePage() {
    return(
        <>
        <Navbar />
        <div className={style.wrapper}>
        <div className={style.textArea} contentEditable="true">
        
        </div>
        </div>
        </>
    )
}