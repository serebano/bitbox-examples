/** @jsx h */
import Counters from "./examples/counters"
import Bitbox from "./examples/box"
import logo from "./logo.svg"
import "./App.css"

function App(props, h) {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Counters ({props.size})</h2>
            </div>
            <Bitbox />
            <Counters />
        </div>
    )
}

export default [app => ({ size: app.state.counters.length }), App]
