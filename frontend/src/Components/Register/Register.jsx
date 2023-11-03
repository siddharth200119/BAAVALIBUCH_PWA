import React, { useState } from 'react';
import "./Register.css"

const apiUrl = 'http://localhost:3000/api/register';

function Register() {
  const [image, setImage] = useState(null);
  const [ID, setID] = useState('');
  const [friendID, setFriendID] = useState('');
  const [pass, setPass] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleIDChange = (e) => {
    setID(e.target.value);
  };

  const handleFriendIDChange = (e) => {
    setFriendID(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('ID', ID);
    formData.append('friendID', friendID);
    formData.append('pass', pass);

    fetch(apiUrl, {
      method: 'POST',
      body: formData,
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
    <div className='register_page'>
    <div className='formContainer'>
    <h1 className='heading'>Register</h1>
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="ID">Enter ID</label>
        <input
          type="text"
          placeholder='Elon Musk'
          id="ID"
          value={ID}
          onChange={handleIDChange}
        />
      </div>
      <div>
        <label htmlFor="friendID">Friend ID</label>
        <input
          type="text"
          id="friendID"
          placeholder='Mark Zuckerberg'
          value={friendID}
          onChange={handleFriendIDChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder='Password'
          value={pass}
          onChange={handlePassChange}
        />
      </div>
      <div>
        <label htmlFor="imageUpload">Profile Picture</label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
        <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
}

export default Register;
