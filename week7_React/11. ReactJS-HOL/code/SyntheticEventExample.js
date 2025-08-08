import React from 'react';

const SyntheticEventExample = () => {
  const handleClick = (e) => {
    e.preventDefault(); // synthetic event
    alert('I was clicked');
  };

  return (
    <div>
      <button onClick={handleClick}>OnPress</button>
    </div>
  );
};

export default SyntheticEventExample;
