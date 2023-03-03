import { useState } from "react";
import { AiOutlineHighlight } from "react-icons/ai";
import { GoTextSize } from "react-icons/go";
import { BsLink } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import { MdOutlineFormatColorText } from "react-icons/md";
import { icons, fontSizeList, fontFamilyList } from "../../Fixture/Icons";
import style from "./Navbar.module.css";
export default function Navbar() {
  const [fontSize, setFontSize] = useState("Font Size");
  const [fontName, setFontName] = useState("Font Style");
  const [color, setColor] = useState("black");
  const [higlightColor, setHiglightColor] = useState("black");

  const [link, setLink] = useState("");
  const [show, setShow] = useState(false);

  function handleAction(element) {
    document.execCommand(`${element.action}`);
  }
  function handleFontColor(e) {
    setColor(e.target.value);
    document.execCommand("foreColor", false, e.target.value);
  }
  function handleFontSize(e) {
    setFontSize(e.target.value);
    document.execCommand("fontSize", false, e.target.value);
  }
  function handleHighlightColor(e) {
    setHiglightColor(e.target.value);
    document.execCommand("backColor", false, e.target.value);
  }
  function handleFontStyle(e) {
    setFontName(e.target.value);
    document.execCommand("fontName", false, e.target.value);
    console.log(e.target.value);
  }

  function handleOpen(value) {
    setShow(!show ? true : false);
    if(value === "link"){
        document.execCommand("createLink", false, link);
    }else{
        document.execCommand("insertImage", false, link);
    }
  }
  return (
    <>
      <div className={style.wrapper}>
        {icons.slice(0, 6).map((element, index) => (
          <button key={index} onClick={() => handleAction(element)}>
            {element.icon}
          </button>
        ))}
        <button>
          <select id="fontStyle" onChange={handleFontStyle}>
            <option>{fontName}</option>
            {fontFamilyList.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </button>

        <button>
          <label htmlFor="color">
            <MdOutlineFormatColorText />
          </label>
          <input
            id="color"
            type="color"
            value={color}
            onChange={handleFontColor}
          />
        </button>

        <button>
          <label htmlFor="fontSize">
            <GoTextSize />
          </label>
          <select id="fontSize" onChange={handleFontSize}>
            <option>3</option>
            {fontSizeList.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </button>

        <button>
          <label htmlFor="highlighColor">
            <AiOutlineHighlight />
          </label>
          <input
            id="highlighColor"
            type="color"
            value={higlightColor}
            onChange={handleHighlightColor}
          />
        </button>

        <button onClick={()=>handleOpen("link")}>
          <label htmlFor="link">
            <BsLink />
          </label>
        </button>
        <button onClick={()=>handleOpen("insertImage")}>
          <label htmlFor="link">
            <TfiGallery />
          </label>
        </button>

        {icons.slice(6).map((element, index) => (
          <button key={index} onClick={() => handleAction(element)}>
            {element.icon}
          </button>
        ))}
      </div>
      {show ? (
        <div className={style.linkBox}>
          <h4>Paste your Link Here....</h4>

          <input
            id="link"
            value={link}
            type="url"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
      ) : (
        ""
      )}
    
    </>
  );
}
