import * as React from 'react'

export interface Buttonprops {
    btnText: string
}

const Button: React.FC<Buttonprops> = (prop) => {
    return (
        <button >{prop.btnText}</button>
    )
}

export default Button
