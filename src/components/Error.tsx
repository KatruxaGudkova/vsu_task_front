import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import React from 'react';

interface ErrorDialogProps {
  onClose: () => void;
  errorMessage?: string;
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({ onClose, errorMessage = 'Произошла неизвестная ошибка' }) => {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      BackdropProps={{
        sx: {
          backgroundColor: 'rgb(119, 34, 34, 0.9)', // Уровень прозрачности
          backdropFilter: 'blur(3px)', // Дополнительное размытие
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Typography variant="h6" component="span">
          ❗️Ошибка
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box>
          <Typography variant="subtitle1" color="text.secondary">
            Сообщение:
          </Typography>
          <Typography variant="body1">{errorMessage}</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { ErrorDialog };
