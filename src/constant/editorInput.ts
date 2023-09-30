import { IEditorInput } from '../utils/interfaces/style';
import { TbArrowAutofitWidth, TbLineHeight } from 'react-icons/tb';
import { PiFrameCorners, PiArrowsVerticalBold, PiArrowsHorizontalFill } from 'react-icons/pi';
import {
  MdOutlineRotate90DegreesCcw,
  MdRoundedCorner,
  MdBorderOuter,
  MdBlurOn,
  MdOutlineOpacity,
  MdViewInAr,
  MdTextFields,
  MdFormatBold,
} from 'react-icons/md';
import { RxMargin, RxShadow, RxFontSize, RxLetterCaseCapitalize } from 'react-icons/rx';
import { BiColorFill, BiBorderAll, BiText } from 'react-icons/bi';
import { BsBorderWidth, BsBorderStyle } from 'react-icons/bs';

export const editorInput: Array<IEditorInput> = [
  {
    section: 'Frame',
    icons: PiFrameCorners,
    input: [
      { type: 'number', property: 'width', icons: TbArrowAutofitWidth },
      {
        type: 'number',
        property: 'height',
        icons: TbLineHeight,
      },
      {
        type: 'number',
        property: 'rotate',
        icons: MdOutlineRotate90DegreesCcw,
      },
      {
        type: 'number',
        property: 'padding',
        icons: RxMargin,
      },
      {
        type: 'color',
        property: 'backgroundColor',
        icons: BiColorFill,
      },
    ],
  },
  {
    section: 'Border',
    icons: BiBorderAll,
    input: [
      {
        type: 'number',
        property: 'borderWidth',
        icons: BsBorderWidth,
      },
      { type: 'number', property: 'borderRadius', icons: MdRoundedCorner },
      {
        type: 'select',
        property: 'borderStyle',
        icons: BsBorderStyle,
        options: ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden'],
      },
      {
        type: 'select',
        property: 'borderPosition',
        icons: MdBorderOuter,
        options: ['All', 'Top', 'Right', 'Bottom', 'Left'],
      },
      {
        type: 'color',
        property: 'borderColor',
        icons: BiColorFill,
      },
    ],
  },
  {
    section: 'Shadow',
    icons: RxShadow,
    input: [
      { type: 'number', property: 'shadowX', icons: PiArrowsHorizontalFill },
      { type: 'number', property: 'shadowY', icons: PiArrowsVerticalBold },
      { type: 'number', property: 'shadowBlur', icons: MdBlurOn },
      { type: 'number', property: 'shadowSpread', icons: MdViewInAr },
      { type: 'number', property: 'shadowOpacity', icons: MdOutlineOpacity },
      {
        type: 'color',
        property: 'shadowColor',
        icons: BiColorFill,
      },
    ],
  },
  {
    section: 'Typhography',
    icons: MdTextFields,
    input: [
      { type: 'number', property: 'fontSize', icons: RxFontSize },
      {
        type: 'select',
        property: 'fontWeight',
        icons: MdFormatBold,
        options: ['bolder', 'bold', 'lighter', 'inherit', 'initial', 'normal', 'revert', 'unset'],
      },
      {
        type: 'select',
        property: 'textTransform',
        icons: RxLetterCaseCapitalize,
        options: ['uppercase', 'lowercase', 'capitalize', 'none'],
      },
      { type: 'number', property: 'letterSpacing', icons: MdViewInAr },
      { type: 'text', property: 'shadowOpacity', icons: BiText },
      {
        type: 'color',
        property: 'color',
        icons: BiColorFill,
      },
    ],
  },
];
