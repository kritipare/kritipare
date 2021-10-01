import React from 'react';
import { Card, Grid, Paper, TextField } from '@material-ui/core';
import { useForm } from "react-hook-form";
import useStyles from './styles';
import './style.css';
import { ButtonBack } from '../GlobalComponents';

const Projects = () => {
  const classes = useStyles();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    
    <Grid container justifyContent="center" alignItems="center" id="Contact" className={classes.container}>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{ padding: '8px', top: '100px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <Card className={classes.card}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          {/* register your input into the hook by invoking the "register" function */}
          <input placeholder="Name" defaultValue="" {...register("example")} className={classes.input} />
          
          {/* include validation with required or other standard HTML validation rules */}
          <input placeholder="Email" defaultValue="" {...register("exampleRequired", { required: true })} className={classes.input} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span className={classes.error}>This field is required</span>}
          
          <ButtonBack form type="submit" className={classes.button}>Submit</ButtonBack>
        </form>
    </Card>
      {/* <TextField id="outlined-basic" label="Name" variant="outlined" className={classes.textField} />
      <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.textField} />
      <TextField id="outlined-basic" label="Contact" variant="outlined" className={classes.textField} />
      <TextField id="outlined-basic" label="Message" variant="outlined" className={classes.textField} /> */}
      </Grid>
    </Grid>
    
  );
}

export default Projects;
