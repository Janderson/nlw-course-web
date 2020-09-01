import React, {InputHTMLAttributes} from 'react';

import './styles.css';

// InputHTMLAttributes<HTMLInputElement> - pega todas as propriedades que o input ja poderia receber
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

// {label} -destruturação do js 
const Input: React.FC<InputProps> = ({label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor="{name}">{label}</label>
            <input type="text" id="{name}" {...rest} />
        </div>

    )
}

export default Input;