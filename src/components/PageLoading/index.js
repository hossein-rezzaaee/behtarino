import { Backdrop, Box, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const RotateBox = styled(Box)({
  animation: '3s linear 1s infinite progress-rotate',
});

const PageLoading = ({ open }) => {
  return (
    <Backdrop
      open={open}
      sx={{
        background: 'rgba(255,255,255,0.7)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <RotateBox width="80px" borderRadius="50%" overflow="hidden">
        <LinearProgress color="primary" sx={{ height: '80px' }} />
      </RotateBox>
    </Backdrop>
  );
};

export default PageLoading;
