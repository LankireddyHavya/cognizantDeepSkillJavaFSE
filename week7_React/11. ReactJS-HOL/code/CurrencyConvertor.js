import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const rate = 0.011; // example conversion rate
    const converted = rupees * rate;
    setEuro(converted.toFixed(2));
  };

  return (
    <div>
      <h3>Currency Convertor</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter INR amount"
        />
        <button type="submit">Convert</button>
      </form>
      {euro !== null && <p>€ {euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
