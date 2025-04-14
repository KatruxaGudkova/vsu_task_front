import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalyzeText } from '../api/requests/tableRequests';
import { analyzeTextClearError } from '../slices';
import { AppDispatch, RootState } from '../store';
import { ErrorDialog } from './Error';

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector((state: RootState) => state.analyzeText);

  const [inputData, setInputData] = useState('Однажды Владислав и Екатерина решили поехать в Москву.');

  if (error) return <ErrorDialog errorMessage={error} onClose={() => dispatch(analyzeTextClearError())} />;

  if (isLoading) return <div>Получение данных от сервера...</div>;

  return (
    <Box>
      <TextField
        fullWidth
        label="Большой инпут"
        variant="outlined"
        multiline
        rows={8}
        sx={{
          fontSize: 20,
          '& .MuiInputBase-root': {
            fontSize: 20,
            padding: '16px',
          },
        }}
      />
      <Button onClick={() => dispatch(fetchAnalyzeText(inputData))}>Анализировать</Button>
    </Box>
  );
};

export { Page };
