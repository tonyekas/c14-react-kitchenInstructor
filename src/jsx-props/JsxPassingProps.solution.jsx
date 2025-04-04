import './JsxPassingProps.css'

function CoolButton({ caption }) {
    return (
        <button className="cool-button">{ caption }</button>
    )    
}

export default function JsxPassingProps() {
    return (
        <div>
            <h2>Passing Props into Components</h2>
            <p>Components can accept values from their parent as properties or "props" for short.  These props are sent to components in JSX using syntax similar to HTML attributes.  For example:</p>
            <code>{ '<SomeCoolComponent someProp="someValue" /> '}</code>
            <p>Props are received by component functions in the first argument.  The argument is a JavaScript object with a keys named after the prop passed to the component that contain the value assigned in JSX.  Typically, a developer will use a "destructuring assignment" to shorthand extracting the prop values.  Receiving a prop typically looks like this:</p>
            <pre>{ 'function SomeCoolComponent( { someProp } ) { \n  ..component code that uses the prop and returns a JSX expression goes here.. \n}' }</pre>
            <p>FYI: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring">MDN Docs on Destructuring</a></p>
            <p>Make the CoolButton component accept a prop called "caption", use this prop to make the following three buttons have the titles: "Ready" then "Set" then "Go!"</p>

            <CoolButton caption="Ready" />
            <CoolButton caption="Set" />
            <CoolButton caption="Go" />
        </div>
    )
}