/** @jsx h */

function bitbox(props, h) {
    return (
        <div>
            <pre>{JSON.stringify(props, null, 4)}</pre>
            <input onInput={props.eval} value={props.value} />
            <pre>{props.keys}</pre>
        </div>
    )
}

export default [
    app => {
        const box = app.state.box()
        return {
            value: box.value,
            keys: box(Object.keys),
            eval: target => event => box.value(target, event.target.value)
            //x: [{ a: ["x"], r: [] }, ["$map", { r: ["r"], b: ["a"], k: ["a", "$keys"] }], "$print"]
        }
    },
    bitbox
]
