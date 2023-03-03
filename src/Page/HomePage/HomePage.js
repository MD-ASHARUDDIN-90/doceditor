import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import style from './HomePage.module.css'
import { IoDocumentTextSharp } from "react-icons/io5";


export default function HomePage() {
  

    return(
        <>
        <div className={style.main}>
        
        
        <div className={style.subMain}>
        <IoDocumentTextSharp className={style.icon}/>
        <sup>Ashar Document</sup>
        </div>
        
        <Navbar />
        <div className={style.wrapper}>
        <div  className={style.textArea} contentEditable="true">
       
        </div>
        </div>
        </div>
        </>
    )
}