import { useState } from "react"

export default function JsxTernary() {
    const [toggle, setToggle] = useState(true)

    function doToggle() {
        setToggle(!toggle)
    }

    return (
        <div>
            <p>Sometimes you want to choose between two components to show or two values to use for a prop based on the internal state of your component.</p>
            <p>To accomplish this with react, you can use a Jsx trick.</p>
            <p>Anywhere you can put a component, you can also put a {"{ }"} that contains a JavaScript expression.  We have been using that up to now with strings to substitute variable content.</p>
            <p>You can also have that expression evaluate to a component to include that component.  When the expression returns a falsey value, there will be nothing included in the rendered HTML.</p>
            <p>This leads to us being able to use JavaScript's expression operations {'&&'}, {'||'}, {'? :'} to make expressions that return components to render or a false value (which will render nothing)</p>
            <h2>Ternary</h2>
            <p>To only show one component when a variable value is truthy, and a different component when the value is falsey, use the ternary expression {' ? : '}</p>
            <p>For example</p>
            <code>{' {  (error) ? <ErrorComponent /> : <SuccessComponent />}'}</code>
            <p>Will first test the variable "error" to see if it is truthy, if it is truthy then it will return the ErrorComponent to React, otherwise it will return the SuccessComponent to react.</p>
            <p>Below there is a button that switches the state of <code>toggle</code>.</p>
            <p>Wrap the Bob Ross quotes below so that it switches between which one is visible every time you click the button.</p>
            <hr/>
            <button className="cool-button" onClick={doToggle}>{toggle ? "Show Main" : "Show second"}</button>
            {toggle ? <p>We don't make mistakes, we just have happy accidents - Bob Ross</p> : <p>Beauty is everywhere. You only have to look to see it. - Bob Ross</p>}
            {/* <p>Beauty is everywhere. You only have to look to see it. - Bob Ross</p>
            <p>We don't make mistakes, we just have happy accidents - Bob Ross</p> */}
        </div>
    )
}