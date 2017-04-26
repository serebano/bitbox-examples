import bitbox, { proxy } from "bitbox"
import { is } from "bitbox/utils"
import FunctionTree from "function-tree"

function argsProvider(context, action, { args = [] }) {
    context[Symbol.for("args")] = args
    context.props = args[0]
    return context
}

export const signals = bitbox(
    function init(target) {
        if (!Reflect.has(target, "signal"))
            Reflect.set(target, "signal", new FunctionTree([argsProvider, { state: target.state }]))

        return target
    },
    proxy({
        get(target, key) {
            const value = Reflect.get(target, key)

            return is.object(value) ? new Proxy(value, this) : value
        },
        set(target, key, value) {
            return Reflect.set(
                target,
                key,
                is.object(value)
                    ? Object.keys(value).reduce((obj, key) => {
                          obj[key] = (...args) => target.signal.run(key, value[key], { args })
                          return obj
                      }, {})
                    : (...args) => target.signal.run(key, value, { args })
            )
        }
    })
).signals

const app = bitbox({
    args(target) {
        return (
            Reflect.get(target, Symbol.for("args")) ||
            Reflect.get(target, "args") ||
            Array.from(target)
        )
    },
    signals,
    state: ["state"],
    signal: ["signal"],
    props: ["props"],
    observer: ["observer"],
    timer: [
        "state",
        "timers",
        [
            function id(target) {
                return target.props
                    ? bitbox.get(target, app.props.id)
                    : bitbox.get(target, app.state.id)
            }
        ]
    ],
    "*": ["props"]
})

export default app

export const { args, props, observer, timer } = app
