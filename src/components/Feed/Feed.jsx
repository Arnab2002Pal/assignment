import React, { useState, useEffect } from 'react';
import './feed.css';
import Card from './Card';
import PopUpMessage from './PopUpMessage';

const Feed = () => {
  const [list, setList] = useState([]);
  const [selectedName, setSelectedName] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);


  //For fetching name
  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }, []);

  //OnClick 
  const handleCardClick = (name) => {
    setSelectedName(name);
    fetch(`https://api.chucknorris.io/jokes/random?category=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.value);
        setShowPopup(true);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  };

  const handleNextJoke = () => {
    setLoading(true); // Set loading to true during the delay
    fetch(`https://api.chucknorris.io/jokes/random?category=${selectedName}`)
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.value);
        setLoading(false); // Set loading to false after fetching the next joke
      })
      .catch((error) => {
        console.log('Error fetching data', error);
        setLoading(false); // Set loading to false if there's an error
      });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedName('');
    setMessage('');
  };

  return (
    <>
       <div className='container'>
        {list.map((name, index) => (
          <Card key={index} name={name} onClick={() => handleCardClick(name)} />
        ))}
      </div>

      {/* Render the pop-up message */}
      {showPopup && (
        <PopUpMessage
          selectedName={selectedName}
          message={message}
          loading={loading}
          onNextJoke={handleNextJoke}
          onClosePopup={handleClosePopup}
        />
      )}
      </>
  );
};

export default Feed;
