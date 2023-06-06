import React from "react";

function Buttons({ tileMode, setTileMode }) {
    return (
        <>
            <button
                onClick={() => {
                    setTileMode("hello");
                }}
            >
                1
            </button>
            <button
                onClick={() => {
                    setTileMode("projects");
                }}
            >
                2
            </button>
        </>
    );
}

export default Buttons;
