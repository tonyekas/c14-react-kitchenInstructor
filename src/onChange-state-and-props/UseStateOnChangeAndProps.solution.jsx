import { useState } from "react"

import "./UseStateOnChangeAndProps.css"

function Story({ name }) {
    return (
        <>
            <p>Once upon a time, in a kingdom far away, there lived a princess named { name }. Princess { name } was known for her kindness and bravery. One day, while walking through the royal gardens, { name } discovered a hidden path. Curious, she followed it and found a shimmering pond, its waters glowing under the moonlight.</p>
            <p>As { name } knelt by the water’s edge, a gentle voice whispered, “Only the pure of heart can make a wish here.” With a smile, { name } closed her eyes and made a wish for peace across the land.</p>
            <p>The next morning, the kingdom awoke to a world more peaceful than ever, and everyone knew it was because of Princess { name }’s kind heart. And so, { name }’s legend lived on, not just as a princess, but as a symbol of hope for all.</p>
        </>
    )
}

export default function UseStateOnChangeAndProps() {    
    const [name, setName] = useState("Emily")

    function updateName(event) {
        setName(event.target.value)
    }
    
    return (
        <div>
            <h2>Once upon a time...</h2>
            <p>There was a beautiful story that was about a kind princess named Emily.  A highly inclusive front end developer realized that this story could both be more inclusive and be beautifully composed React components!</p>
            <p>They set to work by recrafting the story into a component called <code>Story</code> that received a <code>name</code> prop to personalize it.  Then they loving creating an input element where the reader could enter their own name.  This input was synchronized to a state variable and passed down to the story.</p>
            <p>It was a beautiful time.  Future readers could now see themselves in the story and they learned to celebrate themselves!  The developer was happy to empower the people to unlock their true potential while also getting to make react components.</p>
            <hr/>
            <p>This story is about:</p>
            <input className="name-text" value={name} onChange={updateName} />
            <Story name={name}/>
        </div>
    )
}