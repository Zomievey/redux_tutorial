import React from "react";

export default function ColorBox(props) {
    return <>
        <div style={{display: "inline-block", width: 50, height: 50, backgroundColor: props.color}}/>
    </>
}