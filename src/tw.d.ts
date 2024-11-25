import { MapNamespace } from "@stylexjs/stylex/lib/StyleXTypes"

type ColorValues =
  { 'inherit'     : 'inherit'
  , 'current'     : 'currentColor'
  , 'transparent' : 'transparent'
  , 'black'       : 'rgb(0, 0, 0)'
  , 'white'       : 'rgb(255, 255, 255)'
  , 'slate-50'    : 'rgb(248, 250, 252)'
  , 'slate-100'   : 'rgb(241, 245, 249)'
  , 'slate-200'   : 'rgb(226, 232, 240)'
  , 'slate-300'   : 'rgb(203, 213, 225)'
  , 'slate-400'   : 'rgb(148, 163, 184)'
  , 'slate-500'   : 'rgb(100, 116, 139)'
  , 'slate-600'   : 'rgb(71, 85, 105)'
  , 'slate-700'   : 'rgb(51, 65, 85)'
  , 'slate-800'   : 'rgb(30, 41, 59)'
  , 'slate-900'   : 'rgb(15, 23, 42)'
  , 'slate-950'   : 'rgb(2, 6, 23)'
  , 'gray-50'     : 'rgb(249, 250, 251)'
  , 'gray-100'    : 'rgb(243, 244, 246)'
  , 'gray-200'    : 'rgb(229, 231, 235)'
  , 'gray-300'    : 'rgb(209, 213, 219)'
  , 'gray-400'    : 'rgb(156, 163, 175)'
  , 'gray-500'    : 'rgb(107, 114, 128)'
  , 'gray-600'    : 'rgb(75, 85, 99)'
  , 'gray-700'    : 'rgb(55, 65, 81)'
  , 'gray-800'    : 'rgb(31, 41, 55)'
  , 'gray-900'    : 'rgb(17, 24, 39)'
  , 'gray-950'    : 'rgb(3, 7, 18)'
  , 'zinc-50'     : 'rgb(250, 250, 250)'
  , 'zinc-100'    : 'rgb(244, 244, 245)'
  , 'zinc-200'    : 'rgb(228, 228, 231)'
  , 'zinc-300'    : 'rgb(212, 212, 216)'
  , 'zinc-400'    : 'rgb(161, 161, 170)'
  , 'zinc-500'    : 'rgb(113, 113, 122)'
  , 'zinc-600'    : 'rgb(82, 82, 91)'
  , 'zinc-700'    : 'rgb(63, 63, 70)'
  , 'zinc-800'    : 'rgb(39, 39, 42)'
  , 'zinc-900'    : 'rgb(24, 24, 27)'
  , 'zinc-950'    : 'rgb(9, 9, 11)'
  , 'neutral-50'  : 'rgb(250, 250, 250)'
  , 'neutral-100' : 'rgb(245, 245, 245)'
  , 'neutral-200' : 'rgb(229, 229, 229)'
  , 'neutral-300' : 'rgb(212, 212, 212)'
  , 'neutral-400' : 'rgb(163, 163, 163)'
  , 'neutral-500' : 'rgb(115, 115, 115)'
  , 'neutral-600' : 'rgb(82, 82, 82)'
  , 'neutral-700' :	'rgb(64, 64, 64)'
  , 'neutral-800' : 'rgb(38, 38, 38)'
  , 'neutral-900' : 'rgb(23, 23, 23)'
  , 'neutral-950' : 'rgb(10, 10, 10)'
  , 'stone-50'    : 'rgb(250, 250, 249)'
  , 'stone-100'   : 'rgb(245, 245, 244)'
  , 'stone-200'   : 'rgb(231, 229, 228)'
  , 'stone-300'   : 'rgb(214, 211, 209)'
  , 'stone-400'   : 'rgb(168, 162, 158)'
  , 'stone-500'   : 'rgb(120, 113, 108)'
  , 'stone-600'   : 'rgb(87, 83, 78)'
  , 'stone-700'   : 'rgb(68, 64, 60)'
  , 'stone-800'   : 'rgb(41, 37, 36)'
  , 'stone-900'   : 'rgb(28, 25, 23)'
  , 'stone-950'   : 'rgb(12, 10, 9)'
  , 'red-50'      : 'rgb(254, 242, 242)'
  , 'red-100'     : 'rgb(254, 226, 226)'
  , 'red-200'     : 'rgb(254, 202, 202)'
  , 'red-300'     : 'rgb(252, 165, 165)'
  , 'red-400'     : 'rgb(248, 113, 113)'
  , 'red-500'     : 'rgb(239, 68, 68)'
  , 'red-600'     : 'rgb(220, 38, 38)'
  , 'red-700'     : 'rgb(185, 28, 28)'
  , 'red-800'     : 'rgb(153, 27, 27)'
  , 'red-900'     : 'rgb(127, 29, 29)'
  , 'red-950'     : 'rgb(69, 10, 10)'
  , 'orange-50'   : 'rgb(255, 247, 237)'
  , 'orange-100'  : 'rgb(255, 237, 213)'
  , 'orange-200'  : 'rgb(254, 215, 170)'
  , 'orange-300'  : 'rgb(253, 186, 116)'
  , 'orange-400'  : 'rgb(251, 146, 60)'
  , 'orange-500'  : 'rgb(249, 115, 22)'
  , 'orange-600'  : 'rgb(234, 88, 12)'
  , 'orange-700'  : 'rgb(194, 65, 12)'
  , 'orange-800'  : 'rgb(154, 52, 18)'
  , 'orange-900'  : 'rgb(124, 45, 18)'
  , 'orange-950'  : 'rgb(67, 20, 7)'
  , 'amber-50'    : 'rgb(255, 251, 235)'
  , 'amber-100'   : 'rgb(254, 243, 199)'
  , 'amber-200'   : 'rgb(253, 230, 138)'
  , 'amber-300'   : 'rgb(252, 211, 77)'
  , 'amber-400'   : 'rgb(251, 191, 36)'
  , 'amber-500'   : 'rgb(245, 158, 11)'
  , 'amber-600'   : 'rgb(217, 119, 6)'
  , 'amber-700'   : 'rgb(180, 83, 9)'
  , 'amber-800'   : 'rgb(146, 64, 14)'
  , 'amber-900'   : 'rgb(120, 53, 15)'
  , 'amber-950'   : 'rgb(69, 26, 3)'
  , 'yellow-50'   : 'rgb(254, 252, 232)'
  , 'yellow-100'  : 'rgb(254, 249, 195)'
  , 'yellow-200'  : 'rgb(254, 240, 138)'
  , 'yellow-300'  : 'rgb(253, 224, 71)'
  , 'yellow-400'  : 'rgb(250, 204, 21)'
  , 'yellow-500'  : 'rgb(234, 179, 8)'
  , 'yellow-600'  : 'rgb(202, 138, 4)'
  , 'yellow-700'  : 'rgb(161, 98, 7)'
  , 'yellow-800'  : 'rgb(133, 77, 14)'
  , 'yellow-900'  : 'rgb(113, 63, 18)'
  , 'yellow-950'  : 'rgb(66, 32, 6)'
  , 'lime-50'     : 'rgb(247, 254, 231)'
  , 'lime-100'    : 'rgb(236, 252, 203)'
  , 'lime-200'    : 'rgb(217, 249, 157)'
  , 'lime-300'    : 'rgb(190, 242, 100)'
  , 'lime-400'    : 'rgb(163, 230, 53)'
  , 'lime-500'    : 'rgb(132, 204, 22)'
  , 'lime-600'    : 'rgb(101, 163, 13)'
  , 'lime-700'    : 'rgb(77, 124, 15)'
  , 'lime-800'    : 'rgb(63, 98, 18)'
  , 'lime-900'    : 'rgb(54, 83, 20)'
  , 'lime-950'    : 'rgb(26, 46, 5)'
  , 'green-50'    : 'rgb(240, 253, 244)'
  , 'green-100'   : 'rgb(220, 252, 231)'
  , 'green-200'   : 'rgb(187, 247, 208)'
  , 'green-300'   : 'rgb(134, 239, 172)'
  , 'green-400'   : 'rgb(74, 222, 128)'
  , 'green-500'   : 'rgb(34, 197, 94)'
  , 'green-600'   : 'rgb(22, 163, 74)'
  , 'green-700'   : 'rgb(21, 128, 61)'
  , 'green-800'   : 'rgb(22, 101, 52)'
  , 'green-900'   : 'rgb(20, 83, 45)'
  , 'green-950'   : 'rgb(5, 46, 22)'
  , 'emerald-50'  : 'rgb(236, 253, 245)'
  , 'emerald-100' : 'rgb(209, 250, 229)'
  , 'emerald-200' : 'rgb(167, 243, 208)'
  , 'emerald-300' : 'rgb(110, 231, 183)'
  , 'emerald-400' : 'rgb(52, 211, 153)'
  , 'emerald-500' :	'rgb(16, 185, 129)'
  , 'emerald-600' :	'rgb(5, 150, 105)'
  , 'emerald-700' :	'rgb(4, 120, 87)'
  , 'emerald-800' :	'rgb(6, 95, 70)'
  , 'emerald-900' :	'rgb(6, 78, 59)'
  , 'emerald-950' :	'rgb(2, 44, 34)'
  , 'teal-50'     :	'rgb(240, 253, 250)'
  , 'teal-100'    :	'rgb(204, 251, 241)'
  , 'teal-200'    :	'rgb(153, 246, 228)'
  , 'teal-300'    :	'rgb(94, 234, 212)'
  , 'teal-400'    :	'rgb(45, 212, 191)'
  , 'teal-500'    :	'rgb(20, 184, 166)'
  , 'teal-600'    : 'rgb(13, 148, 136)'
  , 'teal-700'    : 'rgb(15, 118, 110)'
  , 'teal-800'    : 'rgb(17, 94, 89)'
  , 'teal-900'    : 'rgb(19, 78, 74)'
  , 'teal-950'    : 'rgb(4, 47, 46)'
  , 'cyan-50'     : 'rgb(236, 254, 255)'
  , 'cyan-100'    : 'rgb(207, 250, 254)'
  , 'cyan-200'    : 'rgb(165, 243, 252)'
  , 'cyan-300'    : 'rgb(103, 232, 249)'
  , 'cyan-400'    : 'rgb(34, 211, 238)'
  , 'cyan-500'    : 'rgb(6, 182, 212)'
  , 'cyan-600'    : 'rgb(8, 145, 178)'
  , 'cyan-700'    : 'rgb(14, 116, 144)'
  , 'cyan-800'    : 'rgb(21, 94, 117)'
  , 'cyan-900'    : 'rgb(22, 78, 99)'
  , 'cyan-950'    : 'rgb(8, 51, 68)'
  , 'sky-50'      : 'rgb(240, 249, 255)'
  , 'sky-100'     : 'rgb(224, 242, 254)'
  , 'sky-200'     : 'rgb(186, 230, 253)'
  , 'sky-300'     : 'rgb(125, 211, 252)'
  , 'sky-400'     : 'rgb(56, 189, 248)'
  , 'sky-500'     : 'rgb(14, 165, 233)'
  , 'sky-600'     : 'rgb(2, 132, 199)'
  , 'sky-700'     : 'rgb(3, 105, 161)'
  , 'sky-800'     : 'rgb(7, 89, 133)'
  , 'sky-900'     : 'rgb(12, 74, 110)'
  , 'sky-950'     : 'rgb(8, 47, 73)'
  , 'blue-50'     : 'rgb(239, 246, 255)'
  , 'blue-100'    : 'rgb(219, 234, 254)'
  , 'blue-200'    : 'rgb(191, 219, 254)'
  , 'blue-300'    : 'rgb(147, 197, 253)'
  , 'blue-400'    : 'rgb(96, 165, 250)'
  , 'blue-500'    : 'rgb(59, 130, 246)'
  , 'blue-600'    : 'rgb(37, 99, 235)'
  , 'blue-700'    : 'rgb(29, 78, 216)'
  , 'blue-800'    : 'rgb(30, 64, 175)'
  , 'blue-900'    : 'rgb(30, 58, 138)'
  , 'blue-950'    : 'rgb(23, 37, 84)'
  , 'indigo-50'   : 'rgb(238, 242, 255)'
  , 'indigo-100'  : 'rgb(224, 231, 255)'
  , 'indigo-200'  : 'rgb(199, 210, 254)'
  , 'indigo-300'  : 'rgb(165, 180, 252)'
  , 'indigo-400'  : 'rgb(129, 140, 248)'
  , 'indigo-500'  : 'rgb(99, 102, 241)'
  , 'indigo-600'  : 'rgb(79, 70, 229)'
  , 'indigo-700'  : 'rgb(67, 56, 202)'
  , 'indigo-800'  : 'rgb(55, 48, 163)'
  , 'indigo-900'  : 'rgb(49, 46, 129)'
  , 'indigo-950'  : 'rgb(30, 27, 75)'
  , 'violet-50'   : 'rgb(245, 243, 255)'
  , 'violet-100'  : 'rgb(237, 233, 254)'
  , 'violet-200'  : 'rgb(221, 214, 254)'
  , 'violet-300'  : 'rgb(196, 181, 253)'
  , 'violet-400'  : 'rgb(167, 139, 250)'
  , 'violet-500'  : 'rgb(139, 92, 246)'
  , 'violet-600'  : 'rgb(124, 58, 237)'
  , 'violet-700'  : 'rgb(109, 40, 217)'
  , 'violet-800'  : 'rgb(91, 33, 182)'
  , 'violet-900'  : 'rgb(76, 29, 149)'
  , 'violet-950'  : 'rgb(46, 16, 101)'
  , 'purple-50'   : 'rgb(250, 245, 255)'
  , 'purple-100'  : 'rgb(243, 232, 255)'
  , 'purple-200'  : 'rgb(233, 213, 255)'
  , 'purple-300'  : 'rgb(216, 180, 254)'
  , 'purple-400'  : 'rgb(192, 132, 252)'
  , 'purple-500'  : 'rgb(168, 85, 247)'
  , 'purple-600'  : 'rgb(147, 51, 234)'
  , 'purple-700'  : 'rgb(126, 34, 206)'
  , 'purple-800'  : 'rgb(107, 33, 168)'
  , 'purple-900'  : 'rgb(88, 28, 135)'
  , 'purple-950'  : 'rgb(59, 7, 100)'
  , 'fuchsia-50'  : 'rgb(253, 244, 255)'
  , 'fuchsia-100' : 'rgb(250, 232, 255)'
  , 'fuchsia-200' :	'rgb(245, 208, 254)'
  , 'fuchsia-300' :	'rgb(240, 171, 252)'
  , 'fuchsia-400' :	'rgb(232, 121, 249)'
  , 'fuchsia-500' :	'rgb(217, 70, 239)'
  , 'fuchsia-600' :	'rgb(192, 38, 211)'
  , 'fuchsia-700' :	'rgb(162, 28, 175)'
  , 'fuchsia-800' :	'rgb(134, 25, 143)'
  , 'fuchsia-900' :	'rgb(112, 26, 117)'
  , 'fuchsia-950' :	'rgb(74, 4, 78)'
  , 'pink-50'     :	'rgb(253, 242, 248)'
  , 'pink-100'    :	'rgb(252, 231, 243)'
  , 'pink-200'    :	'rgb(251, 207, 232)'
  , 'pink-300'    :	'rgb(249, 168, 212)'
  , 'pink-400'    :	'rgb(244, 114, 182)'
  , 'pink-500'    :	'rgb(236, 72, 153)'
  , 'pink-600'    :	'rgb(219, 39, 119)'
  , 'pink-700'    :	'rgb(190, 24, 93)'
  , 'pink-800'    :	'rgb(157, 23, 77)'
  , 'pink-900'    :	'rgb(131, 24, 67)'
  , 'pink-950'    :	'rgb(80, 7, 36)'
  , 'rose-50'     :	'rgb(255, 241, 242)'
  , 'rose-100'    :	'rgb(255, 228, 230)'
  , 'rose-200'    :	'rgb(254, 205, 211)'
  , 'rose-300'    :	'rgb(253, 164, 175)'
  , 'rose-400'    :	'rgb(251, 113, 133)'
  , 'rose-500'    :	'rgb(244, 63, 94)'
  , 'rose-600'    :	'rgb(225, 29, 72)'
  , 'rose-700'    :	'rgb(190, 18, 60)'
  , 'rose-800'    :	'rgb(159, 18, 57)'
  , 'rose-900'    :	'rgb(136, 19, 55)'
  , 'rose-950'    :	'rgb(76, 5, 25)'
  }
type SpacingNumberToLength = 
  { '0': '0px'
  , 'px': '1px'
  , '0.5': '0.125rem'
  , '1': '0.25rem'
  , '1.5': '0.375rem'
  , '2': '0.5rem'
  , '2.5': '0.625rem'
  , '3': '0.75rem'
  , '3.5': '0.875rem'
  , '4': '1rem'
  , '5': '1.25rem'
  , '6': '1.5rem'
  , '7': '1.75rem'
  , '8': '2rem'
  , '9': '2.25rem'
  , '10': '2.5rem'
  , '11': '2.75rem'
  , '12': '3rem'
  , '14': '3.5rem'
  , '16': '4rem'
  , '20': '5rem'
  , '24': '6rem'
  , '28': '7rem'
  , '32': '8rem'
  , '36': '9rem'
  , '40': '10rem'
  , '44': '11rem'
  , '48': '12rem'
  , '52': '13rem'
  , '56': '14rem'
  , '60': '15rem'
  , '64': '16rem'
  , '72': '18rem'
  , '80': '20rem'
  , '96': '24rem'
  }
type SizeFractionsUpto6 =
  { '1/2': '50%'
  , '1/3': '33.333333%'
  , '2/3': '66.666667%'
  , '1/4': '25%'
  , '2/4': '50%'
  , '3/4': '75%'
  , '1/5': '20%'
  , '2/5': '40%'
  , '3/5': '60%'
  , '4/5': '80%'
  , '1/6': '16.666667%'
  , '2/6': '33.333333%'
  , '3/6': '50%'
  , '4/6': '66.666667%'
  , '5/6': '83.333333%'
  }
type SizeFractions 
  = SizeFractionsUpto6 
  & { '1/12': '8.333333%'
    , '2/12': '16.666667%'
    , '3/12': '25%'
    , '4/12': '33.333333%'
    , '5/12': '41.666667%'
    , '6/12': '50%'
    , '7/12': '58.333333%'
    , '8/12': '66.666667%'
    , '9/12': '75%'
    , '10/12': '83.333333%'
    , '11/12': '91.666667%'
    }
type WidthKeywords =
  { 'auto': 'auto'
  , 'full': '100%'
  , 'screen': '100vh'
  , 'svw': '100svw'
  , 'lvw': '100lvw'
  , 'dvw': '100dvw'
  , 'min': 'min-content'
  , 'max': 'max-content'
  , 'fit': 'fit-content'
  , 'prose': '65ch'
  }

type AspectRatio<T extends string>
  = T extends `aspect-[${infer CustomValue}]`
  ? {aspectRatio: UnderscoreToSpace<CustomValue>}
  : T extends `aspect-auto`
  ? {aspectRatio: 'auto'}
  : T extends `aspect-square`
  ? {aspectRatio: '1 / 1'}
  : T extends `aspect-video`
  ? {aspectRatio: '16 / 9'}
  : T extends `aspect-${string}`
  ? {aspectRatio: string}
  : {}

type Columns<T extends string>
  = T extends `columns-[${infer Value}]`
  ? {columns: UnderscoreToSpace<Value>}
  : T extends `columns-3xs`
  ? {columns: '16rem'}
  : T extends `columns-2xs`
  ? {columns: '18rem'}
  : T extends `columns-xs`
  ? {columns: '20rem'}
  : T extends `columns-sm`
  ? {columns: '24rem'}
  : T extends `columns-md`
  ? {columns: '28rem'}
  : T extends `columns-lg`
  ? {columns: '32rem'}
  : T extends `columns-xl`
  ? {columns: '36rem'}
  : T extends `columns-2xl`
  ? {columns: '42rem'}
  : T extends `columns-3xl`
  ? {columns: '48rem'}
  : T extends `columns-4xl`
  ? {columns: '64rem'}
  : T extends `columns-auto`
  ? {columns: 'auto'}
  : T extends `columns-${infer Value extends number}`
  ? {columns: Value}
  : {}

type BreakAfter<T extends string>
  = T extends `break-after-${infer Value extends 'avoid' | 'auto' | 'all' | 'avoid-page' | 'page' | 'left' | 'right' | 'column'}`
  ? {breakAfter: Value}
  : {}

type BreakBefore<T extends string>
  = T extends `break-before-${infer Value extends 'avoid' | 'auto' | 'all' | 'avoid-page' | 'page' | 'left' | 'right' | 'column'}`
  ? {breakBefore: Value}
  : {}

type BreakInside<T extends string>
  = T extends `break-inside-${infer Value extends 'auto' | 'avoid' | 'avoid-page' | 'avoid-column'}`
  ? {breakInside: Value}
  : {}

type BoxDecorationBreak<T extends string>
  = T extends `decoration-${infer Value extends 'slice' | 'clone'}`
  ? {boxDecorationBreak: Value}
  : {}

type BoxSizing<T extends string>
  = T extends `box-${infer Value extends 'border' | 'content'}`
  ? {boxSizing: `${Value}-box`}
  : {}

type DisplayValue
  = 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'table'
  | 'inline-table'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row-group'
  | 'table-row'
  | 'flow-root'
  | 'grid'
  | 'inline-grid'
  | 'contents'
  | 'list-item'

type Display<T extends string>
  = T extends infer Value extends DisplayValue
  ? {display: Value}
  : T extends 'hidden'
  ? {display: 'none'}
  : {}

type Float<T extends string>
  = T extends `float-${infer Value extends 'start' | 'end'}`
  ? {float: `inline-${Value}`}
  : T extends `float-${infer Value extends 'right' | 'left' | 'none'}`
  ? {float: Value}
  : {}

type Clear<T extends string>
  = T extends `clear-${infer Value extends 'start' | 'end'}`
  ? {clear: `inline-${Value}`}
  : T extends `clear-${infer Value extends 'right' | 'left' | 'none'}`
  ? {clear: Value}
  : {}

type Isolation<T extends string>
  = T extends `isolation-${infer Value extends 'auto' | 'isolate'}`
  ? {isolation: Value}
  : {}

type ObjectFit<T extends string>
  = T extends `object-${infer Value extends 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'}`
  ? {objectFit: Value}
  : {}

type PositionXValue = 'left' | 'center';
type PositionYValue = 'top' | 'center';
type ObjectPosition<T extends string>
  = T extends `object-[${infer CustomValue}]`
  ? {objectPosition: UnderscoreToSpace<CustomValue>}
  : T extends `object-${infer Value extends PositionXValue | PositionYValue | 'center'}`
  ? {objectPosition: Value}
  : T extends `object-${infer ValueX extends PositionXValue}-${infer ValueY extends PositionYValue}`
  ? {objectPosition: `${ValueX} ${ValueY}`}
  : {}

type OverflowValue = 'auto' | 'hidden' | 'clip' | 'visible' | 'scroll';
type Overflow<T extends string>
  = T extends `overflow-${infer Value extends OverflowValue}`
  ? {overflow: Value}
  : T extends `overflow-x-${infer Value extends OverflowValue}`
  ? {overflowX: Value}
  : T extends `overflow-y-${infer Value extends OverflowValue}`
  ? {overflowY: Value}
  : {}

type OverscrollBehavior<T extends string>
  = T extends `overscroll-${infer Value extends 'auto' | 'contain' | 'none'}`
  ? {overscrollBehavior: Value}
  : T extends `overscroll-x-${infer Value extends 'auto' | 'contain' | 'none'}`
  ? {overscrollBehaviorX: Value}
  : T extends `overscroll-y-${infer Value extends 'auto' | 'contain' | 'none'}`
  ? {overscrollBehaviorY: Value}
  : {}

type Position<T extends string>
  = T extends infer Value extends 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky'
  ? {position: Value}
  : {}


type InsetValue
  = SpacingNumberToLength
  & { '1/2': '50%'
    , '1/3': '33.333333%'
    , '2/3': '66.666667%'
    , '1/4': '25%'
    , '2/4': '50%'
    , '3/4': '75%'
    , 'full': '100%'
    , 'auto': 'auto'
    }

type InsetValueKey = Resolve<keyof InsetValue>;
type Inset<T extends string>
  = T extends `inset-x-[${infer CustomValue}]` 
  ? { insetX: UnderscoreToSpace<CustomValue> }
  : T extends `inset-y-[${infer CustomValue}]` 
  ? { insetY: UnderscoreToSpace<CustomValue> }
  : T extends `inset-[${infer CustomValue}]`
  ? { inset: UnderscoreToSpace<CustomValue> }
  : T extends `top-[${infer CustomValue}]`
  ? { top: UnderscoreToSpace<CustomValue> }
  : T extends `right-[${infer CustomValue}]`
  ? { right: UnderscoreToSpace<CustomValue> }
  : T extends `bottom-[${infer CustomValue}]`
  ? { bottom: UnderscoreToSpace<CustomValue> }
  : T extends `left-[${infer CustomValue}]`
  ? { left: UnderscoreToSpace<CustomValue> }
  : T extends `start-[${infer CustomValue}]`
  ? { insetInlineStart: UnderscoreToSpace<CustomValue> }
  : T extends `end-[${infer CustomValue}]`
  ? { insetInlineEnd: UnderscoreToSpace<CustomValue> }
  : T extends `inset-x-${infer Value extends InsetValueKey}` 
  ? { insetX: InsetValue[Value] }
  : T extends `inset-y-${infer Value extends InsetValueKey}`
  ? { insetY: InsetValue[Value] }
  : T extends `inset-${infer Value extends InsetValueKey}`
  ? { inset: InsetValue[Value] }
  : T extends `top-${infer Value extends InsetValueKey}`
  ? { top: InsetValue[Value] }
  : T extends `right-${infer Value extends InsetValueKey}`
  ? { right: InsetValue[Value] }
  : T extends `bottom-${infer Value extends InsetValueKey}`
  ? { bottom: InsetValue[Value] }
  : T extends `left-${infer Value extends InsetValueKey}`
  ? { left: InsetValue[Value] }
  : T extends `start-${infer Value extends InsetValueKey}`
  ? { insetInlineStart: InsetValue[Value] }
  : T extends `end-${infer Value extends InsetValueKey}`
  ? { insetInlineEnd: InsetValue[Value] }
  : {}

type Visibility<T extends string>
  = T extends 'visible'
  ? {visibility: 'visible'}
  : T extends 'invisible'
  ? {visibility: 'hidden'}
  : T extends 'collapse'
  ? {visibility: 'collapse'}
  : {}

type ZIndex<T extends string>
  = T extends `z-[${infer CustomValue}]`
  ? {zIndex: CustomValue}
  : T extends `z-${infer Value extends 0 | 10 | 20 | 30 | 40 | 50 | 'auto'}`
  ? {zIndex: Value}
  : {}

type FlexBasis<T extends string>
  = T extends `basis-[${infer CustomValue}]`
  ? {flexBasis: UnderscoreToSpace<CustomValue>}
  : T extends `basis-${infer Value extends InsetValueKey}`
  ? {flexBasis: InsetValue[Value]}
  : {}

type FlexDirection<T extends string>
  = T extends 'flex-row'
  ? {flexDirection: 'row'}
  : T extends 'flex-row-reverse'
  ? {flexDirection: 'row-reverse'}
  : T extends 'flex-col'
  ? {flexDirection: 'column'}
  : T extends 'flex-col-reverse'
  ? {flexDirection: 'column-reverse'}
  : {}

type FlexWrap<T extends string>
  = T extends 'flex-wrap'
  ? {flexWrap: 'wrap'}
  : T extends 'flex-wrap-reverse'
  ? {flexWrap: 'wrap-reverse'}
  : T extends 'flex-nowrap'
  ? {flexWrap: 'nowrap'}
  : {}

type Flex<T extends string>
  = T extends `flex-[${infer CustomValue}]`
  ? {flex: UnderscoreToSpace<CustomValue>}
  : T extends `flex-1`
  ? {flex: '1 1 0%'}
  : T extends `flex-auto`
  ? {flex: '1 1 auto'}
  : T extends `flex-initial`
  ? {flex: '0 1 auto'}
  : T extends `flex-none`
  ? {flex: 'none'}
  : {}

type FlexGrow<T extends string>
  = T extends `grow-[${infer CustomValue}]`
  ? {flexGrow: UnderscoreToSpace<CustomValue>}
  : T extends `grow`
  ? {flexGrow: '1'}
  : T extends `grow-0`
  ? {flexGrow: '0'}
  : {}

type FlexShrink<T extends string>
  = T extends `shrink-[${infer CustomValue}]`
  ? {flexShrink: UnderscoreToSpace<CustomValue>}
  : T extends `shrink`
  ? {flexShrink: '1'}
  : T extends `shrink-0`
  ? {flexShrink: '0'}
  : {}

type FlexOrder<T extends string>
  = T extends `order-[${infer CustomValue}]`
  ? {order: UnderscoreToSpace<CustomValue>}
  : T extends `order-first`
  ? {order: '-9999'}
  : T extends `order-last`
  ? {order: '9999'}
  : T extends `order-none`
  ? {order: '0'}
  : T extends `order-${infer Value extends number}`
  ? {order: Value}
  : {}

type GridTemplateColumns<T extends string>
  = T extends `grid-cols-[${infer CustomValue}]`
  ? {gridTemplateColumns: UnderscoreToSpace<CustomValue>}
  : T extends `grid-cols-none`
  ? {gridTemplateColumns: 'none'}
  : T extends `grid-cols-subgrid`
  ? {gridTemplateColumns: 'subgrid'}
  : T extends `grid-cols-${infer Value extends number}`
  ? {gridTemplateColumns: `repeat(${Value}, minmax(0, 1fr))`}
  : {}

type GridColumnStart<T extends string>
  = T extends `col-start-[${infer CustomValue}]`
  ? {gridColumnStart: UnderscoreToSpace<CustomValue>}
  : T extends `col-start-auto`
  ? {gridColumnStart: 'auto'}
  : T extends `col-start-span-${infer Value extends number}`
  ? {gridColumnStart: Value}
  : {}

type GridColumnEnd<T extends string>
  = T extends `col-end-[${infer CustomValue}]`
  ? {gridColumnEnd: UnderscoreToSpace<CustomValue>}
  : T extends `col-end-auto`
  ? {gridColumnEnd: 'auto'}
  : T extends `col-end-span-${infer Value extends number}`
  ? {gridColumnEnd: Value}
  : {}

type GridColumnSpan<T extends string>
  = T extends `col-span-${infer Value extends number}`
  ? {gridColumn: `span ${Value} / span ${Value}`}
  : T extends `col-span-full`
  ? {gridColumn: '1 / -1'}
  : {}

type GridColumn<T extends string>
  = T extends `col-[${infer CustomValue}]`
  ? {gridColumn: UnderscoreToSpace<CustomValue>}
  : T extends `col-auto`
  ? {gridColumn: 'auto'}
  : {}

type GridTemplateRows<T extends string>
  = T extends `grid-rows-[${infer CustomValue}]`
  ? {gridTemplateRows: UnderscoreToSpace<CustomValue>}
  : T extends `grid-rows-none`
  ? {gridTemplateRows: 'none'}
  : T extends `grid-rows-subgrid`
  ? {gridTemplateRows: 'subgrid'}
  : T extends `grid-rows-${infer Value extends number}`
  ? {gridTemplateRows: `repeat(${Value}, minmax(0, 1fr))`}
  : {}

type GridRowStart<T extends string>
  = T extends `row-start-[${infer CustomValue}]`
  ? {gridRowStart: UnderscoreToSpace<CustomValue>}
  : T extends `row-start-auto`
  ? {gridRowStart: 'auto'}
  : T extends `row-start-span-${infer Value extends number}`
  ? {gridRowStart: Value}
  : {}

type GridRowEnd<T extends string>
  = T extends `row-end-[${infer CustomValue}]`
  ? {gridRowEnd: UnderscoreToSpace<CustomValue>}
  : T extends `row-end-auto`
  ? {gridRowEnd: 'auto'}
  : T extends `row-end-span-${infer Value extends number}`
  ? {gridRowEnd: Value}
  : {}

type GridRowSpan<T extends string>
  = T extends `row-span-${infer Value extends number}`
  ? {gridRow: `span ${Value} / span ${Value}`}
  : T extends `row-span-full`
  ? {gridRow: '1 / -1'}
  : {}

type GridRow<T extends string>
  = T extends `row-[${infer CustomValue}]`
  ? {gridRow: UnderscoreToSpace<CustomValue>}
  : T extends `row-auto`
  ? {gridRow: 'auto'}
  : {}

type GridAutoFlow<T extends string>
  = T extends `grid-flow-row`
  ? {gridAutoFlow: 'row'}
  : T extends `grid-flow-col`
  ? {gridAutoFlow: 'column'}
  : T extends `grid-flow-dense`
  ? {gridAutoFlow: 'dense'}
  : T extends `grid-flow-row-dense`
  ? {gridAutoFlow: 'row dense'}
  : T extends `grid-flow-col-dense`
  ? {gridAutoFlow: 'column dense'}
  : {}

type GridAutoColumns<T extends string>
  = T extends `auto-cols-[${infer CustomValue}]`
  ? {gridAutoColumns: UnderscoreToSpace<CustomValue>}
  : T extends `auto-cols-auto`
  ? {gridAutoColumns: 'auto'}
  : T extends `auto-cols-min`
  ? {gridAutoColumns: 'min-content'}
  : T extends `auto-cols-max`
  ? {gridAutoColumns: 'max-content'}
  : T extends `auto-cols-fr`
  ? {gridAutoColumns: 'minmax(0, 1fr)'}
  : {}

type GridAutoRows<T extends string>
  = T extends `auto-rows-[${infer CustomValue}]`
  ? {gridAutoRows: UnderscoreToSpace<CustomValue>}
  : T extends `auto-rows-auto`
  ? {gridAutoRows: 'auto'}
  : T extends `auto-rows-min`
  ? {gridAutoRows: 'min-content'}
  : T extends `auto-rows-max`
  ? {gridAutoRows: 'max-content'}
  : T extends `auto-rows-fr`
  ? {gridAutoRows: 'minmax(0, 1fr)'}
  : {}

type Gap<T extends string>
  = T extends `gap-[${infer CustomValue}]`
  ? {gap: UnderscoreToSpace<CustomValue>}
  : T extends `gap-${infer Value extends keyof SpacingNumberToLength}`
  ? {gap: SpacingNumberToLength[Value]}
  : {}

type RowGap<T extends string>
  = T extends `gap-y-[${infer CustomValue}]`
  ? {rowGap: UnderscoreToSpace<CustomValue>}
  : T extends `gap-y-${infer Value extends keyof SpacingNumberToLength}`
  ? {rowGap: SpacingNumberToLength[Value]}
  : {}

type ColumnGap<T extends string>
  = T extends `gap-x-[${infer CustomValue}]`
  ? {columnGap: UnderscoreToSpace<CustomValue>}
  : T extends `gap-x-${infer Value extends keyof SpacingNumberToLength}`
  ? {columnGap: SpacingNumberToLength[Value]}
  : {}

type JustifyContent<T extends string>
  = T extends `justify-${infer Value extends 'normal' | 'center' | 'stretch' }`
  ? {justifyContent: Value}
  : T extends `justify-${infer Value extends 'start' | 'end'}`
  ? {justifyContent: `flex-${Value}`}
  : T extends `justify-${infer Value extends 'between' | 'around' | 'evenly'}`
  ? {justifyContent: `space-${Value}`}
  : {}

type JustifyItems<T extends string>
  = T extends `justify-items-${infer Value extends 'start' | 'end' | 'center' | 'stretch'}`
  ? {justifyItems: Value}
  : {}

type JustifySelf<T extends string>
  = T extends `justify-self-${infer Value extends 'auto' | 'start' | 'end' | 'center' | 'stretch'}`
  ? {justifySelf: Value}
  : {}

type AlignContent<T extends string>
  = T extends `content-${infer Value extends 'normal' | 'center' | 'stretch' }`
  ? {alignContent: Value}
  : T extends `content-${infer Value extends 'start' | 'end'}`
  ? {alignContent: `flex-${Value}`}
  : T extends `content-${infer Value extends 'between' | 'around' | 'evenly'}`
  ? {alignContent: `space-${Value}`}
  : {}

type AlignItems<T extends string>
  = T extends `items-${infer Value extends 'center' | 'baseline' | 'stretch'}`
  ? {alignItems: Value}
  : T extends `items-${infer Value extends 'start' | 'end'}`
  ? {alignItems: `flex-${Value}`}
  : {}

type AlignSelf<T extends string>
  = T extends `self-${infer Value extends 'auto' | 'baseline' | 'center' | 'stretch'}`
  ? {alignSelf: Value}
  : T extends `self-${infer Value extends 'start' | 'end'}`
  ? {alignSelf: `flex-${Value}`}
  : {}

type PlaceContent<T extends string>
  = T extends `place-content-${infer Value extends 'center' | 'start' | 'end' | 'baseline' | 'stretch'}`
  ? {placeContent: Value}
  : T extends `place-content-${infer Value extends 'between' | 'around' | 'evenly'}`
  ? {placeContent: `space-${Value}`}
  : {}

type PlaceItems<T extends string>
  = T extends `place-items-${infer Value extends 'center' | 'start' | 'end' | 'baseline' | 'stretch'}`
  ? {placeItems: Value}
  : {}

type PlaceSelf<T extends string>
  = T extends `place-self-${infer Value extends 'auto' | 'center' | 'start' | 'end' | 'stretch'}`
  ? {placeSelf: Value}
  : {}

type Padding<T extends string>
  = T extends `p-[${infer CustomValue}]`
  ? {padding: UnderscoreToSpace<CustomValue>}
  : T extends `p-${infer Value extends keyof SpacingNumberToLength}`
  ? {padding: SpacingNumberToLength[Value]}
  : {}

type PaddingTop<T extends string>
  = T extends `pt-[${infer CustomValue}]`
  ? {paddingTop: UnderscoreToSpace<CustomValue>}
  : T extends `pt-${infer Value extends keyof SpacingNumberToLength}`
  ? {paddingTop: SpacingNumberToLength[Value]}
  : {}

type PaddingRight<T extends string>
  = T extends `pr-[${infer CustomValue}]`
  ? {paddingRight: UnderscoreToSpace<CustomValue>}
  : T extends `pr-${infer Value extends keyof SpacingNumberToLength}`
  ? {paddingRight: SpacingNumberToLength[Value]}
  : {}

type PaddingBottom<T extends string>
  = T extends `pb-[${infer CustomValue}]`
  ? {paddingBottom: UnderscoreToSpace<CustomValue>}
  : T extends `pb-${infer Value extends keyof SpacingNumberToLength}`
  ? {paddingBottom: SpacingNumberToLength[Value]}
  : {}

type PaddingLeft<T extends string>
  = T extends `pl-[${infer CustomValue}]`
  ? {paddingLeft: UnderscoreToSpace<CustomValue>}
  : T extends `pl-${infer Value extends keyof SpacingNumberToLength}`
  ? {paddingLeft: SpacingNumberToLength[Value]}
  : {}

type PaddingInlineStart<T extends string>
  = T extends `ps-[${infer CustomValue}]`
  ? {paddingInlineStart: UnderscoreToSpace<CustomValue>}
  : T extends `ps-${infer Value extends keyof SpacingNumberToLength}`
  ? {paddingInlineStart: SpacingNumberToLength[Value]}
  : {}

type PaddingInlineEnd<T extends string>
  = T extends `pe-[${infer CustomValue}]`
  ? {paddingInlineEnd: UnderscoreToSpace<CustomValue>}
  : T extends `pe-${infer Value extends keyof SpacingNumberToLength}`
  ? {paddingInlineEnd: SpacingNumberToLength[Value]}
  : {}

type PaddingInline<T extends string>
  = T extends `px-[${infer CustomValue}]`
  ? {paddingInline: UnderscoreToSpace<CustomValue>}
  : T extends `px-${infer Value extends keyof SpacingNumberToLength}`
  ? {paddingInline: SpacingNumberToLength[Value]}
  : {}

type PaddingBlock<T extends string>
  = T extends `py-[${infer CustomValue}]`
  ? {paddingBlock: UnderscoreToSpace<CustomValue>}
  : T extends `py-${infer Value extends keyof SpacingNumberToLength}`
  ? {paddingBlock: SpacingNumberToLength[Value]}
  : {}

type Margin<T extends string>
  = T extends `m-[${infer CustomValue}]`
  ? {margin: UnderscoreToSpace<CustomValue>}
  : T extends `m-auto`
  ? {margin: 'auto'}
  : T extends `m-${infer Value extends keyof SpacingNumberToLength}`
  ? {margin: SpacingNumberToLength[Value]}
  : {}

type MarginTop<T extends string>
  = T extends `mt-[${infer CustomValue}]`
  ? {marginTop: UnderscoreToSpace<CustomValue>}
  : T extends `mt-auto`
  ? {marginTop: 'auto'}
  : T extends `mt-${infer Value extends keyof SpacingNumberToLength}`
  ? {marginTop: SpacingNumberToLength[Value]}
  : {}

type MarginRight<T extends string>
  = T extends `mr-[${infer CustomValue}]`
  ? {marginRight: UnderscoreToSpace<CustomValue>}
  : T extends `mr-auto`
  ? {marginRight: 'auto'}
  : T extends `mr-${infer Value extends keyof SpacingNumberToLength}`
  ? {marginRight: SpacingNumberToLength[Value]}
  : {}

type MarginBottom<T extends string>
  = T extends `mb-[${infer CustomValue}]`
  ? {marginBottom: UnderscoreToSpace<CustomValue>}
  : T extends `mb-auto`
  ? {marginBottom: 'auto'}
  : T extends `mb-${infer Value extends keyof SpacingNumberToLength}`
  ? {marginBottom: SpacingNumberToLength[Value]}
  : {}

type MarginLeft<T extends string>
  = T extends `ml-[${infer CustomValue}]`
  ? {marginLeft: UnderscoreToSpace<CustomValue>}
  : T extends `ml-auto`
  ? {marginLeft: 'auto'}
  : T extends `ml-${infer Value extends keyof SpacingNumberToLength}`
  ? {marginLeft: SpacingNumberToLength[Value]}
  : {}

type MarginInlineStart<T extends string>
  = T extends `ms-[${infer CustomValue}]`
  ? {marginInlineStart: UnderscoreToSpace<CustomValue>}
  : T extends `ms-auto`
  ? {marginInlineStart: 'auto'}
  : T extends `ms-${infer Value extends keyof SpacingNumberToLength}`
  ? {marginInlineStart: SpacingNumberToLength[Value]}
  : {}

type MarginInlineEnd<T extends string>
  = T extends `me-[${infer CustomValue}]`
  ? {marginInlineEnd: UnderscoreToSpace<CustomValue>}
  : T extends `me-auto`
  ? {marginInlineEnd: 'auto'}
  : T extends `me-${infer Value extends keyof SpacingNumberToLength}`
  ? {marginInlineEnd: SpacingNumberToLength[Value]}
  : {}

type MarginInline<T extends string>
  = T extends `mx-[${infer CustomValue}]`
  ? {marginInline: UnderscoreToSpace<CustomValue>}
  : T extends `mx-auto`
  ? {marginInline: 'auto'}
  : T extends `mx-${infer Value extends keyof SpacingNumberToLength}`
  ? {marginInline: SpacingNumberToLength[Value]}
  : {}

type MarginBlock<T extends string>
  = T extends `my-[${infer CustomValue}]`
  ? {marginBlock: UnderscoreToSpace<CustomValue>}
  : T extends `my-auto`
  ? {marginBlock: 'auto'}
  : T extends `my-${infer Value extends keyof SpacingNumberToLength}`
  ? {marginBlock: SpacingNumberToLength[Value]}
  : {}

// Type Space Between intentionally omitted. We want to explicitly discourage its use.

type Width<T extends string>
  = T extends `w-[${infer CustomValue}]`
  ? {width: UnderscoreToSpace<CustomValue>}
  : T extends `w-${infer Value extends keyof WidthKeywords}`
  ? {width: WidthKeywords[Value]}
  : T extends `w-${infer Value extends keyof SizeFractions}`
  ? {width: SizeFractions[Value]}
  : T extends `w-${infer Value extends keyof SpacingNumberToLength}`
  ? {width: SpacingNumberToLength[Value]}
  : {}

type MinWidth<T extends string>
  = T extends `min-w-[${infer CustomValue}]`
  ? {minWidth: UnderscoreToSpace<CustomValue>}
  : T extends `min-w-${infer Value extends keyof SpacingNumberToLength}`
  ? {minWidth: SpacingNumberToLength[Value]}
  : T extends `min-w-full`
  ? {minWidth: '100%'}
  : T extends `min-w-${infer Value extends 'min' | 'max' | 'fit'}`
  ? {minWidth: `${Value}-content`}
  : {}

type SizeClassValues =
  { 'xs' : '20rem'
  , 'sm' : '24rem'
  , 'md' : '28rem'
  , 'lg' : '32rem'
  , 'xl' : '36rem'
  , '2xl': '42rem'
  , '3xl': '48rem'
  , '4xl': '56rem'
  , '5xl': '64rem'
  , '6xl': '72rem'
  , '7xl': '80rem'
  }
type MaxWidth<T extends string>
  = T extends `max-w-[${infer CustomValue}]`
  ? {maxWidth: UnderscoreToSpace<CustomValue>}
  : T extends `max-w-${infer Value extends keyof SpacingNumberToLength}`
  ? {maxWidth: SpacingNumberToLength[Value]}
  : T extends `max-w-${infer Value extends keyof SizeClassValues}`
  ? {maxWidth: SizeClassValues[Value]}
  : T extends `max-w-full`
  ? {maxWidth: '100%'}
  : T extends `max-w-none`
  ? {maxWidth: 'none'}
  : T extends `max-w-${infer Value extends 'min' | 'max' | 'fit'}`
  ? {maxWidth: `${Value}-content`}
  : T extends `max-w-prose`
  ? {maxWidth: '65ch'}
  : T extends `max-w-screen-sm`
  ? {maxWidth: '640px'}
  : T extends `max-w-screen-md`
  ? {maxWidth: '768px'}
  : T extends `max-w-screen-lg`
  ? {maxWidth: '1024px'}
  : T extends `max-w-screen-xl`
  ? {maxWidth: '1280px'}
  : T extends `max-w-screen-2xl`
  ? {maxWidth: '1536px'}
  : {}

type Height<T extends string>
  = T extends `h-[${infer CustomValue}]`
  ? {height: UnderscoreToSpace<CustomValue>}
  : T extends `h-${infer Value extends keyof SpacingNumberToLength}`
  ? {height: SpacingNumberToLength[Value]}
  : T extends `h-${infer Value extends keyof SizeFractionsUpto6}`
  ? {height: SizeFractionsUpto6[Value]}
  : T extends `h-auto`
  ? {height: 'auto'}
  : T extends `h-full`
  ? {height: '100%'}
  : T extends `h-screen`
  ? {height: '100vh'}
  : T extends `h-${infer Value extends 'min' | 'max' | 'fit'}`
  ? {height: `${Value}-content`}
  : T extends `h-${infer Value extends 'svh' | 'lvh' | 'dvh'}`
  ? {height: `100${Value}`}
  : {}

type MinHeight<T extends string>
  = T extends `min-h-[${infer CustomValue}]`
  ? {minHeight: UnderscoreToSpace<CustomValue>}
  : T extends `min-h-${infer Value extends keyof SpacingNumberToLength}`
  ? {minHeight: SpacingNumberToLength[Value]}
  : T extends `min-h-full`
  ? {minHeight: '100%'}
  : T extends `min-h-screen`
  ? {minHeight: '100vh'}
  : T extends `min-h-${infer Value extends 'min' | 'max' | 'fit'}`
  ? {minHeight: `${Value}-content`}
  : T extends `min-h-${infer Value extends 'svh' | 'lvh' | 'dvh'}`
  ? {minHeight: `100${Value}`}
  : {}

type MaxHeight<T extends string>
  = T extends `max-h-[${infer CustomValue}]`
  ? {maxHeight: UnderscoreToSpace<CustomValue>}
  : T extends `max-h-${infer Value extends keyof SpacingNumberToLength}`
  ? {maxHeight: SpacingNumberToLength[Value]}
  : T extends `max-h-none`
  ? {maxHeight: 'none'}
  : T extends `max-h-full`
  ? {maxHeight: '100%'}
  : T extends `max-h-screen`
  ? {maxHeight: '100vh'}
  : T extends `max-h-${infer Value extends 'min' | 'max' | 'fit'}`
  ? {maxHeight: `${Value}-content`}
  : T extends `max-h-${infer Value extends 'svh' | 'lvh' | 'dvh'}`
  ? {maxHeight: `100${Value}`}
  : {}

type Size<T extends string>
  = T extends `size-[${infer CustomValue}]`
  ? {width: UnderscoreToSpace<CustomValue>, height: UnderscoreToSpace<CustomValue>}
  : T extends `size-${infer Value extends keyof SpacingNumberToLength}`
  ? {width: SpacingNumberToLength[Value], height: SpacingNumberToLength[Value]}
  : T extends `size-${infer Value extends keyof SizeFractions}`
  ? {width: SizeFractions[Value], height: SizeFractions[Value]}
  : T extends `size-${infer Value extends 'min' | 'max' | 'fit'}`
  ? {width: `${Value}-content`, height: `${Value}-content`}
  : T extends `size-full`
  ? {width: '100%', height: '100%'}
  : T extends `size-auto`
  ? {width: 'auto', height: 'auto'}
  : {}

type Font<T extends string>
  = T extends `font-[${infer Value}]`
  ? {font: UnderscoreToSpace<Value>}
  : T extends `font-${infer Value extends 'sans' | 'serif' | 'mono'}`
  ? {font: string} // We don't want to deal with mroe exact values here
  : {}

type FontSizeValue =
  { 'xs' : '0.75rem'
  , 'sm' : '0.875rem'
  , 'base': '1rem'
  , 'lg' : '1.125rem'
  , 'xl' : '1.25rem'
  , '2xl': '1.5rem'
  , '3xl': '1.875rem'
  , '4xl': '2.25rem'
  , '5xl': '3rem'
  , '6xl': '4rem'
  , '7xl': '5rem'
  , '8xl': '6rem'
  , '9xl': '8rem'
  }
type LineHeightValue =
  { 'xs' : '1rem'
  , 'sm' : '1.25rem'
  , 'base': '1.5rem'
  , 'lg' : '1.75rem'
  , 'xl' : '1.75rem'
  , '2xl': '2rem'
  , '3xl': '2.25rem'
  , '4xl': '2.5rem'
  , '5xl': '1'
  , '6xl': '1'
  , '7xl': '1'
  , '8xl': '1'
  , '9xl': '1'
  }
type FontSize<T extends string>
  = T extends `text-[${infer CustomValue}]`
  ? {fontSize: UnderscoreToSpace<CustomValue>}
  : T extends `text-${infer Value extends keyof FontSizeValue}`
  ? {fontSize: FontSizeValue[Value], lineHeight: LineHeightValue[Value]}
  : {}

type FontSmoothing<T extends string>
  = T extends 'antialiased'
  ? {WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale'}
  : T extends 'subpixel-antialiased'
  ? {WebkitFontSmoothing: 'auto', MozOsxFontSmoothing: 'auto'}
  : {}

type FontStyle<T extends string>
  = T extends 'italic'
  ? {fontStyle: 'italic'}
  : T extends 'not-italic'
  ? {fontStyle: 'normal'}
  : {}

type FontWeightValue =
  { 'thin' : '100'
  , 'extralight' : '200'
  , 'light' : '300'
  , 'normal' : '400'
  , 'medium' : '500'
  , 'semibold' : '600'
  , 'bold' : '700'
  , 'extrabold' : '800'
  , 'black' : '900'
  }
type FontWeight<T extends string>
  = T extends `font-${infer Value extends keyof FontWeightValue}`
  ? {fontWeight: FontWeightValue[Value]}
  : {}

type FontVariantNumeric<T extends string>
  = T extends 'normal-nums'
  ? {fontVariantNumeric: 'normal'}
  : T extends 'ordinal'
  ? {fontVariantNumeric: 'ordinal'}
  : T extends 'slashed-zero'
  ? {fontVariantNumeric: 'slashed-zero'}
  : T extends 'lining-nums'
  ? {fontVariantNumeric: 'lining-nums'}
  : T extends 'oldstyle-nums'
  ? {fontVariantNumeric: 'oldstyle-nums'}
  : T extends 'proportional-nums'
  ? {fontVariantNumeric: 'proportional-nums'}
  : T extends 'tabular-nums'
  ? {fontVariantNumeric: 'tabular-nums'}
  : T extends 'diagonal-fractions'
  ? {fontVariantNumeric: 'diagonal-fractions'}
  : T extends 'stacked-fractions'
  ? {fontVariantNumeric: 'stacked-fractions'}
  : {}

type LetterSpacingValue =
  { 'tighter' : '-0.05em'
  , 'tight' : '-0.025em'
  , 'normal' : '0em'
  , 'wide' : '0.025em'
  , 'wider' : '0.05em'
  , 'widest' : '0.1em'
  }
type LetterSpacing<T extends string>
  = T extends `tracking-[${infer CustomValue}]`
  ? {letterSpacing: UnderscoreToSpace<CustomValue>}
  : T extends `tracking-${infer Value extends keyof LetterSpacingValue}`
  ? {letterSpacing: LetterSpacingValue[Value]}
  : {}

type LineClamp<T extends string>
  = T extends `clamp-[${infer Value extends number}]`
  ? {overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: Value}
  : T extends `clamp-none`
  ? {overflow: 'visible', display: 'block', WebkitBoxOrient: 'horizontal', WebkitLineClamp: 'none'}
  : T extends `clamp-${infer Value extends '1' | '2' | '3' | '4' | '5' | '6'}`
  ? {overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: Value}
  : {}

type LineHeightValue =
  { 'none'   : '1'
  , 'tight'  : '1.25'
  , 'snug'   : '1.375'
  , 'normal' : '1.5'
  , 'relaxed': '1.625'
  , 'loose'  : '2'
  , '3'      : '0.75rem'
  , '4'      : '1rem'
  , '5'      : '1.25rem'
  , '6'      : '1.5rem'
  , '7'      : '1.75rem'
  , '8'      : '2rem'
  , '9'      : '2.25rem'
  , '10'     : '2.5rem'
  }
type LineHeight<T extends string>
  = T extends `leading-[${infer CustomValue}]`
  ? {lineHeight: UnderscoreToSpace<CustomValue>}
  : T extends `leading-${infer Value extends keyof LineHeightValue}`
  ? {lineHeight: LineHeightValue[Value]}
  : {}

type ListStyleImage<T extends string>
  = T extends `list-image-[${infer CustomValue}]`
  ? {listStyleImage: UnderscoreToSpace<CustomValue>}
  : T extends `list-image-none`
  ? {listStyleImage: 'none'}
  : {}

type ListStylePosition<T extends string>
  = T extends `list-${infer Value extends 'inside' | 'outside'}`
  ? {listStylePosition: Value}
  : {}

type ListStyleType<T extends string>
  = T extends `list-[${infer CustomValue}]`
  ? {listStyleType: UnderscoreToSpace<CustomValue>}
  : T extends `list-${infer Value extends 'none' | 'disc' | 'decimal'}`
  ? {listStyleType: Value}
  : {}

type TextAlignOrColor<T extends string>
  = T extends `text-${infer Value extends 'left' | 'center' | 'right' | 'justify' | 'start' | 'end'}`
  ? {textAlign: Value}
  : T extends `text-${infer Value extends 'inherit' | 'transparent'}`
  ? {color: Value}
  : T extends `text-current`
  ? {color: 'currentColor'}
  : T extends `text-${infer _Value}`
  ? {color: string} // too many colors to list
  : {}

type TextDecoration<T extends string>
  = T extends infer Value extends 'underline' | 'line-through' | 'overline'
  ? {textDecoration: Value}
  : T extends `no-underline`
  ? {textDecoration: 'none'}
  : {}

type TextDecorationColor<T extends string>
  = T extends `decoration-${infer Value extends 'inherit' | 'transparent'}`
  ? {textDecorationColor: Value}
  : T extends `decoration-current`
  ? {textDecorationColor: 'currentColor'}
  : T extends `decoration-${infer _Value}`
  ? {textDecorationColor: string} // too many colors to list
  : {}

type TextDecorationStyle<T extends string>
  = T extends `decoration-${infer Value extends 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy'}`
  ? {textDecorationStyle: Value}
  : {}

type TextDecorationThickness<T extends string>
  = T extends `decoration-[${infer CustomValue}]`
  ? {textDecorationThickness: UnderscoreToSpace<CustomValue>}
  : T extends `decoration-${infer Value extends 'auto' | 'from-font'}`
  ? {textDecorationThickness: Value}
  : T extends `decoration-${infer Value extends '0' | '1' | '2' | '4' | '8'}`
  ? {textDecorationThickness: `${Value}px`}
  : {}

type TextUnderlineOffset<T extends string>
  = T extends `underline-offset-[${infer CustomValue}]`
  ? {textUnderlineOffset: UnderscoreToSpace<CustomValue>}
  : T extends `underline-offset-auto`
  ? {textUnderlineOffset: 'auto'}
  : T extends `underline-offset-${infer Value extends '0' | '2' | '4' | '8'}`
  ? {textUnderlineOffset: `${Value}px`}
  : {}

type TextTransform<T extends string>
  = T extends 'uppercase' | 'lowercase' | 'capitalize'
  ? {textTransform: T}
  : T extends 'normal-case'
  ? {textTransform: 'none'}
  : {}

type TextOverflow<T extends string>
  = T extends 'truncate'
  ? {overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}
  : T extends `text-${infer Value extends 'ellipsis' | 'clip'}`
  ? {textOverflow: Value}
  : {}

type TextWrap<T extends string>
  = T extends 'wrap' | 'nowrap' | 'balance' | 'pretty'
  ? {textWrap: T}
  : {}

type TextIndent<T extends string>
  = T extends `indent-[${infer CustomValue}]`
  ? {textIndent: UnderscoreToSpace<CustomValue>}
  : T extends `indent-${infer Value extends keyof SpacingNumberToLength}`
  ? {textIndent: SpacingNumberToLength[Value]}
  : {}

type VerticalAlign<T extends string>
  = T extends `align-[${infer CustomValue}]`
  ? {verticalAlign: UnderscoreToSpace<CustomValue>}
  : T extends `align-${infer Value extends 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom' | 'sub' | 'super'}`
  ? {verticalAlign: Value}
  : {}

type Whitespace<T extends string>
  = T extends `whitespace-${infer Value extends 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap' | 'break-spaces'}`
  ? {whiteSpace: Value}
  : {}

type WordBreakValue =
  { 'all'   : 'break-all'
  , 'keep'  : 'keep-all'
  }
type WordBreak<T extends string>
  = T extends `break-normal`
  ? {wordBreak: 'normal', overflowWrap: 'normal'}
  : T extends `break-words`
  ? {overflowWrap: 'break-word'}
  : T extends `break-${infer Value extends keyof WordBreakValue}`
  ? {wordBreak: WordBreakValue[Value]}
  : {}

type Hyphens<T extends string>
  = T extends `hyphens-${infer Value extends 'none' | 'manual' | 'auto'}`
  ? {hyphens: Value}
  : {}

type BackgroundAttachment<T extends string>
  = T extends `bg-attachment-${infer Value extends 'fixed' | 'local' | 'scroll'}`
  ? {backgroundAttachment: Value}
  : {}

type BackgroundClip<T extends string>
  = T extends `bg-clip-${infer Value extends 'border' | 'padding' | 'content'}`
  ? {backgroundClip: `${Value}-box`}
  : T extends `bg-clip-text`
  ? {backgroundClip: 'text'}
  : {}

type BackgroundColor<T extends string>
  = T extends `bg-[${infer CustomValue}]`
  ? {backgroundColor: UnderscoreToSpace<CustomValue>}
  : T extends `bg-${infer Value extends 'inherit' | 'transparent'}`
  ? {backgroundColor: Value}
  : T extends `bg-current`
  ? {backgroundColor: 'currentColor'}
  : T extends `bg-${string}`
  ? {backgroundColor: string} // too many colors to list
  : {}

type BackgroundOrigin<T extends string>
  = T extends `bg-origin-${infer Value extends 'border' | 'padding' | 'content'}`
  ? {backgroundOrigin: `${Value}-box`}
  : {}

type BackgroundPosition<T extends string>
  = T extends `bg-[${infer CustomValue}]`
  ? {background: UnderscoreToSpace<CustomValue>}
  : T extends `bg-${infer Value extends PositionXValue | PositionYValue}`
  ? {backgroundPosition: Value}
  : T extends `bg-${infer Value extends PositionXValue}-${infer Value2 extends PositionYValue}`
  ? {backgroundPosition: `${Value} ${Value2}`}
  : T extends `bg-center`
  ? {backgroundPosition: 'center'}
  : {}

type BackgroundRepeat<T extends string>
  = T extends `bg-${infer Value extends 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y'}`
  ? {backgroundRepeat: Value}
  : T extends `bg-repeat-${infer Value extends 'round' | 'space'}`
  ? {backgroundRepeat: Value}
  : {}

type BackgroundSize<T extends string>
  = T extends `bg-[length:${infer CustomValue}]`
  ? {backgroundSize: UnderscoreToSpace<CustomValue>}
  : T extends `bg-${infer Value extends 'auto' | 'cover' | 'contain'}`
  ? {backgroundSize: Value}
  : {}

type BackgroundImage<T extends string>
  = T extends `bg-[url(${infer CustomValue})]`
  ? {backgroundImage: `url(${UnderscoreToSpace<CustomValue>})`}
  : T extends `bg-none`
  ? {backgroundImage: 'none'}
  : T extends `bg-gradient-to-${'t' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl'}`
  ? {backgroundImage: string} // too many gradients to list
  : {}


type BorderWidthOrColor<T extends string>
  = T extends `border-[${infer CustomValue}]`
  ? {borderWidth: UnderscoreToSpace<CustomValue>}
  : T extends `border-${infer Value extends 2 | 4 | 8}`
  ? {borderWidth: Value}
  : T extends `border-${infer Value extends keyof ColorValues}`
  ? {borderColor: ColorValues[Value]}
  : T extends 'border'
  ? {borderWidth: 1}
  : T extends `border-x-[${infer CustomValue}]`
  ? {borderInlineWidth: UnderscoreToSpace<CustomValue>}
  : T extends `border-x-${infer Value extends 2 | 4 | 8}`
  ? {borderInlineWidth: Value}
  : T extends `border-x-${infer Value extends keyof ColorValues}`
  ? {borderInlineColor: ColorValues[Value]}
  : T extends 'border-x'
  ? {borderInlineWidth: 1}
  : T extends `border-y-[${infer CustomValue}]`
  ? {borderBlockWidth: UnderscoreToSpace<CustomValue>}
  : T extends `border-y-${infer Value extends 2 | 4 | 8}`
  ? {borderBlockWidth: Value}
  : T extends `border-y-${infer Value extends keyof ColorValues}`
  ? {borderBlockColor: ColorValues[Value]}
  : T extends 'border-y'
  ? {borderBlockWidth: 1}
  : T extends `border-s-[${infer CustomValue}]`
  ? {borderInlineStartWidth: UnderscoreToSpace<CustomValue>}
  : T extends `border-e-[${infer CustomValue}]`
  ? {borderInlineEndWidth: UnderscoreToSpace<CustomValue>}
  : T extends `border-s-${infer Value extends 2 | 4 | 8}`
  ? {borderInlineStartWidth: Value}
  : T extends `border-s-${infer Value extends keyof ColorValues}`
  ? {borderInlineStartColor: ColorValues[Value]}
  : T extends `border-e-${infer Value extends 2 | 4 | 8}`
  ? {borderInlineEndWidth: Value}
  : T extends `border-e-${infer Value extends keyof ColorValues}`
  ? {borderInlineEndColor: ColorValues[Value]}
  : T extends 'border-s'
  ? {borderInlineStartWidth: 1}
  : T extends 'border-e'
  ? {borderInlineEndWidth: 1}
  : T extends `border-t-[${infer CustomValue}]`
  ? {borderTopWidth: UnderscoreToSpace<CustomValue>}
  : T extends `border-t-${infer Value extends 2 | 4 | 8}`
  ? {borderTopWidth: Value}
  : T extends `border-t-${infer Value extends keyof ColorValues}`
  ? {borderTopColor: ColorValues[Value]}
  : T extends `border-r-[${infer CustomValue}]`
  ? {borderRightWidth: UnderscoreToSpace<CustomValue>}
  : T extends `border-r-${infer Value extends 2 | 4 | 8}`
  ? {borderRightWidth: Value}
  : T extends `border-r-${infer Value extends keyof ColorValues}`
  ? {borderRightColor: ColorValues[Value]}
  : T extends 'border-r'
  ? {borderRightWidth: 1}
  : T extends `border-b-[${infer CustomValue}]`
  ? {borderBottomWidth: UnderscoreToSpace<CustomValue>}
  : T extends `border-b-${infer Value extends 2 | 4 | 8}`
  ? {borderBottomWidth: Value}
  : T extends `border-b-${infer Value extends keyof ColorValues}`
  ? {borderBottomColor: ColorValues[Value]}
  : T extends 'border-b'
  ? {borderBottomWidth: 1}
  : T extends `border-l-[${infer CustomValue}]`
  ? {borderLeftWidth: UnderscoreToSpace<CustomValue>}
  : T extends `border-l-${infer Value extends 2 | 4 | 8}`
  ? {borderLeftWidth: Value}
  : T extends `border-l-${infer Value extends keyof ColorValues}`
  ? {borderLeftColor: ColorValues[Value]}
  : T extends 'border-l'
  ? {borderLeftWidth: 1}
  : {}

type BorderStyle<T extends string>
  = T extends `border-${infer Value extends 'solid' | 'dashed' | 'dotted' | 'double' | 'hidden' | 'none' | 'unset'}`
  ? {borderStyle: Value}
  : {}

type OutlineWidth<T extends string>
  = T extends `outline-[${infer CustomValue extends `${string}${'px' | 'rem' | 'em' | 'vh' | 'vw' | 'vmin' | 'vmax'}${string}`}]`
  ? {outlineWidth: UnderscoreToSpace<CustomValue>}
  : T extends `outline-${infer Value extends 0 | 1 | 2 | 4 | 8}`
  ? {outlineWidth: Value}
  : {}

type OutlineColor<T extends string>
  = T extends `outline-[${infer CustomValue extends `${string}${'#' | 'rgb' | 'hsl' | 'oklab' | 'oklch'}${string}`}]`
  ? {outlineColor: UnderscoreToSpace<CustomValue>}
  : T extends `outline-${infer Value extends keyof ColorValues}`
  ? {outlineColor: ColorValues[Value]}
  : {}

type OutlineStyle<T extends string>
  = T extends `outline`
  ? {outlineStyle: 'solid'}
  : T extends `outline-${infer Value extends 'dashed' | 'dotted' | 'double' | 'none'}`
  ? {outlineStyle: Value}
  : {}

type OutlineOffset<T extends string>
  = T extends `outline-offset-[${infer CustomValue extends `${string}${'px' | 'rem' | 'em' | 'vh' | 'vw' | 'vmin' | 'vmax'}${string}`}]`
  ? {outlineOffset: UnderscoreToSpace<CustomValue>}
  : T extends `outline-offset-${infer Value extends 0 | 1 | 2 | 4 | 8}`
  ? {outlineOffset: Value}
  : {}

// Intentionally skipping RingWidth, RingColor, RingOffsetWidth, RingOffsetColor

type BoxShadow<T extends string>
  = T extends `shadow-${infer _Value}`
  ? {boxShadow: string}
  : {}

type OpacityValue =
  { '0'  : 0
  , '5'  : 0.05
  , '10' : 0.1
  , '15' : 0.15
  , '20' : 0.2
  , '25' : 0.25
  , '30' : 0.3
  , '35' : 0.35
  , '40' : 0.4
  , '45' : 0.45
  , '50' : 0.5
  , '55' : 0.55
  , '60' : 0.6
  , '65' : 0.65
  , '70' : 0.7
  , '75' : 0.75
  , '80' : 0.8
  , '85' : 0.85
  , '90' : 0.9
  , '95' : 0.95
  , '100' : 1
  }
type Opacity<T extends string>
  = T extends `opacity-[${infer CustomValue}]`
  ? {opacity: UnderscoreToSpace<CustomValue>}
  : T extends `opacity-${infer Value extends keyof OpacityValue}`
  ? {opacity: OpacityValue[Value]}
  : {}

type MixBlendMode<T extends string>
  = T extends `mix-blend-${infer Value extends 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity'}`
  ? {mixBlendMode: Value}
  : {}

type BackgroundBlendMode<T extends string>
  = T extends `bg-blend-${infer Value extends 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity'}`
  ? {backgroundBlendMode: Value}
  : {}

// Intentionally skipping Filter in Detail
type Filter<T extends string>
  = T extends `${'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'saturate' | 'sepia'}-${string}`
  ? {filter: string}
  : {}

// Intentionally skipping BackdropFilter in Detail
type BackdropFilter<T extends string>
  = T extends `backdrop-${string}`
  ? {backdropFilter: string}
  : {}

type BorderCollapse<T extends string>
  = T extends `border-collapse-${infer Value extends 'collapse' | 'separate'}`
  ? {borderCollapse: Value}
  : {}

type BorderSpacing<T extends string>
  = T extends `border-spacing-${string}`
  ? {borderSpacing: string}
  : {}

type TableLayout<T extends string>
  = T extends `table-layout-${infer Value extends 'auto' | 'fixed'}`
  ? {tableLayout: Value}
  : {}

type CaptionSide<T extends string>
  = T extends `caption-side-${infer Value extends 'top' | 'bottom'}`
  ? {captionSide: Value}
  : {}

// Skipping Transitions, Animations and Transforms

// Skipping AccentColor

type Appearance<T extends string>
  = T extends `appearance-${infer Value extends 'none' | 'auto'}`
  ? {appearance: Value}
  : {}

type Cursor<T extends string>
  = T extends `cursor-[${infer CustomValue}]`
  ? {cursor: UnderscoreToSpace<CustomValue>}
  : T extends `cursor-${infer Value extends 'auto' | 'default' | 'none' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'grab' | 'grabbing' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'all-scroll' | 'zoom-in' | 'zoom-out' | 'grabbing'}`
  ? {cursor: Value}
  : {}

// Skipping CaretColor

type PointerEvents<T extends string>
  = T extends `pointer-events-${infer Value extends 'auto' | 'none'}`
  ? {pointerEvents: Value}
  : {}

type Resize<T extends string>
  = T extends `resize-${infer Value extends 'none' | 'both' | 'horizontal' | 'vertical'}`
  ? {resize: Value}
  : {}

type ScrollBehavior<T extends string>
  = T extends `scroll-behavior-${infer Value extends 'auto' | 'smooth'}`
  ? {scrollBehavior: Value}
  : {}

// Skipping Details
type ScrollMargin<T extends string>
  = T extends `scroll-m${string}`
  ? {scrollMargin: string}
  : {}

// Skipping Details
type ScrollPadding<T extends string>
  = T extends `scroll-p${string}`
  ? {scrollPadding: string}
  : {}

type ScrollSnapAlign<T extends string>
  = T extends `snap-align-none`
  ? {scrollSnapAlign: 'none'}
  : T extends `snap-${infer Value extends 'start' | 'end' | 'center'}`
  ? {scrollSnapAlign: Value}
  : {}

type ScrollSnapStop<T extends string>
  = T extends `snap-${infer Value extends 'normal' | 'always'}`
  ? {scrollSnapStop: Value}
  : {}

// Skipping ScrollSnapType

type TouchAction<T extends string>
  = T extends `touch-action-${infer Value extends 'auto' | 'none' | 'pan-x' | 'pan-y' | 'pan-left' | 'pan-right' | 'pan-up' | 'pan-down' | 'pinch-zoom' | 'manipulation'}`
  ? {touchAction: Value}
  : {}

type UserSelect<T extends string>
  = T extends `select-${infer Value extends 'none' | 'text' | 'all' | 'auto'}`
  ? {userSelect: Value}
  : {}

type WillChange<T extends string>
  = T extends `will-change-${infer Value extends 'auto' | 'transform' | 'contents'}`
  ? {willChange: Value}
  : T extends `will-change-scroll`
  ? {willChange: 'scroll-position'}
  : {}

type Fill<T extends string>
  = T extends `fill-${string}`
  ? {fill: string}
  : {}

type Stroke<T extends string>
  = T extends `stroke-${infer Value extends number}`
  ? {strokeWidth: Value}
  : T extends `stroke-${string}`
  ? {stroke: string}
  : {}

type BorderRadiusValue =
  { 'none' : '0px'
  , 'sm' : '0.125rem'
  , 'md' : '0.375rem'
  , 'lg' : '0.5rem'
  , 'xl' : '0.75rem'
  , '2xl': '1rem'
  , '3xl': '1.5rem'
  , 'full' : '9999px'
  }
type BorderRadius<T extends string>
  = T extends `rounded-[${infer CustomValue}]`
  ? {borderRadius: UnderscoreToSpace<CustomValue>}
  : T extends `rounded-s-[${infer CustomValue}]`
  ? {borderStartStartRadius: UnderscoreToSpace<CustomValue>, borderEndStartRadius: UnderscoreToSpace<CustomValue>}
  : T extends `rounded-e-[${infer CustomValue}]`
  ? {borderStartEndRadius: UnderscoreToSpace<CustomValue>, borderEndEndRadius: UnderscoreToSpace<CustomValue>}
  : T extends `rounded-t-[${infer CustomValue}]`
  ? {borderTopLeftRadius: UnderscoreToSpace<CustomValue>, borderTopRightRadius: UnderscoreToSpace<CustomValue>}
  : T extends `rounded-b-[${infer CustomValue}]`
  ? {borderBottomLeftRadius: UnderscoreToSpace<CustomValue>, borderBottomRightRadius: UnderscoreToSpace<CustomValue>}
  : T extends `rounded-l-[${infer CustomValue}]`
  ? {borderTopLeftRadius: UnderscoreToSpace<CustomValue>, borderBottomLeftRadius: UnderscoreToSpace<CustomValue>}
  : T extends `rounded-r-[${infer CustomValue}]`
  ? {borderTopRightRadius: UnderscoreToSpace<CustomValue>, borderBottomRightRadius: UnderscoreToSpace<CustomValue>}
  : T extends `rounded-tl-[${infer CustomValue}]`
  ? {borderTopLeftRadius: UnderscoreToSpace<CustomValue>}
  : T extends `rounded-tr-[${infer CustomValue}]`
  ? {borderTopRightRadius: UnderscoreToSpace<CustomValue>}
  : T extends `rounded-bl-[${infer CustomValue}]`
  ? {borderBottomLeftRadius: UnderscoreToSpace<CustomValue>}
  : T extends `rounded-br-[${infer CustomValue}]`
  ? {borderBottomRightRadius: UnderscoreToSpace<CustomValue>}
  : T extends `rounded`
  ? {borderRadius: '0.25rem'}
  : T extends `rounded-s`
  ? {borderStartStartRadius: '0.25rem', borderEndStartRadius: '0.25rem'}
  : T extends `rounded-e`
  ? {borderStartEndRadius: '0.25rem', borderEndEndRadius: '0.25rem'}
  : T extends `rounded-t`
  ? {borderTopLeftRadius: '0.25rem', borderTopRightRadius: '0.25rem'}
  : T extends `rounded-b`
  ? {borderBottomLeftRadius: '0.25rem', borderBottomRightRadius: '0.25rem'}
  : T extends `rounded-l`
  ? {borderTopLeftRadius: '0.25rem', borderBottomLeftRadius: '0.25rem'}
  : T extends `rounded-r`
  ? {borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem'}
  : T extends `rounded-tl`
  ? {borderTopLeftRadius: '0.25rem'}
  : T extends `rounded-tr`
  ? {borderTopRightRadius: '0.25rem'}
  : T extends `rounded-bl`
  ? {borderBottomLeftRadius: '0.25rem'}
  : T extends `rounded-br`
  ? {borderBottomRightRadius: '0.25rem'}
  : T extends `rounded-${infer Value extends keyof BorderRadiusValue}`
  ? {borderRadius: BorderRadiusValue[Value]}
  : T extends `rounded-s-${infer Value extends keyof BorderRadiusValue}`
  ? {borderStartStartRadius: BorderRadiusValue[Value], borderEndStartRadius: BorderRadiusValue[Value]}
  : T extends `rounded-e-${infer Value extends keyof BorderRadiusValue}`
  ? {borderStartEndRadius: BorderRadiusValue[Value], borderEndEndRadius: BorderRadiusValue[Value]}
  : T extends `rounded-t-${infer Value extends keyof BorderRadiusValue}`
  ? {borderTopLeftRadius: BorderRadiusValue[Value], borderTopRightRadius: BorderRadiusValue[Value]}
  : T extends `rounded-b-${infer Value extends keyof BorderRadiusValue}`
  ? {borderBottomLeftRadius: BorderRadiusValue[Value], borderBottomRightRadius: BorderRadiusValue[Value]}
  : T extends `rounded-l-${infer Value extends keyof BorderRadiusValue}`
  ? {borderTopLeftRadius: BorderRadiusValue[Value], borderBottomLeftRadius: BorderRadiusValue[Value]}
  : T extends `rounded-r-${infer Value extends keyof BorderRadiusValue}`
  ? {borderTopRightRadius: BorderRadiusValue[Value], borderBottomRightRadius: BorderRadiusValue[Value]}
  : T extends `rounded-tl-${infer Value extends keyof BorderRadiusValue}`
  ? {borderTopLeftRadius: BorderRadiusValue[Value]}
  : T extends `rounded-tr-${infer Value extends keyof BorderRadiusValue}`
  ? {borderTopRightRadius: BorderRadiusValue[Value]}
  : T extends `rounded-bl-${infer Value extends keyof BorderRadiusValue}`
  ? {borderBottomLeftRadius: BorderRadiusValue[Value]}
  : T extends `rounded-br-${infer Value extends keyof BorderRadiusValue}`
  ? {borderBottomRightRadius: BorderRadiusValue[Value]}
  : {}



type TwClassToStyle<T extends string>
  = AspectRatio<T>
  & Columns<T>
  & BreakAfter<T>
  & BreakBefore<T>
  & BreakInside<T>
  & BoxDecorationBreak<T>
  & BoxSizing<T>
  & Display<T>
  & Float<T>
  & Clear<T>
  & Isolation<T>
  & ObjectFit<T>
  & ObjectPosition<T>
  & Overflow<T>
  & OverscrollBehavior<T>
  & Position<T>
  & Inset<T>
  & Visibility<T>
  & ZIndex<T>
  & FlexBasis<T>
  & FlexDirection<T>
  & FlexWrap<T>
  & Flex<T>
  & FlexGrow<T>
  & FlexShrink<T>
  & FlexOrder<T>
  & GridTemplateColumns<T>
  & GridColumnStart<T>
  & GridColumnEnd<T>
  & GridColumnSpan<T>
  & GridColumn<T>
  & GridTemplateRows<T>
  & GridRowStart<T>
  & GridRowEnd<T>
  & GridRowSpan<T>
  & GridRow<T>
  & GridAutoFlow<T>
  & GridAutoColumns<T>
  & GridAutoRows<T>
  & Gap<T>
  & RowGap<T>
  & ColumnGap<T>
  & JustifyContent<T>
  & JustifyItems<T>
  & JustifySelf<T>
  & AlignContent<T>
  & AlignItems<T>
  & AlignSelf<T>
  & PlaceContent<T>
  & PlaceItems<T>
  & PlaceSelf<T>
  & Padding<T>
  & PaddingTop<T>
  & PaddingRight<T>
  & PaddingBottom<T>
  & PaddingLeft<T>
  & PaddingInlineStart<T>
  & PaddingInlineEnd<T>
  & PaddingInline<T>
  & PaddingBlock<T>
  & Margin<T>
  & MarginTop<T>
  & MarginRight<T>
  & MarginBottom<T>
  & MarginLeft<T>
  & MarginInlineStart<T>
  & MarginInlineEnd<T>
  & MarginInline<T>
  & MarginBlock<T>
  & Width<T>
  & MinWidth<T>
  & MaxWidth<T>
  & Height<T>
  & MinHeight<T>
  & MaxHeight<T>
  & Size<T>
  & Font<T>
  & FontSize<T>
  & FontSmoothing<T>
  & FontStyle<T>
  & FontWeight<T>
  & FontVariantNumeric<T>
  & LetterSpacing<T>
  & LineClamp<T>
  & LineHeight<T>
  & ListStyleImage<T>
  & ListStylePosition<T>
  & ListStyleType<T>
  & TextAlignOrColor<T>
  & TextDecoration<T>
  & TextDecorationColor<T>
  & TextDecorationStyle<T>
  & TextDecorationThickness<T>
  & TextUnderlineOffset<T>
  & TextTransform<T>
  & TextOverflow<T>
  & TextWrap<T>
  & TextIndent<T>
  & VerticalAlign<T>
  & Whitespace<T>
  & WordBreak<T>
  & Hyphens<T>
  & Opacity<T>
  & MixBlendMode<T>
  & BackgroundBlendMode<T>
  & BorderRadius<T>
  & BorderWidthOrColor<T>
  & BorderStyle<T>
  & OutlineWidth<T>
  & OutlineColor<T>
  & OutlineStyle<T>
  & OutlineOffset<T>
  & BoxShadow<T>
  & Fill<T>
  & Stroke<T>
  & Cursor<T>
  & PointerEvents<T>
  & Resize<T>
  & ScrollBehavior<T>
  & ScrollMargin<T>
  & ScrollPadding<T>
  & ScrollSnapAlign<T>
  & ScrollSnapStop<T>
  & TouchAction<T>
  & UserSelect<T>
  & WillChange<T>


type PseudoClasses 
  = 'hover'
  | 'focus'
  | 'active'
  | 'visited'
  | 'target'
  | 'first'
  | 'last'
  | 'odd'
  | 'even'
  | 'disabled'
  | 'checked'
  | 'required'
  | 'valid'
  | 'invalid'
  | 'focus-within'
  | 'focus-visible'
  | 'group-hover'
  | 'group-focus'
  | 'motion-safe'
  | 'motion-reduce'
  | 'dark'
  | 'peer-hover'
  | 'peer-focus'
  | 'peer-checked'
  | 'peer-disabled'
  | 'enabled'
  | 'read-only'
  | 'optional'
  | 'empty'
  | 'first-of-type'
  | 'last-of-type'
  | 'only-child'
  | 'only-of-type'

type MediaQueries
  = 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | 'dark'

type PseudoElements
  = 'before'
  | 'after'
  | 'placeholder'
  | 'selection'
  | 'backdrop'
  | 'marker'
  | 'first-letter'
  | 'first-line'
  | 'file'

type RemoveConditions<T extends string[]>
  = T extends [infer First, ...infer Rest]
  ? First extends `${PseudoClasses | MediaQueries}:${infer CN extends string}`
    ? [CN, ...RemoveConditions<Rest>]
    : First extends `${PseudoElements}:${string}`
    ? RemoveConditions<Rest>
    : [First, ...RemoveConditions<Rest>]
  : []

type UnderscoreToSpace<T extends string> = T extends `${infer Start}_${infer Rest}`
  ? `${Start} ${UnderscoreToSpace<Rest>}`
  : T;

type SpaceSeparated<T extends string>
  = T extends `${infer FirstWord} ${infer Rest}`
  ? [ FirstWord, ...SpaceSeparated<Rest>]
  : [T]

type TupleToObjects<T extends string[]> = {
  [K in keyof T]: TwClassToStyle<T[K]>
};

type MergeObjectsWithUnion<T extends { [key: string]: any }[]>
  = T extends [infer First, ...infer Rest]
  ? ( First extends Record<string, any>
    ? ( Rest extends { [key: string]: any }[]
      ? { [K in keyof First | keyof MergeObjectsWithUnion<Rest>]: 
            ( K extends keyof First
            ? K extends keyof MergeObjectsWithUnion<Rest>
              ? First[K] | MergeObjectsWithUnion<Rest>[K]
              : First[K]
            : K extends keyof MergeObjectsWithUnion<Rest>
            ? MergeObjectsWithUnion<Rest>[K]
            : never
            )
        }
      : First
      )
    : {}
    )
  : {}

// type CombineObjects<T extends ReadonlyArray<{}>>
//   = T extends [infer First, ...infer Rest]
//   ? First & CombineObjects<Rest extends ReadonlyArray<{}> ? Rest : []>
//   : {}
// 

// Thanks to https://effectivetypescript.com/2022/02/25/gentips-4-display/
type Resolve<T> = T extends Function ? T : {[K in keyof T]: T[K]};

type TwToObj<T extends string> = 
  Resolve< 
    MergeObjectsWithUnion<
      TupleToObjects<
        RemoveConditions<
          SpaceSeparated<T>
        >
      >
    >
  >

type Input1 = 'flex flex-col gap-x-2.5 justify-start min-h-dvh relative bottom-3/4 aspect-[22_/_9] basis-5 basis-4'
type Input2 = 'font-sans tracking-wider hyphens-auto break-normal'
type InputX = 'flex flex-col gap-x-2.5 md:gap-px justify-start min-h-dvh after:relative absolute lg:sticky bottom-3/4 hover:aspect-[22_/_9] basis-5 dark:basis-4'

type X = TwToObj<InputX>

type Y = TwToObj<'font-sans tracking-wider hyphens-auto break-normal'>

export default function tw<T extends string>(cn: T): MapNamespace<TwToObj<T>> {
  throw new Error('This function should be compiled away by the `tw-to-stylex` Babel plugin.')
}