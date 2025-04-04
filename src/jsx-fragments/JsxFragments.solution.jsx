
function Story() {
    return (
        <>
            <p>Once upon a time, in a kingdom far away, there lived a princess named Emily. Princess Emily was known for her kindness and bravery. One day, while walking through the royal gardens, Emily discovered a hidden path. Curious, she followed it and found a shimmering pond, its waters glowing under the moonlight.</p>
            <p>As Emily knelt by the water’s edge, a gentle voice whispered, “Only the pure of heart can make a wish here.” With a smile, Emily closed her eyes and made a wish for peace across the land.</p>
            <p>The next morning, the kingdom awoke to a world more peaceful than ever, and everyone knew it was because of Princess Emily’s kind heart. And so, Emily’s legend lived on, not just as a princess, but as a symbol of hope for all.</p>
        </>
    )
}

export default function JsxFragments() {    
    return (
        <div>
            <h2>Using fragments to contain multiple components</h2>
            <p>React components are only allowed to return a single jsx expression.  In most cases you would use a "div" in your component to wrap the contents that you want to return, however sometimes you do not want to do that.</p>
            <p>Specifically when you parent is using a flex box or other sophisticated layout, you may want to return multiple separate elements to your parent component so that they are laid out properly.</p>
            <p>When you need to do this, you wrap your multiple elements "fragment" component that uses the syntax <code>{ "<>  </> "}</code> to create a fragment that contains multiple elements for the parent to layout.</p>
            <p>Below is a generated story about "Emily" that is three paragraphs.</p>
            <p>Extract this story into a component (in this file or using a separate file) that uses a fragment to return the three paragraphs.</p>
            <hr/>
            <Story />
        </div>
    )
}