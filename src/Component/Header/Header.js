import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { IoDocumentTextSharp, IoShareSocialOutline } from 'react-icons/io5'
import style from './Header.module.css'
export default function Header({title , setTitle}) {
    const [color, setColor] = useState("black");
    return(
        <>
       
       <div className={style.main}>
       <div className={style.titleBox}>
       <IoDocumentTextSharp className={style.icon} />
           <div>
            <input
              value={title}
              className={style.input}
              onChange={(e) => setTitle(e.target.value)}
            />
            <AiFillStar
              onClick={() => setColor(color === "black" ? "red" : "black")}
              style={{ color: color, fontSize: "1.2rem" }}
            />
            <div className={style.menu}>
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Insert</p>
            <p>Format</p>
            <p>Help</p>
            </div>
            </div>

            </div>
           <div  className={style.profileDiv}>
           <FaUserCircle  className={style.profile}/>
           <IoShareSocialOutline  className={style.share} />
           </div>
            </div>
        </>
    )
}