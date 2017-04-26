/** @jsx h */

export default [
    app => ({
        count: app.state.count,
        incClicked: app.signals.incClicked,
        decClicked: app.signals.decClicked
    }),
    function Count({ count, incClicked, decClicked }, h) {
        return (
            <div style={{ padding: 16, border: "1px solid #c00" }}>
                <h2> - {count} - </h2>
                <button onClick={incClicked}>+</button>
                <button onClick={decClicked}>-</button>
            </div>
        )
    }
]
