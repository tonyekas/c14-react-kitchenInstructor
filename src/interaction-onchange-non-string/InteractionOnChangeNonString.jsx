import { useState } from 'react'
import './InteractionOnChangeNonString.css'

function addFifty(age) {
    return age+50
}

export default function InteractionOnChangeNonString() {

    const [age, setAge] = useState('2')

    function updateAge(event) {
        setAge(event.target.value)
    }

    const in50Years = addFifty(age)

    return (
        <div>
            <h2>Managed input and non-string data</h2>
            <p>In html, inputs hold text values - but sometimes you need them to be numbers or booleans to do calculations in React.</p>
            <p>Typically you will keep your values in state variables using the data type you intend to use in JavaScript calculations.  Normally this means you will need to initialize your state variables with the correct type and convert the values from Strings to the correct type in your "onChange" handler to keep everything consistent for JavaScript.</p>
            <p>The below input only accepts "numbers" but without conversions, the state variable the value is being updated as a string.  Our calculation of adding 50 years is failing because in JavaScript-land adding two strings together simply concatenates them together, what we really want is "age" to be a number so that we can add them correctly.</p>
            <p>Set the default state value to be a number (2) and update the onChange handler to use <code>Number.parseInt</code> before calling setAge to ensure the value is always a number and our calculation operates correctly.</p>
            <p><i>Bonus Points -</i> It is always possible for the user to clear out the field, which will call onChange with an empty string.  Handle this case by using the value '0' </p>
            <input type="number" className="name-text" value={ age } onChange={updateAge} />
            <p>In 50 years, this person will be <b>{ in50Years }</b>!</p>
        </div>
    )
}