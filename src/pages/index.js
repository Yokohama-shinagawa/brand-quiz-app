import React from 'react';
import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <div className="question mx-auto">
                <h1>ようこそ、ブランドクイズへ</h1>
                <p>efjdsaklfjaklsjfdkjkajskfjkajksdfjasdfsfdafdasfkajsdkfjkasdjfkajksdjfjs</p>
                <p>fsafdkljsakdjfkjsdklfjkjdskfjkajsdfkjaskdljfkdaljfkjdkjasldfasfjkdsflj</p>
                <p>fdskafjkldasjkfjkjdskfjkjdskfjkdsjfkjdskajkldjfjrhgurhuvknajfghrjolaks</p>
            <Link href="/main">
                <button
                    type="button"
                    className="btn btn-primary"
                >
                    クイズを始める
                </button>
            </Link>
            </div>
            <style jsx global>{`
            body {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                background-image: url(/images/background.jpg);
                background-size: cover;
                text-decoration: none;
            }
            code {
                font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
                monospace;
            }
            
            .question{
                margin-top:20px;
                padding:20px;
                width:800px;
                background-color:white;
            }
            
            a{
                font-weight:bold;
            }
            
            .choice{
                padding:10px;
                border-radius:10px;
                margin-top:20px;
                display: block;
                width:100%;
                text-align: left;
            }
            
            .question-correct-choice{
                background-color:#52c41a;
                color:white;
                border: #52c41a 4px solid;
            }
            
            .question-wrong-choice{
                background-color:red;
                color:white;
                border:red 4px solid;
            }
            .choice p{
                font-size:20px;
                font-weight:bold;
                margin:0;
            }
            .answer-discription{
                border: #52c41a 4px solid;
                margin: 15px 0 15px 0;
                padding:10px;
                font-weight: bold;
            }
            .button-field{
                text-align:center;
            }
            
            .quiz-button{
                margin:40px 80px;
            }  
        `}</style>
        </div>
    )
}

export default Index


  