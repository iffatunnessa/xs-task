import React from 'react';
import { Button, Container, Grid, makeStyles, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
    radio:{
        fontSize : 10,
        paddingLeft:8,
        paddingTop: 30,
    },
    errormsg: {
        color: 'red'
    },
}));

const Create = () => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [value, setValue] = React.useState('female');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Container maxWidth="sm" className={classes.container}>
            <Grid container>
                <Grid item xs={6} sm={12}>
                    <div>
                        <h2>Create Form</h2>
                        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                id="login-email-input"
                                label="FullName"
                                type="text"
                                {...register("fullname")}
                            />
                            <TextField
                                id="login-password-input"
                                label="Details"
                                type="text"
                                autoComplete="current-password"
                                name="password"
                                {...register("details")}
                            />
                            <div className={classes.radio}>
                                 <FormControl component="fieldset" >
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={value} {...register("gender")} onChange={handleChange}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                            </div>
                           
                            <TextField
                                id="login-password-input"
                                label="Work"
                                type="text"
                                autoComplete="current-password"
                                name="password"
                                {...register("work")}
                            />
                            <Button type='submit' variant="contained" className={classes.btn} >Submit</Button>
                        </form>
                        {/* {error && (
                            <p className={classes.errormsg}> {error} </p>
                        )} */}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Create;