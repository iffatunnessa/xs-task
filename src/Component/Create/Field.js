import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import Radio from './Radio';
import { useParams } from 'react-router-dom';
import WorkField from './WorkField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '60ch',
        },
    },
    btn: {
        background: "#2773bb",
        textTransform: 'capitalize',
        color: 'white',
        padding: 4,
        borderRadius: "4px"
    },
    radio: {
        fontSize: 10,
        paddingLeft: 8,
        paddingTop: 30,
    }
}));

const Field = ({ field, isUpdate }) => {
    const { id } = useParams();
    const classes = useStyles();
    const { readonly, title, required, type, validate, html_attr, repeater_fields, options, value } = field;
    const handleChange = (e) => {
        if (isUpdate) {
        document.getElementById(html_attr.id).innerText = e.target.value;
        }
    }
    return (
        <>
            {(title === 'Gender' && type === 'select') ? <div>
                <select style={{ border: 'none', padding: '10px', color: 'grey', marginBottom: 30, textSize: '40px' }} component="fieldset">
                    <label component="legend">{title}</label>
                    {
                        options.map(options => <option  onBlur={handleChange} value={options.key} className={html_attr.class}
                            data_something={html_attr.data_something}
                            validate={validate} label={options.label} />)
                    }
                </select>
            </div>
                : (title === 'Gender' && type === 'radio') ? <div>
                    <label component="legend">{title}</label>
                    {
                        options.map(options => <Radio  onBlur={handleChange} className={classes.radio} field={field} default={options.default} label={options.label} key={options.key} />)
                    }
                </div> : (title === 'Work') ?
                    <div>
                        <p> Work </p>
                        <WorkField newField={repeater_fields} isUpdate={isUpdate} />
                    </div>
                    : <TextField
                        className={html_attr.class}
                        data_something={html_attr.data_something}
                        validate={validate}
                        id={html_attr.id}
                        label={title}
                        type={type}
                        readOnly={readonly}
                        required={required}
                        onChange={handleChange}
                    />
            }
        </>
    );
};

export default Field;