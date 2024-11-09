import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import { RapLyrics } from './RapLyrics';

export const LyricsDisplay: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {Object.entries(RapLyrics.sections).map(([section, lyrics], index) => (
        <Box key={section}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
            {section}
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
            {lyrics}
          </Typography>
          {index < Object.entries(RapLyrics.sections).length - 1 && (
            <Divider sx={{ mt: 3 }} />
          )}
        </Box>
      ))}
    </Box>
  );
};