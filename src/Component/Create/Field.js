import React from 'react';
import { TextField } from '@material-ui/core';
import Radio from './Radio';

const Field = ({ field }) => {
    const { readonly, title, required, type, validate, html_attr, options, value } = field;
    return (
        <>
            {(title === 'Gender' && type === 'select') ? <div>
                <select style={{ border: 'none', padding: '10px', color: 'grey', marginBottom: 30, textSize: '40px' }} component="fieldset">
                    <label component="legend">{title}</label>
                    {
                        options.map(options => <option value={options.key} className={html_attr.class}
                            data_something={html_attr.data_something}
                            validate={validate} label={options.label} />)
                    }
                </select>
            </div>
                : (title === 'Gender' && type === 'radio') ? <div>
                     <label component="legend">{title}</label>
                    {
                        options.map(options => <Radio field ={field} label={options.label} key={options.key}/>)
                    }
                </div> : <TextField
                    className={html_attr.class}
                    data_something={html_attr.data_something}
                    validate={validate}
                    id={html_attr.id}
                    label={title}
                    type={type}
                    readonly={readonly}
                    required={required}
                />
            }
            

        </>
    );
};

export default Field;