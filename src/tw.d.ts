
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

export default function tw<T extends string>(cn: T): TwToObj<T> {
  throw new Error('This function should be compiled away by the `tw-to-stylex` Babel plugin.')
}