import React from 'react';
import { Button, Card, CardActions, Grid } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { send } from 'emailjs-com';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

import useStyles from './styles';
import './style.css';

toast.configure();

const Projects = () => {
  const classes = useStyles();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      data,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Mail sent successfully!', 
           {position: toast.POSITION.TOP_RIGHT})
        
      })
      .catch((err) => {
        console.log('FAILED...', err);
        toast.error('Something went wrong!', 
           {position: toast.POSITION.TOP_RIGHT})
      });
  };

  return (
    
    <Grid container justifyContent="center" alignItems="center" id="Contact" className={classes.container}>
      <Grid item xs={12} sm={10} md={10} lg={10} xl={10} style={{ padding: '8px', top: '100px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <Card className={classes.card}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form} autoComplete="off">
          {/* register your input into the hook by invoking the "register" function */}
          <input placeholder="Name" autoFocus defaultValue="" {...register("name")} className={classes.input} />
          
          {/* include validation with required or other standard HTML validation rules */}
          <input placeholder="Email" defaultValue="" {...register("email", { required: true })} className={classes.input} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span className={classes.error}>This field is required</span>}
          
          <input placeholder="Message" defaultValue="" {...register("message", { required: true })} className={classes.input} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span className={classes.error}>This field is required</span>}
          <CardActions>
            <Button form type="submit" className={classes.button}>Submit</Button>
          </CardActions>
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
