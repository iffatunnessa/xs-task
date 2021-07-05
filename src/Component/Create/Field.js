import React from 'react';
import { TextField } from '@material-ui/core';
import Radio from './Radio';
import { useParams } from 'react-router-dom';
import WorkField from './WorkField';

const Field = ({ field }) => {
    const { id } = useParams();
    const { readonly, title, required, type, validate, html_attr, repeater_fields, options, value } = field;

    console.log(repeater_fields, options)
    const handleChange = (e) => {
        document.getElementById(html_attr.id).innerText = e.target.value;
    }
    const handleRepeater = (repeater_fields) => {
        repeater_fields = Object.values(repeater_fields);
        // console.log(repeater_fields)
        repeater_fields.map(newField=> <WorkField newField={newField} />);
    }
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
                        options.map(options => <Radio field={field} default={options.default} label={options.label} key={options.key} />)
                    }
                </div> : (title === 'Work') ?
                    <div>
                        <p> Work </p>
                        <button onClick={() => { handleRepeater(repeater_fields) }}>+</button>
                    </div>
                    : <TextField
                        className={html_attr.class}
                        data_something={html_attr.data_something}
                        validate={validate}
                        id={html_attr.id}
                        label={title}
                        type={type}
                        readonly={readonly}
                        required={required}
                        onChange={handleChange}
                    />
            }

        </>
    );
};

export default Field;