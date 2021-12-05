import React from 'react';
import { Provider as AuthProvider } from './Context/authContext';
import { Provider as LocationProvider } from './Context/locationCotext';
import { Provider as TrackProvider } from './Context/TrackContext';

import Routes from './routes/Routes';

export default function App() {
  return (
    <AuthProvider>
      <TrackProvider>
        <LocationProvider>
          <Routes />
        </LocationProvider>
      </TrackProvider>
    </AuthProvider>
  );
}

