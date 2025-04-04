
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

const recipes = [
  { title: 'Foundations - Components and Props' },
  { title: 'Starting with Components', 
    component: ExtractComponent,
    path: 'extract-component/ExtractComponent.js'
  },
  { title: 'Components in other Files', 
    component: ExtractComponentToAnotherFile,
    path: 'extract-component-to-another-file/ExtractComponentToAnotherFile.js'
  },
  { title: 'JSX - use {} for content', 
    component: JsxTemplateContent,
    path: 'jsx-template-content/JsxTemplateContent.js'
  },
  { title: 'JSX - passing props to components',
    component: JsxPassingProps,
    path: 'jsx-props/JsxPassingProps.js'   
  },
  { title: 'JSX - use {} for props', 
    component: JsxTemplateProps,
    path: 'jsx-template-props/JsxTemplateProps.js'
  },
  { title: 'JSX - Fragments', 
    component: JsxFragments,
    path: 'jsx-fragments/JsxFragments.js'
  },

  { title: 'Foundations - State and User Interactions' },
  { title: 'JSX - Interaction onClick ', 
    component: InteractionOnClick,
    path: 'interaction-onclick/InteractionOnClick.js'
  },
  { title: 'Use State - Base', 
    component: UseStateBase,
    path: 'use-state-base/UseStateBase.js'
  },
  { title: 'JSX - Interaction onChange', 
    component: InteractionOnChange,
    path: 'interaction-onchange/InteractionOnChange.js'
  },

  { title: 'Applications' },
  { title: 'Extracting with props', 
    component: ExtractComponentWithProps,
    path: 'extract-component-with-props/ExtractComponentWithProps.js'
  },
  { title: 'useState and CSS', 
    component: UseStateAndCss,
    path: 'use-state-for-css/UseStateAndCss.js'
  },
  { title: 'Extract, Props, Onchange', 
    component: UseStateOnChangeAndProps,
    path: 'onChange-state-and-props/UseStateOnChangeAndProps.js'
  }

]

export default recipes