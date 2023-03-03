import { BiBold, BiItalic, BiUnderline } from "react-icons/bi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import {  MdFormatAlignCenter, MdFormatAlignJustify, MdFormatAlignLeft, MdFormatAlignRight, MdOutlineFormatColorText  } from "react-icons/md";
import {  FaHeading, FaHighlighter, FaRemoveFormat  } from "react-icons/fa";
import {  RxFontFamily  } from "react-icons/rx";
import {  RiSubscript, RiSuperscript } from "react-icons/ri";
import {  GoListOrdered, GoListUnordered, GoTextSize  } from "react-icons/go";
export const icons = [
    {
      icon : <BiBold />,
      action : "bold"
    },
    {
      icon :  <BiItalic  />,
      action : "italic"
    },
    {
      icon :  <BiUnderline  />,
      action : "underline"
    },
    {
      icon :  < AiOutlineStrikethrough /> ,
      action : "strikethrough"
    },
    {
      icon :   <MdOutlineFormatColorText  /> ,
      action : "foreColor",
    
    },
    {
      icon :   <GoTextSize  /> ,
      action : "fontSize"
    },
  
    {
      icon :   <FaHighlighter /> ,
      action : "backColor"
    },
    {
      icon :   <RxFontFamily />  ,
      action : "fontName"
    },
    {
      icon :   <FaHeading />  ,
      action : "heading"
    },
    {
      icon :   <FaRemoveFormat />  ,
      action : "removeFormat"
    },
    {
      icon :   <MdFormatAlignCenter />  ,
      action : "justifyCenter"
    },
    {
      icon :   <MdFormatAlignLeft />  ,
      action : "justifyLeft"
    },
    {
      icon :   <MdFormatAlignRight />  ,
      action : "justifyRight"
    },
    {
      icon :   <MdFormatAlignJustify />  ,
      action : "justifyFull"
    },
    {
      icon :   <GoListOrdered />  ,
      action : "insertOrderedList"
    },
    {
      icon :   <GoListUnordered />  ,
      action : "insertUnorderedList"
    },
    {
      icon :   <RiSuperscript />  ,
      action : "superscript"
    },
    {
      icon :   <RiSubscript />  ,
      action : "subscript"
    },
  ]



   export const fontSizeList = [
    1,2,3,4,5,6,7
  ]

  export const fontFamilyList= [
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "emoji",
    "math",
    "fangsong",
]

export const headingList=[
    "H1","H2","H3","H4","H5","H6"
]