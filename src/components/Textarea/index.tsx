import React, {TextareaHTMLAttributes} from 'react';

import './styles.css';

// TextareaHTMLAttributes<HTMLTextareaElement> - pega todas as propriedades que o Textarea ja poderia receber
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

// {label} -destruturação do js 
const Textarea: React.FC<TextareaProps> = ({label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor="{name}">{label}</label>
            <textarea id="{name}" {...rest} />
        </div>

    )
}

export default Textarea;