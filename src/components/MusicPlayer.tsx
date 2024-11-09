import React from 'react';
import { Button, Box } from '@mui/material';
import { PlayArrow, Stop } from '@mui/icons-material';

interface MusicPlayerProps {
  isPlaying: boolean;
  onPlay: () => void;
  onStop: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onPlay, onStop }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<PlayArrow />}
        onClick={onPlay}
        disabled={isPlaying}
        size="large"
      >
        Play Rap
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<Stop />}
        onClick={onStop}
        disabled={!isPlaying}
        size="large"
      >
        Stop
      </Button>
    </Box>
  );
};