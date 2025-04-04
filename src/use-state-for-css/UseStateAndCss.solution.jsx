import { useState } from "react"

import './UseStateAndCss.css'

export default function UseStateAndCss() {    
    const [paragraphClass, setParagraphClass] = useState('blue')

    function goBlue() {
        setParagraphClass('blue')
    }

    function goRed() {
        setParagraphClass('red')
    }

    function goGreen() {
        setParagraphClass('green')
    }

    return (
        <div>
            <h2>Using state to change css classes on elements</h2>
            <p>A very powerful use of state is to use it to calculate css classes for elements to use.</p>
            <p>Using state in this way gives us access to animations or other css effects like what we saw in the previous JavaScript kitchen.</p>
            <p>Introduce state called <code>paragraphClass</code> with the default value 'blue'</p>
            <p>Add onClick handlers to update <code>paragraphClass</code> to be 'blue', 'red', or 'green'</p>
            <p>Use that value of that state variable to set the "className" of the paragraph and see that the background color changes.</p>

            <button className="blue" onClick={goBlue}>Go Blue</button>
            <button className="red" onClick={goRed}>Go Red</button>
            <button className="green" onClick={goGreen}>Go Green</button>

            <p className={paragraphClass}>There once was a princess named Hank.</p>
        </div>
    )
}