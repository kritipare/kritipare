import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core';
import React from 'react'
import { ButtonBack } from '../GlobalComponents';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogCustom = ({ open, handleClose, project }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      <DialogTitle>{project?.projectName}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {project?.descriptionDetail}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonBack alt="true" onClick={handleClose}>Close</ButtonBack>
        </DialogActions>
    </Dialog>
  )
}

export default DialogCustom;
