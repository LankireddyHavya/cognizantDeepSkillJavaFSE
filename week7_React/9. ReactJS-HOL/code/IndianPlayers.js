import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Virat', 'Rohit', 'Rahul', 'Hardik', 'Pant'];
  const RanjiTrophyplayers = ['Pujara', 'Jadeja', 'Ashwin', 'Kuldeep', 'Bumrah'];

  const allPlayers = [...T20players, ...RanjiTrophyplayers]; // merge arrays

  const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Merged Players</h2>
      <p>{allPlayers.join(', ')}</p>

      <h3>Even Team Players</h3>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Odd Team Players</h3>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
