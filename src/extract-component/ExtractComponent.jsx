import './ExtractComponent.css'

export default function ExtractComponent() {
    return (
      <div className='extract-component'>
        <h2>Extracting components</h2>
        <p>Sometimes you have a lot of static content (like an about-us page) that you want to break into pieces to make your code more readable.</p>
        <button 
          className="get-it-button" 
          onClick={() => confirm("Are you sure?")}
        >
          Get it?
        </button>
        <p>Sometimes you have a complex element that you want to reuse over and over again on separate pages or on multiple places on the same page.</p>
        <button 
          className="get-it-button" 
          onClick={() => confirm("Are you sure?")}
        >
          Get it?
        </button>
        <p>The mainenance problem that occurs in this situation is that if you ever want to change that element, you have to search all over your codebase and change it everywhere.  In these cases you would make a component and reuse it everywhere you would otherwise have a copy of the jsx code.  Then there is a single place to make changes that affect all places that element is used.</p>
        <p>Create a "GotItButton" component by creating a function in this file that implements the annoying button that is all over this page.</p>
        <p>Replace all of the buttons to use the component instead of repeating the jsx markup.</p>
        <button 
          className="get-it-button" 
          onClick={() => confirm("Are you sure?")}
        >
          Get it?
        </button>
      </div>
    )
}
