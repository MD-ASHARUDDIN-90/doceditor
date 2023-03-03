import { useState } from "react";
import { icons, fontSizeList, fontFamilyList } from "../../Fixture/Icons";
import style from "./Navbar.module.css";
export default function Navbar() {
  const [showColor, setShowColor] = useState(false);
  const [showFont, setShowFont] = useState(false);
  const [showFontName, setShowFontName] = useState(false);
 
  const [fontName, setFontName] = useState("Arial");

  const [fontSize, setFontSize] = useState(3);
  const [color, setColor] = useState("black");

  function handleAction(element) {
    console.log(element.action);
    if (element.action === "foreColor") {
      setShowColor(!showColor ? true : false);
      document.execCommand("foreColor", false, color);
    } else if (element.action === "fontSize") {
      setShowFont(!showFont ? true : false);
      document.execCommand("fontSize", false, fontSize);
    } else if (element.action === "backColor") {
      setShowColor(!showColor ? true : false);
      document.execCommand("backColor", false, color);
    } else if (element.action === "fontName") {
      setShowFontName(!showFontName ? true : false);
      document.execCommand("fontName", false, fontName);
    }else if (element.action === "insertImage") {
        setShowFontName(!showFontName ? true : false);
        document.execCommand("insertImage", false, );
      }else {
      document.execCommand(`${element.action}`);
    }
  }

  return (
    <div className={style.wrapper}>
      {icons.map((element, index) => (
        <button key={index} onClick={() => handleAction(element)}>
          {element.icon}
        </button>
      ))}

      <div>
        {showColor ? (
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        ) : (
          ""
        )}
        {showFont ? (
          <div>
            <select onChange={(e) => setFontSize(e.target.value)}>
              <option>FontSize</option>
              {fontSizeList.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </div>
        ) : (
          ""
        )}
    
        {showFontName ? (
          <div>
            <select onChange={(e) => setFontName(e.target.value)}>
              <option>{fontName}</option>
              {fontFamilyList.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </div>
        ) : (
          ""
        )}
       
        </div>
    </div>
  );
}
