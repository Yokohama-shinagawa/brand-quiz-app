import React from 'react';
import { Button } from 'antd';

const Buttons = (props) => {
    return(
        <div className="button-field">        
            <Button type="primary" danger
                className="quiz-button"
                onClick = {props.returnQuestion}
            >
                戻る
            </Button>
            <Button type="primary"
                className="quiz-button"
                onClick = {props.nextQuestion}
            >
                    次へ
            </Button>
        </div>
    )
}

export default Buttons;