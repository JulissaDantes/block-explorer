import React from 'react'
import { useHistory } from "react-router-dom";

export default function Transaction() {
    let history = useHistory();

    function handleClick() {
      history.push("/");
    }
    return (
        <div>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        </div>
    )
}
