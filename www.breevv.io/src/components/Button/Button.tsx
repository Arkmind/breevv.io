import React from 'react'

import './style.css'

interface ButtonProps {
    children?: string,
    className?: Array<string>,
}

function Button({ children, className = [] }: ButtonProps) {
    const classes = ['btn'].concat(className)

    console.log(className)  
    
    return (
        <button className={classes.join(' ')}>{children}</button>
    );
}

export default Button;
