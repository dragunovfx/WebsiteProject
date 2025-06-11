import React from 'react';
import { Box, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        justifyContent: 'center',
        gap: 2
      }}
    >
      <IconButton
        href="https://youtube.com/@dragunovfx"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: 'text.secondary',
          '&:hover': {
            color: 'error.main'
          }
        }}
      >
        <YouTubeIcon />
      </IconButton>
      <IconButton
        href="https://twitter.com/@dragunovfx"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: 'text.secondary',
          '&:hover': {
            color: 'info.main'
          }
        }}
      >
        <TwitterIcon />
      </IconButton>
    </Box>
  );
};

export default Footer; 