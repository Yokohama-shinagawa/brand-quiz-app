import React from 'react';
import { Button } from 'antd';

const Buttons = (props) => {
    return(
        <div>        
            <Button type="primary" danger
                onClick = {props.returnQuestion}
            >
                戻る
            </Button>
            <Button type="primary"
                onClick = {props.nextQuestion}
            >
                    次へ
            </Button>
        </div>
    )
}

export default Buttons;