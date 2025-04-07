import { useState } from "react"

function BobRossQuote({quote}) {
    return (<>
        <p>{quote} <br/> - Bob Ross </p>
    </>)
}

export default function JsxArrayMap() {

    const [quotes] = useState([
        'Beauty is everywhere. You only have to look to see it.',
        'We don\'t make mistakes, we just have happy accidents',
        'They say everything looks better with odd numbers of things. But sometimes I put even numbers–just to upset the critics.',
        'You can do anything here—the only prerequisite is that it makes you happy',
        'Anytime you learn, you gain',
        'Go out on a limb—that\'s where the fruit is.'
    ])

    return (
        <div>
            <p>Sometimes you want make a table or list view where there is a component that you want to repeat over and over again on the page, but with different data.</p>
            <p>To accomplish this with react, you can use a Jsx trick and a JavaScript array.</p>
            <p>Anywhere you can put a component, you can also put a {"{ }"} that contains a JavaScript array full of components.  React will render each component one after another in the generated HTML.</p>
            <p>Typically we have data already available in an array form from our server, so we can use Array.map in an expression to convert the data into components that react will render.</p>
            <h2>Array Map</h2>
            <p>To create a set of components from data, use a JavaScript expression block with Array.map</p>
            <p>For example</p>
            <pre>{'{  hotSpots.map( (hotSpot) => (\n      <HotSpot key={hotSpot._id} name={hotSpot.name})/>\n)}'}</pre>
            <p>Will use array.map to convert the array of "hotSpots" into an array of HotSpot components while passing information from each individual hotspot down to the component for use in substition.</p>
            <p>Notice the "key" prop.  When you are passing multiple components to React through an array, it will expect to find a "key" prop on each one.  It will use this key prop later to decide if a part of the array is changed for re-rendering, so always assign a key - and be sure it is a value that is unique to the data contained within the resulting component.</p>
            <p>Change the Bob Ross quotes below to use an array.map expression to render them.</p>
            <hr/>
            {
                quotes.map((quote) => (
                    <BobRossQuote key={quote} quote ={quote} />
                ))
            }
        </div>
    )
}