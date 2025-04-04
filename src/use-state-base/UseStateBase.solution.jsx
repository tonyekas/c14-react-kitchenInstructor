import { useState } from "react"

export default function() {
    const [toggle, setToggle] = useState("on")

    function turnOn() {
        setToggle("on")
    }

    function turnOff() {
        setToggle("off")
    }

    return (
        <div>
            <h2>Starting with state</h2>
            <p>React allows you to attach a variable to your component whose value can be changed and your component will re-render every time the value is updated.</p>
            <p>Add state to a component by calling the <code>useState()</code> function from the React framework with a default starting value for the state. This functions returns a two element array with the following contents</p>
            <ul>
                <li>the current state value</li>
                <li>a function to call to update the value</li>
            </ul>
            <p>Use the current value of the state variable as you would any normal javascript variable, in including using it for substitution in JSX expressions using the {"{ }"} syntax</p>
            <p>Call the returned function to update the state to a new value for the state and cause your component to re-render itself.</p>

            <h3>Recipe</h3>
            <p>Introduce state into this component called "toggle" with a default value of "on"</p>
            <p>Show the current value of the toggle in the bold space below</p>
            <p>Update click handlers to the buttons below to call the "setToggle" to update the state between the values "on" and "off" </p>
            <p>Test that it is working by clicking the buttons.</p>
            <hr/>
            <p>The toggle value is <b>{ toggle }</b></p>
            <button onClick={turnOn}>Turn on</button>            
            <button onClick={turnOff}>Turn off</button>            
        </div>
    )
}