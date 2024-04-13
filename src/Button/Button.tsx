import * as React from 'react'
import type { ButtonProps } from './ButtonProps'


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(inProps, ref) {


    const props = inProps;

    return <button>
        {props.btnText}
    </button>

})
export default Button;
