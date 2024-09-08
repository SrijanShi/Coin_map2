import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './styles.css';

export default function CircularIndeterminate() {
  return (
    <div sx={{ display: 'flex' }} className="loader-container">
      <CircularProgress />
    </div>
  );
}
