
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import './Mywork.css'
const ImageDialog = ({ open, handleClose,content }) => {
  return (
    <Dialog open={open} onClose={handleClose} className='popup__div'>
      <DialogTitle>Image Dialog</DialogTitle>
      <DialogContent>
        <DialogContentText>
         {content+" here"}
        </DialogContentText>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
