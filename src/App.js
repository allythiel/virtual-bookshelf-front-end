import React, { useState, useEffect } from 'react';
import apiKey from './components/api/apiKey';
import axios from 'axios';
import './App.css';

function App() {
  const [currentBook, setCurrentBook] = useState(null);
  const [currentBookId, setCurrentBookId] = useState(null);
  const [searchText, setSearchText] = useState('');

  const apiPath = 'http://localhost:5000/api/users';

  //FETCH CURRENT BOOK FROM GOOGLE BOOKS API
  const getCurrentBook = (searchText) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=${apiKey}`).then(response => {console.log(response.data.items); setCurrentBook(response.data.items[0]); setCurrentBookId(response.data.items[0].id.bookId) }).catch(err => console.log(err.message));
  }

  return (
    <div id='app' className='App'>

    <div className='context'>

      </div> 
      {/* <Footer /> */}
    </div>
  );
}

export default App;
