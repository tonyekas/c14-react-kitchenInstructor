import { useState } from "react"

export default function JsxBooleans() {
    const [toggle, setToggle] = useState(true)

    function doToggle() {
        setToggle(!toggle)
    }

    return (
        <div>
            <p>These JSX tricks are cool and all, but they actually complicate display of boolean values.</p>
            <p>When you want to display a boolean value you might try this <code>{'{ recordExists }'}</code>, but when recordExists is a boolean - react will render NOTHING because of the "truthy/falsey" rules for rendering expression results.</p>
            <p>To solve this problem, you need to convert your boolean to a string value before displaying it.  A few ways to do that include: </p>
            <ol>
                <li>use <code>Boolean(value).toString()</code> to convert the boolean to "true" or "false"</li>
                <li>use a ternary expression <code>(value ? 'yes': 'no')</code> to convert the boolean to whatever you like</li>
                <li>use an expression hack like <code>''+value</code> to append the boolean value to a string</li>
            </ol>
            <p>Use one of the techniques below to make the "toggle value" show properly.</p>
            <p><i>Bonus points - </i>use a ternary expression to control the label on the button to switch between "Show quote" and "Hide quote"</p>
            <hr/>
            <p>The toggle value is <b>{ toggle }</b></p>
            <button className="cool-button" onClick={doToggle}> 
                Show/hide quote
            </button>
            { toggle && <p>Beauty is everywhere. You only have to look to see it. - Bob Ross </p> }
        </div>
    )
}