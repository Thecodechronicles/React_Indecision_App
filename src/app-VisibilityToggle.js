console.log('VisibilityToggle app is running !');

var buttonText = 'Show Details';
var showText = false;

var visibilityToggle = () => {
    if (buttonText == 'Show Details') {
        buttonText = 'Hide Details';
        showText = true;
    } else {
        buttonText = 'Show Details';
        showText = false;
    }
    render();
}

var Template = () => {
    return (
        <div>
            <h2>Visibility Toggle !</h2>
            <br />
            <button onClick={visibilityToggle}>{buttonText}</button>
            {showText ? <p>Here's showing you the details</p> : undefined}
        </div>
    );
}

var appRoot = document.getElementById('reactApp');

var render = () => {
    ReactDOM.render(<Template />, appRoot);
}

render();