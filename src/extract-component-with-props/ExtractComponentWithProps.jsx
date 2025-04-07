
import './ExtractComponentWithProps.css'
import './GotItButton.jsx'
import GotItButton from './GotItButton.jsx'

export default function ExtractComponentWithProps() {
    return (
      <div className='extract-component'>
        <h2>Extracting components passing props</h2>
        <p>Sometimes you have a complex element that you want to reuse over and over again on separate pages or on multiple places on the same page, but something small changes each time you want to use it.</p>
        <GotItButton title="Got it?" />
        <p>The mainenance problem that occurs in this situation is that if you ever want to make a change to the repeated part of the element, you have to search all over your codebase and change it everywhere.  In these cases you would make a component and reuse it everywhere you would otherwise have a copy of the jsx code, but use a prop to pass the value that is different between each instance.  Then there is a single place to make changes that affect all places that element is used.</p>
        <GotItButton title="Got it?" />
        <p>Create a "GotItButton" component by creating a function in a separate file that implements the annoying button that is all over this page.  Pass a prop called "title" to hold the text that appears on the button</p>
        <p>Import this file into this component and and replace all of the buttons to use the component with a title instead of repeating the jsx markup.</p>
        <GotItButton title="Good?" />
      </div>
    )
}
