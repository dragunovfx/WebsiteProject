import React, { useState, useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';

interface CustomVideoPlayerProps {
  src: string;
  poster: string;
  title: string;
  description: string;
  videoId: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  src,
  poster,
  title,
  description,
  videoId
}) => {
  const [duration, setDuration] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const handleVideoLoad = () => {
    if (videoRef.current) {
      const minutes = Math.floor(videoRef.current.duration / 60);
      const seconds = Math.floor(videoRef.current.duration % 60);
      setDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    }
  };

  const handleClick = () => {
    navigate(`/video/${videoId}`);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', cursor: 'pointer' }} onClick={handleClick}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%', // 16:9 aspect ratio
          backgroundColor: '#000',
          borderRadius: 1,
          overflow: 'hidden',
        }}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          onLoadedMetadata={handleVideoLoad}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            transition: 'background-color 0.2s',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          <IconButton
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              width: 64,
              height: 64,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              },
            }}
          >
            <PlayArrowIcon sx={{ fontSize: 40, color: 'white' }} />
          </IconButton>
        </Box>
        {duration && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '2px 6px',
              borderRadius: 1,
              fontSize: '0.875rem',
            }}
          >
            {duration}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CustomVideoPlayer; 