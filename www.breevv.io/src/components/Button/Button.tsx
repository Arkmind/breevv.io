import React from 'react'

import './style.css'

interface ButtonProps {
    children?: string,
}

function Button({ children }: ButtonProps) {
    return (
        <button className="btn">{children}</button>
    );
}

export default Button;
