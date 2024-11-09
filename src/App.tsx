import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import { Box, Paper, Typography, Container } from '@mui/material';
import { RapLyrics } from './components/RapLyrics';
import { generateBeat } from './utils/musicGenerator';
import { MusicPlayer } from './components/MusicPlayer';
import { LyricsDisplay } from './components/LyricsDisplay';

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [beat, setBeat] = useState<any>(null);

  useEffect(() => {
    setBeat(generateBeat());
  }, []);

  const playRap = async () => {
    if (!isPlaying) {
      await Tone.start();
      Tone.Transport.start();
      beat.start();
      setIsPlaying(true);
      
      const utterance = new SpeechSynthesisUtterance(RapLyrics.fullLyrics);
      utterance.rate = 1.2;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const stopRap = () => {
    Tone.Transport.stop();
    beat.stop();
    setIsPlaying(false);
    speechSynthesis.cancel();
  };

  return (
    <Box className="min-h-screen bg-gradient-to-b from-purple-600 to-blue-800">
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" align="center" sx={{ color: 'white', mb: 4 }}>
          BinBoss Rap Generator
        </Typography>

        <Paper elevation={3} sx={{ p: 4 }}>
          <MusicPlayer 
            isPlaying={isPlaying}
            onPlay={playRap}
            onStop={stopRap}
          />
          <LyricsDisplay />
        </Paper>
      </Container>
    </Box>
  );
};

export default App;