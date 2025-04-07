import { useState } from "react"

import './FormsValidation.css'

export default function FormsValidation() {
    const [name, setName] = useState('')

    function onNameChange(e) {
        setName(e.target.value)
    }

    const validName = name.toUpperCase().startsWith('A')

    return (
        <div>
            <h2>Validating data in forms</h2>
            <p>When accepting input from the user, you will typically want to protect your system from invalid data.</p>
            <p>A way to do that is to run "validation" logic in your component that compare the user entered values in state variables to make sure that the data is valid to proceed.  By capturing the "valid" state you can use JSX tricks to disable save buttons or show messages to the user.</p>
            <p>The form below has an input field and a save button. We want the save button to only be enabled when the entered name starts with the letter A</p>
            <p>Create a variable in your component function called "validName" that is true when the "name" starts with the letter A.  Hint - <code>String.startsWith()</code> is really useful here. </p>
            <p>Use that variable to set the "disabled" prop on the button to prevent the user from saving invalid data.</p>
            <div>
                <input 
                    className="cool-input" 
                    placeholder="Enter your name"
                    value={name} 
                    onChange={onNameChange}
                />
            </div>
            <button className="cool-button" disabled={!validName}>Save</button>
        </div>
    )
}