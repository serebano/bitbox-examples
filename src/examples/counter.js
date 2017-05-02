/** @jsx h */

export default [
    function({ state, props, args }, { set, inc, dec }) {
        const counter = state.counters[props.id]()

        return {
            count: counter.count(String),
            status: counter.runId(id => id || "stopped"),
            inc: set(counter.count, counter.count(inc)),
            dec: set(counter.count, counter.count(dec)),
            set: set(counter.count, args[0].target.value(Number)),
            run(target) {
                return () => {
                    counter.runId(
                        target,
                        counter.runId(running => {
                            return running
                                ? clearInterval(running)
                                : setInterval(() => counter.count(target, counter.count(inc)))
                        })
                    )
                }
            },
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
