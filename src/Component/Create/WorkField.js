import React from 'react';
import { TextField } from '@material-ui/core';

const WorkField = ({newField}) => {
    console.log(newField)
    return (
        <>
        <input
            // validate={validate}
            // id={html_attr.id}
            label="ok"
            // type={type}
            // readonly={readonly}
            // required={required}
            // onChange={handleChange}
        />
        </>
    );
};

export default WorkField;