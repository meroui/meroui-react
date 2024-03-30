import * as React from 'react'

interface Buttonprops {
    btnText: string
}

const Button: React.FC<Buttonprops> = (prop) => {
    return (
        <button style={{ background: "blue", color: 'white', padding: "4px" }}>{prop.btnText}</button>
    )
}

export default Button
