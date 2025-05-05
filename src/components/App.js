import React, { useState } from 'react';

function App() {
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: 'Sunny',
  });

  const tempStyle = {
    color: weather.temperature > 20 ? 'red' : 'blue',
  };

  return (
    <div>
      <p>
        Temperature: <span style={tempStyle}>{weather.temperature}</span>
      </p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
}

export default App;
