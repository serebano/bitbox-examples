import { render } from "inferno"
import { views } from "bitbox"
import App from "./components/app"
import app from "./app"
import store from "./store"

export { app, store }

//component.debug = true

render(views.inferno(App, store, app), document.querySelector("#root"))
