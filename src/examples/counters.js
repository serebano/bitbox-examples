/** @jsx h */
import Counter from "./counter"

export default [
    ({ props, state, observer }) => ({
        color: props.color,
        counters: state(state => state.counters || (state.counters = [])),
        add: state.counters(target => () =>
            target.push({
                count: 0
            })),
        pop: state.counters(target => () => target.pop()),
        shift: state.counters(target => () => target.shift())
    }),
    function Counters(props, h) {
        return (
            <section style={{ background: "#eee" }}>
                <div style={{ padding: 8 }}>
                    <button onClick={props.add}>Add</button>
                    <button onClick={props.pop}>Pop</button>
                    <button onClick={props.shift}>Shift</button>
                </div>
                <div>
                    {props.counters.map((counter, id) => <Counter id={id} key={id} />)}
                </div>
            </section>
        )
    }
]
