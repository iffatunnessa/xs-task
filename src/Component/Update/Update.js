import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import Field from '../Create/Field';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '60ch',
        },
    },
    container: {
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 60,
        backgroundColor: 'white',
        borderRadius: 5
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
    },
    errormsg: {
        color: 'red'
    },
}));

const Update = () => {
    const { id } = useParams();
    const classes = useStyles();
    const [field, setField] = useState([])

    useEffect(() => {
        fetch('http://localhost/api/get_form.php')
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                const inputField = Object.values(data.data.fields[0]);
                const inputField1 = data.data.fields[0];
                setField(inputField);

                console.log(inputField);
                console.log(inputField1);
            })
    }, [])
    const handleSubmit = (e) => {
        fetch('http://localhost/api/submit_form.php')
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        // fetch(`http://localhost/api/list.php/${id}`, {
        //     method: 'PUT',
        //     body: JSON.stringify({
        //         value : e.target.value
        //     }),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));
        // e.preventDefault();
    }
    return (
        <Container maxWidth="sm" className={classes.container}>
            <Grid container>
                <Grid item xs={6} sm={12}>
                    <div>
                        <h2>Update Form</h2>
                        <form className={classes.root} onSubmit={handleSubmit}>
                            {
                                field.map(field =>
                                    <Field field={field} handleSubmit={handleSubmit} isUpdate={true} />
                                )
                            }
                            <Button type='submit' variant="contained" className={classes.btn} >Submit</Button>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Update;