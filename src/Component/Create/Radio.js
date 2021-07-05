import React from 'react';

const Radio = ({field, label, key}) => {
    const { readonly, title, required, type, validate, html_attr, options, value } = field;
    return (
        <>
            <input className={html_attr.class}
            data_something={html_attr.data_something}
            validate={validate}
            id={html_attr.id}
            type={type}
            readonly={readonly}
            required={required} 
            value={key} name={title} />
            <label for={html_attr.id}>{label}</label>
            </>
    );
};

export default Radio;