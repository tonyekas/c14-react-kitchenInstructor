import { useState } from 'react'
import './InteractionOnChange.css'

export default function InteractionOnChange() {

    const [name, setName] = useState("Emily")
    
    function updateName(event) {
        setName(event.target.value)
    }

    return (
        <div>
            <h2>Using onChange to update react state</h2>
            <p>React lets you attach code to the change event of an input or select by setting the "onChange" prop to a function that should be called every time the user updates the value.  Note that you need to use {"{ }"} around the function name (or a { "() => {}" } function declaration) to embed it as a javascript expression in jsx.</p>
            <p>This function can accept a parameter, which by convention we name <code>event</code> or <code>e</code>.  Note that <code>event.target.value</code> contains the value that the user is typing, or the value that is selected for a select element.</p>
            <p>This is useful because often you will want to hold onto data entered in form fields for validation or other purposes prior to calling APIs to save data, as well as make your front end respond to selections from drop down lists. onChange handlers are the places to update component state.</p>
            <p>Create an onChange handler to update the "name" state variable as the user enters text in the below input.</p>
            <p>Also, set the "value" prop in the input to the be the value of the "name" state variable so you can see the value as you update it.  This is called creating a "Managed" input.</p>
            <p>The name is: <b>{ name }</b></p>
            <input className="name-text" value={ name } onChange={updateName}/>
        </div>
    )
}