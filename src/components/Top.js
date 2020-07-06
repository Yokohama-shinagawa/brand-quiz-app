import React from 'react';
import {
    Link,
} from "react-router-dom";

const Top = () => {
    return (
        <div>
            <h1>Topページです</h1>
            <Link to="/main">About</Link>
        </div>
    )
}

export default Top;