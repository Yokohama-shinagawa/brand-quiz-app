import React from 'react';
import {
    Link,
} from "react-router-dom";
import { Button } from 'antd';

const Top = () => {
    return (
            <div className="question mx-auto">
                <h1>ようこそ、ブランドクイズへ</h1>
                <p>
                    efjdsaklfjaklsjfdkjkajskfjkajksdfjasdfsfdafdasfkajsdkfjkasdjfkajksdjfjs
                    fsafdkljsakdjfkjsdklfjkjdskfjkajsdfkjaskdljfkdaljfkjdkjasldfasfjkdsflj
                    fdskafjkldasjkfjkjdskfjkjdskfjkdsjfkjdskajkldjfjrhgurhuvknajfghrjolaks
                </p>
                <Button type="primary">
                    <Link to="/main">クイズを始める</Link>
                </Button>
            </div>
    )
}

export default Top;