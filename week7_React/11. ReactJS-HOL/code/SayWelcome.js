import React from 'react';

const SayWelcome = () => {
  const sayMessage = (msg) => {
    alert(msg);
  };

  return (
    <div>
      <button onClick={() => sayMessage('Welcome!')}>Say Welcome</button>
    </div>
  );
};

export default SayWelcome;
