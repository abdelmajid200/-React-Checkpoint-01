
import React from 'react';
import './App.css';
import Name from './Name';
import Team from './Team';
import Position from './Position';
import Image from './Image';
import players from './players';

function App() {
  const player = players[0];

  return (
    <div className="App">
      <h1 className='title'>Player Details:</h1>
      
      <Name   firstName={player.first_name} lastName={player.last_name} />
      <Team team={player.team} />
      <Position position={player.position} />
      
      <Image imageUrl={player.image} altText={``} />
    </div>
  );
}

export default App;
