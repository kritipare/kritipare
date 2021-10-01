import React, { useState } from 'react';
import { Card, CardHeader, CardMedia, CardActions, Avatar, IconButton, CardContent, Typography, Button } from '@material-ui/core';

import useStyles from './styles';
import DialogCustom from './DialogCustom';
import { ButtonBack } from '../GlobalComponents';

const ProjectCard = ({ project, projectId, projectName, projectDescription, projectImage, projectStack }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Card 
    // sx={{ maxWidth: 300 }} 
    // maxWidth={300} 
    className={classes.card}>
      <CardHeader
        avatar={
          <Avatar 
          src="/images/pizza-slice.png" 
          aria-label="recipe" />
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={projectName}
        // subheader="subheader or date"
      />
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={projectImage}
        alt={projectName}
      />
      <CardContent>
        <Typography variant="body2">
          {projectDescription}
        </Typography>
        <Typography variant="caption">
          {projectStack}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonBack alt aria-label="seeMore" onClick={() => setOpen(true)}>
          Know more
        </ButtonBack>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
    </Card>
    {/* <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>{projectName}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
    </Dialog> */}
    <DialogCustom
      open={open}
      handleClose={handleClose}
      project={project}
    />
    </>
  )
}

export default ProjectCard;
