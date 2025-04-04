

export default function JsxTemplateContent() {
    const name = 'Tony'
    
    return (
        <div>
            <h2>Putting variable values into generated html</h2>
            <p>One of the awesome things about JSX is that it will allow us to inject the values of variables into our our markup by wrapping normal JavaScript expressions in {"{ }"}.</p>
            <p>Below is a generated story about "Emily", but it could really be about anyone.</p>
            <p>Create a variable called <code>name</code> with the value of your name.</p>
            <p>Change the below markup to use the contents of the <code>name</code> variable everywhere "Emily" appears.</p>
            <p><i>Bonus marks - do something about the pronouns if you prefer to identify as male.</i></p>
            <hr/>
            <p>Once upon a time, in a kingdom far away, there lived a princess named { name }. Princess { name } was known for her kindness and bravery. One day, while walking through the royal gardens, { name } discovered a hidden path. Curious, she followed it and found a shimmering pond, its waters glowing under the moonlight.</p>
            <p>As { name } knelt by the water’s edge, a gentle voice whispered, “Only the pure of heart can make a wish here.” With a smile, { name } closed her eyes and made a wish for peace across the land.</p>
            <p>The next morning, the kingdom awoke to a world more peaceful than ever, and everyone knew it was because of Princess { name }’s kind heart. And so, { name }’s legend lived on, not just as a princess, but as a symbol of hope for all.</p>
        </div>
    )
}