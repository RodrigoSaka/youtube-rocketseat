import React, { useState, useEffect } from 'react';

export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionreceived);
    // ComponentWillUnmount (Após o componente deixar de existir)
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  function handlePositionreceived({ coords }) {
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
  }

  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}
