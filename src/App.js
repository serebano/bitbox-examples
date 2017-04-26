import React, { Component } from "react"
import * as bitbox from "bitbox"
import * as examples from "./examples"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>bitbox examples</h2>
                </div>
            </div>
        )
    }
}

export default App
