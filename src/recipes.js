
import ExtractComponent from './extract-component/ExtractComponent'
import ExtractComponentToAnotherFile from './extract-component-to-another-file/ExtractComponentToAnotherFile'
import ExtractComponentWithProps from './extract-component-with-props/ExtractComponentWithProps'
import InteractionOnChange from './interaction-onchange/InteractionOnChange'
import InteractionOnClick from './interaction-onclick/InteractionOnClick'
import JsxTemplateContent from './jsx-template-content/JsxTemplateContent'
import UseStateBase from './use-state-base/UseStateBase'
import UseStateAndCss from './use-state-for-css/UseStateAndCss'
import JsxTemplateProps from './jsx-template-props/JsxTemplateProps'
import JsxFragments from './jsx-fragments/JsxFragments'
import UseStateOnChangeAndProps from './onChange-state-and-props/UseStateOnChangeAndProps'
import JsxPassingProps from './jsx-props/JsxPassingProps'
import JsxDoubleAmpersand from './jsx-double-ampersand/JsxDoubleAmpersand'
import JsxTernary from './jsx-ternary/JsxTernary'
import JsxArrayMap from './jsx-array-map/JsxArrayMap'
import JsxBooleans from './jsx-booleans/JsxBoolean'
import FormsValidation from './forms-validation/FormsValidation'
import InteractionOnChangeNonString from './interaction-onchange-non-string/InteractionOnChangeNonString'

const recipes = [
  { title: 'Foundations - Components and Props' },
  { title: 'Starting with Components', 
    component: ExtractComponent,
    path: 'extract-component/ExtractComponent.jsx'
  },
  { title: 'Components in other Files', 
    component: ExtractComponentToAnotherFile,
    path: 'extract-component-to-another-file/ExtractComponentToAnotherFile.jsx'
  },
  { title: 'JSX - use {} for content', 
    component: JsxTemplateContent,
    path: 'jsx-template-content/JsxTemplateContent.jsx'
  },
  { title: 'JSX - passing props to components',
    component: JsxPassingProps,
    path: 'jsx-props/JsxPassingProps.jsx'   
  },
  { title: 'JSX - use {} for props', 
    component: JsxTemplateProps,
    path: 'jsx-template-props/JsxTemplateProps.jsx'
  },
  { title: 'JSX - Fragments', 
    component: JsxFragments,
    path: 'jsx-fragments/JsxFragments.jsx'
  },

  { title: 'Foundations - State and User Interactions' },
  { title: 'JSX - Interaction onClick', 
    component: InteractionOnClick,
    path: 'interaction-onclick/InteractionOnClick.jsx'
  },
  { title: 'Use State - Base', 
    component: UseStateBase,
    path: 'use-state-base/UseStateBase.jsx'
  },
  { title: 'JSX - Interaction onChange', 
    component: InteractionOnChange,
    path: 'interaction-onchange/InteractionOnChange.jsx'
  },
  { title: 'onChange and Strings', 
    component: InteractionOnChangeNonString,
    path: 'interaction-onchange-non-string/InteractionOnChangeNonString.jsx'
  },

  { title: 'JSX Tricks' },
  { title: 'JSX - hide components with && ',
    component: JsxDoubleAmpersand,
    path: 'jsx-double-ampersand/JsxDoubleAmpersand.jsx'
  },
  { title: 'JSX - Choose between components with ternary expression',
    component: JsxTernary,
    path: 'jsx-ternary/JsxTernary.jsx'
  },
  { title: 'JSX - Handling booleans',
    component: JsxBooleans,
    path: 'jsx-booleans/JsxBooleans.jsx'
  },
  { title: 'JSX - Arrays of components',
    component: JsxArrayMap,
    path: 'jsx-array-map/JsxArrayMap.jsx'
  },

  { title: 'Applications' },
  { title: 'Extracting with props', 
    component: ExtractComponentWithProps,
    path: 'extract-component-with-props/ExtractComponentWithProps.jsx'
  },
  { title: 'useState and CSS', 
    component: UseStateAndCss,
    path: 'use-state-for-css/UseStateAndCss.jsx'
  },
  { title: 'Extract, Props, Onchange', 
    component: UseStateOnChangeAndProps,
    path: 'onChange-state-and-props/UseStateOnChangeAndProps.jsx'
  },
  {
    title: 'Validating Form Data',
    component: FormsValidation,
    path: 'forms-validation/FormsValidation.jsx'
  }

]

export default recipes