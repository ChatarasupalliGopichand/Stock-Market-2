import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Portfolio() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Your Portfolio</h1>
      {/* Display Portfolio Data */}
      {user.portfolio.map(stock => (
        <div key={stock.symbol}>
          <h2>{stock.companyName}</h2>
          <p>Latest Price: {stock.latestPrice}</p>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
