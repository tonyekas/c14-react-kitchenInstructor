import { useState } from "react"

export default function JsxDoubleAmpersand() {
    const [toggle, setToggle] = useState(true)

    function doToggle() {
        setToggle(!toggle)
    }

    return (
        <div>
            <p>Sometimes you want to show a component optionally when something happens like a error.  You may also want to show extra content when the user clicks on a button to expand an area of the screen (like an accordion).</p>
            <p>To accomplish this with react, you can use a Jsx trick.</p>
            <p>Anywhere you can put a component, you can also put a {"{ }"} that contains a JavaScript expression.  We have been using that up to now with strings to substitute variable content.</p>
            <p>You can also have that expression evaluate to a component to include that component.  When the expression returns a falsey value, there will be nothing included in the rendered HTML.</p>
            <p>This leads to us being able to use JavaScript's expression operations {'&&'}, {'||'}, {'? :'} to make expressions that return components to render or a false value (which will render nothing)</p>
            <h2>Double Ampersand</h2>
            <p>To only show a component when a variable value is truthy, use the {'&&'} operator in an expression block.</p>
            <p>For example</p>
            <code>{' {  error && <ErrorComponent message={error.message} />  }'}</code>
            <p>Will first test the variable "error" to see if it is truthy, if it is truthy then the next part of the expression will be returned to REACT, in this case an ErrorComponent.  If the error is "false" or an empty string then the second part will NOT be returned.</p>
            <p>Below there is a button that switches the state of <code>toggle</code>.</p>
            <p>Wrap the Bob Ross quote below so that it only shows when the toggle state is true.</p>
            <p>You may have to scroll to see it when it is visible.</p>
            <hr/>
            <button className="cool-button" onClick={doToggle}>Show/Hide component</button>
            <p>Beauty is everywhere. You only have to look to see it. - Bob Ross</p>
        </div>
    )
}