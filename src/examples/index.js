import Component, { render } from "bitbox-inferno-component"
import App from "../App"

const store = {
    state: {
        counters: [{ count: 1 }, { count: 2 }],
        box: {}
    }
}

render(Component(App, store), "#root")
