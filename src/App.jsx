import { useState } from 'react';

const App = () => {
  const [country, setCountry] = useState('');
  console.log(country);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <select value={country} onChange={handleChange}>
        <option value="">Select country</option>
        <option value="pakistan">Pakistan</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
      </select>

      <p>Selected country: {country}</p>
    </div>
  );
};

export default App;
