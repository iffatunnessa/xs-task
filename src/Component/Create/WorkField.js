import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '60ch',
        },
    },
    field: {
        border: '1 solid grey',
        borderRadius: 5
    },
    btn: {
        background: "#2773bb",
        textTransform: 'capitalize',
        color: 'white',
        padding: "5 10",
        fontSize: 20,
        borderRadius: "4px",
        marginBottom: 30
    },
}));

const WorkField = ({ newField, isUpdate }) => {
    const classes = useStyles();
    newField = Object.values(newField);
    console.log('work', newField)

    const newInput = (newElement) => {
        const { title, type, required, validate } = newElement;
        const workDiv = document.getElementById('work-div');
        const label = document.createElement('label');
        label.innerText = title;
        label.style.padding = '5px';
        label.style.marginTop = '10px';
        const br = document.createElement('br');
        const m = document.createElement('input');
        m.setAttribute("type", type);
        m.setAttribute("required", required);
        m.setAttribute("validate", validate);
        m.style.padding = '5px';
        m.style.marginLeft = '7px';
        m.style.marginTop = '10px';
        workDiv.appendChild(label);
        workDiv.appendChild(m);
        workDiv.appendChild(br);
        
        const handleBlur =() =>{
            m.value = m.value.toUpperCase();
        }
        m.onblur = handleBlur;
        console.log(m.value)
    }
    const handleRepeater = (newField) => {
        newField.map(ele => newInput(ele));
    }
    return (
        <>
            <div id='work-div' className={classes.field}></div>
            <button className={classes.btn} onClick={() => handleRepeater(newField)}>+</button>
        </>
    );
};

export default WorkField;