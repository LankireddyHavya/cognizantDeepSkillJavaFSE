import React from 'react';

const OfficeList = () => {
  const offices = [
    {
      name: 'Cyber Heights',
      rent: 55000,
      address: 'Madhapur, Hyderabad',
      image: 'https://via.placeholder.com/300x200?text=Cyber+Heights'
    },
    {
      name: 'Tech Park',
      rent: 75000,
      address: 'Whitefield, Bangalore',
      image: 'https://via.placeholder.com/300x200?text=Tech+Park'
    },
    {
      name: 'Smart Towers',
      rent: 60000,
      address: 'Gachibowli, Hyderabad',
      image: 'https://via.placeholder.com/300x200?text=Smart+Towers'
    }
  ];

  return (
    <div>
      <h1>Office Space Rental App 🏢</h1>

      {offices.map((office, index) => {
        const rentStyle = {
          color: office.rent < 60000 ? 'red' : 'green',
          fontWeight: 'bold'
        };

        return (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h2>{office.name}</h2>
            <img src={office.image} alt={office.name} width="300" height="200" />
            <p><strong>Address:</strong> {office.address}</p>
            <p><strong>Rent:</strong> <span style={rentStyle}>₹{office.rent}</span></p>
          </div>
        );
      })}
    </div>
  );
};

export default OfficeList;
