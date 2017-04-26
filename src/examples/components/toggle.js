/** @jsx h */
function Toggle(props, h) {
    return (
        <div style={{ background: props.color, padding: 16 }}>
            <button onClick={props.clicked}>Toggle ({props.value})</button>
        </div>
    )
}

Toggle.map = function({ state, signals }) {
    return {
        value: state.enabled(enabled => (enabled ? "on" : "off")),
        color: state.enabled(enabled => (enabled ? "green" : "#555")),
        clicked: signals.toggleClicked
    }
}

const depless = [
    ({ state, signals }) => ({
        value: state.enabled(enabled => (enabled ? "on" : "off")),
        color: state.enabled(enabled => (enabled ? "green" : "#555")),
        clicked: signals.toggleClicked
    }),
    function Toggle({ value, color, clicked }, h) {
        return (
            <div style={{ background: color, padding: 16 }}>
                <button onClick={clicked}>Toggle ({value})</button>
            </div>
        )
    }
]

export default Toggle
