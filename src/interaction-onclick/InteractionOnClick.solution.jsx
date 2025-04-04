import './InteractionOnClick.css'

export default function InteractionOnClick() {

    function sayHi() {
        alert('Hello!')
    }

    return (
        <div>
            <h2>Using onClick to run code in your component</h2>
            <p>React lets you attach code to the click event on a button or any other element by setting the "onClick" prop to a function that should be called.  Note that you need to use {"{ }"} around the function name to embed it as a javascript expression in jsx.</p>
            <p>You will often want to do this to save data held in forms or manipulate state to acheive a variety of effects. </p>
            <p>Create a function in this component to call <code>alert('Hello!')</code> and bind it to the button below.</p>
            <button className="say-hi-button" onClick={sayHi}>Say hi!</button>
        </div>
    )
}