import React, { useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import style from './HomePage.module.css'
import { IoDocumentTextSharp } from "react-icons/io5";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


export default function HomePage() {
  const[color , setColor] = useState("black")

    return(
        <>
        <div className={style.main}>
        
        
        <div className={style.subMain}>
        <IoDocumentTextSharp className={style.icon}/>
        <sup>Ashar Document  <AiFillStar onClick={()=>setColor(color==="black"?"red" : "black")} style={{color : color}} /></sup>
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