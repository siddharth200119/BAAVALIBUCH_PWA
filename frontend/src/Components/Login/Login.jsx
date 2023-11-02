import React, { useState } from 'react';

const apiUrl = 'http://localhost:3000/api/login';

function Register() {
  const [ID, setID] = useState('');
  const [pass, setPass] = useState('');

  const handleIDChange = (e) => {
    setID(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      ID: ID,
      pass: pass
    }

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Server Response:', data);
      })
      .catch((error) => {
        console.error('Error sending data to server:', error);
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="ID">ID:</label>
        <input
          type="text"
          id="ID"
          value={ID}
          onChange={handleIDChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={pass}
          onChange={handlePassChange}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Register;
