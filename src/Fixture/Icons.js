import { BiBold, BiItalic, BiUnderline } from "react-icons/bi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import {
  MdFormatAlignCenter,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
} from "react-icons/md";
import { FaRedo, FaRemoveFormat, FaUndo } from "react-icons/fa";
import { RiSubscript, RiSuperscript } from "react-icons/ri";
import { GoListOrdered, GoListUnordered } from "react-icons/go";
export const icons = [
  {
    icon: <FaUndo />,
    action: "undo",
  },
  {
    icon: <FaRedo />,
    action: "redo",
  },
  {
    icon: <BiBold />,
    action: "bold",
  },
  {
    icon: <BiItalic />,
    action: "italic",
  },
  {
    icon: <BiUnderline />,
    action: "underline",
  },
  {
    icon: <AiOutlineStrikethrough />,
    action: "strikethrough",
  },
  {
    icon: <MdFormatAlignCenter />,
    action: "justifyCenter",
  },
  {
    icon: <MdFormatAlignLeft />,
    action: "justifyLeft",
  },
  {
    icon: <MdFormatAlignRight />,
    action: "justifyRight",
  },
  {
    icon: <MdFormatAlignJustify />,
    action: "justifyFull",
  },
  {
    icon: <GoListOrdered />,
    action: "insertOrderedList",
  },
  {
    icon: <GoListUnordered />,
    action: "insertUnorderedList",
  },
  {
    icon: <RiSuperscript />,
    action: "superscript",
  },
  {
    icon: <RiSubscript />,
    action: "subscript",
  },
  {
    icon: <FaRemoveFormat />,
    action: "removeFormat",
  },
];

export const fontSizeList = [1, 2, 3, 4, 5, 6, 7];

export const fontFamilyList = [
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
];

export const headingList = ["H1", "H2", "H3", "H4", "H5", "H6"];
