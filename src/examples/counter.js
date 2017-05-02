/** @jsx h */

export default [
    function({ state, props, observer }) {
        const counter = state.counters[props.id]()

        return {
            count: counter.count(String),
            status: counter.runId(id => id || "stopped"),
            inc: counter(target => () => target.count++),
            dec: counter(target => () => target.count--),
            set: counter(target => event => target.count = Number(event.target.value || 0)),
            run: counter(target => () =>
                target.runId = target.runId
                    ? clearInterval(target.runId)
                    : setInterval(() => target.count++)),
            remove(target) {
                return () => {
                    clearInterval(counter.runId(target))
                    state.counters(target).splice(props.id(target), 1)
                }
            }
        }
    },
    function Counter({ count, inc, dec, set, run, status, remove }, h) {
        return (
            <main
                style={{
                    background: status === "stopped" ? "#f4f4f4" : "rgba(157,165,180, 0.3)",
                    borderBottom: "1px solid rgba(157,165,180, 0.1)",
                    padding: 12
                }}>
                <div>
                    <input onInput={set} value={count} size={10} />
                    <button onClick={inc}>+</button>
                    <button onClick={dec}>-</button>
                    <button onClick={remove}>remove</button>
                    <button onClick={run}>run [{status}]</button>
                </div>
            </main>
        )
    }
]
