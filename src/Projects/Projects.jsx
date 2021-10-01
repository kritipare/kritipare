import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectList from '../constants/Projects';
import ProjectCard from './ProjectCard';
import useStyles from './styles';

const Projects = () => {
  const classes = useStyles();

  return (
    <Grid container  className={classes.container} spacing={4} id="Projects" >
      {ProjectList()?.map((project) => {
        return (
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={{ padding: '8px', top: '100px', position: 'relative', display: 'flex', justifyContent: 'center' }} key={project.id} >
            <ProjectCard 
              key={project.id} 
              project={project}
              projectId={project.id} 
              projectName={project?.name}
              projectDescription={project?.description}
              projectImage={project?.image}
              projectStack={project?.stack}
            />
          </Grid>
        )
      })
    }
    
  </Grid>
  );
}

export default Projects;
