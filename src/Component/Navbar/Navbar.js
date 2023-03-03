import { useState } from "react";
import { AiOutlineHighlight } from "react-icons/ai";
import { GoTextSize } from "react-icons/go";
import { MdOutlineFormatColorText } from "react-icons/md";
import { icons, fontSizeList, fontFamilyList } from "../../Fixture/Icons";
import style from "./Navbar.module.css";
export default function Navbar() {
  const [fontSize, setFontSize] = useState(3);
  const [fontName, setFontName] = useState("Font Style");
  const [color, setColor] = useState("black");
  const [higlightColor, setHiglightColor] = useState("black");



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

  return (
    <div className={style.wrapper}>
      {icons.slice(0, 4).map((element, index) => (
        <button key={index} onClick={() => handleAction(element)}>
          {element.icon}
        </button>
      ))}

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

      <button>
        <select id="fontStyle" onChange={handleFontStyle}>
          <option>{fontName}</option>
          {fontFamilyList.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </button>
      {icons.slice(8).map((element, index) => (
        <button key={index} onClick={() => handleAction(element)}>
          {element.icon}
        </button>
      ))}
    </div>
  );
}
