import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 95 },
    { name: 'Rohit Sharma', score: 85 },
    { name: 'KL Rahul', score: 60 },
    { name: 'Shreyas Iyer', score: 78 },
    { name: 'Hardik Pandya', score: 45 },
    { name: 'Rishabh Pant', score: 52 },
    { name: 'Ravindra Jadeja', score: 66 },
    { name: 'Jasprit Bumrah', score: 88 },
    { name: 'Yuzvendra Chahal', score: 39 },
    { name: 'Bhuvneshwar Kumar', score: 72 },
    { name: 'Mohammed Shami', score: 50 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score &lt; 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
