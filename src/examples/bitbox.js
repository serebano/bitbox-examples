/** @jsx h */

export default [
    function bit({ state, args }, { set, toUpper }) {
        return {
            value: state.name,
            onInput: set(state.name, args[0].target.value(toUpper))
        }
    },
    function box({ onInput, value }, h) {
        return (
            <div style={{ padding: 16, background: "#f3f8ff" }}>
                <h3>Hello {value}!</h3>
                <input onInput={onInput} value={value} />
            </div>
        )
    }
]
