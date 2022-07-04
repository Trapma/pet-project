import React, { useState } from "react";

const Input = () => {

    const [text, setText] = useState('Введите текст')
    return (
        <div>
            <h1>{text}</h1>
            <br />
            <input
                type="text"
                value={text}
                onChange={(Event) => setText(Event.target.value)}
            />
        </div>
    )
}

export default Input
