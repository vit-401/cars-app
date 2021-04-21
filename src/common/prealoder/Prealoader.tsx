import React from "react"
import prealoder from "./prealoder.svg"

export const Prealoder = React.memo(() => {
    return <div style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        zIndex: 100
    }}>
        <img src={prealoder} alt=""/>
    </div>
})