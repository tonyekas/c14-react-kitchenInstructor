import './JsxTemplateProps.css'

function CoolButton({ caption }) {
    return (
        <button className="cool-button">{ caption }</button>
    )    
}

export default function JsxTemplateProps() {
    const myCaption = "Ok!"

    return (
        <div>
            <h2>Substituting Prop value from variables</h2>
            <p>Most interesting components will have some props that you can pass them to customize what they are showing.  You can assign any prop value to output of a Javascript expression using the {"{ }"} syntax as the left hand side of a prop assignment.</p>
            <p>Introduce a variable in this component that holds the value "Ok!", and pass it to the CoolButton component in the <code>caption</code> prop</p>
            <CoolButton caption={myCaption}/>
            <hr/>
        </div>
    )
}