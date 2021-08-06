import React, { useState, useEffect } from 'react';
import apiKey from './components/api/apiKey';
import axios from 'axios';
import Header from './components/header/header';
import MessageBar from './components/messageBar/messageBar';
import AppLogin from './components/appLogin/appLogin';
import Main from './components/main/main';
import './App.css';

const App = () => {
    const [comments, setComments] = useState('');
    const[users, setUsers] = useState(null);
    const[newUser, setNewUser] = useState({
      name: '',
      password: '',
      email: '',
    })
  
  const [newUserData, setNewUserData] = useState(null);
  const [loginData, setLoginData] = useState(null);
  const [register, setRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [currentBook, setCurrentBook] = useState(null);
  const [currentBookId, setCurrentBookId] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [messageText, setMessageText] = useState('');
  const [showMessageBar, setShowMessageBar] = useState(false);


  //////////////////////////////////////////////////////////////////////////
  //                              API Routes                              //
  //////////////////////////////////////////////////////////////////////////

  const apiPath = 'http://localhost:5000/api/users';

  // Get All Users
  const getAllUsers = async () => {
    await axios.get(apiPath).then((res) => { setUsers(res.data); console.log(res.data); }).catch((err) => console.log(err));
 }

  // Post New User
  const postNewUser = async (newUser) => {
    await axios.post(apiPath, newUser).then((res) => { console.log(res.data); }).catch(err => {
       if (err.response.status === 400) {
          console.log(err.response.data)
          setMessageText(err.response.data)
          setShowMessageBar(true);
       }
    })
 }

 // Post User Login
 const postUserLogin = async (email) => {
  await axios.post(`${apiPath}`, email).then((res) => { setLoggedInUser(res.data); }).catch((err) => { console.log(err); });
}
  
// Get Current Book
  const getCurrentBook = (searchText) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=${apiKey}`).then(response => {console.log(response.data.items); setCurrentBook(response.data.items[0]); setCurrentBookId(response.data.items[0].id.bookId) }).catch(err => console.log(err.message));
  }

  //ADD NEW POSTING
  // const postNewComment = async (userId, data) => {
  //   await axios.post(`${apiPath}/${userId}/comment`, data).then((res) => (res.data)).catch((err) => { console.log(err); });
  // }

  //////////////////////////////////////////////////////////////////////////
  //                              Use Effects                             //
  //////////////////////////////////////////////////////////////////////////

  // GET CURRENT BOOK
  useEffect(() => {
    getAllUsers();
    console.log('getAllUsers');
  }, [loggedInUser])


  useEffect(() => {
    getCurrentBook();
    console.log('getCurrentBook');
  }, [])

  useEffect(() => {
    postNewUser(newUserData);
    console.log('postNewUser');
  }, [newUserData])

  useEffect(() => {
    postUserLogin(loginData);
    console.log('postUserLogin');
  }, [loginData])


  //////////////////////////////////////////////////////////////////////////
  //                              HANDLERS                             //
  //////////////////////////////////////////////////////////////////////////

  const handleUserSubmit = (event) => {     // AppLogin
    event.preventDefault();
    if (register) {
       setNewUserData(newUser);   // change triggers post new user actions
       setRegister(false);        // end registration mode
       setNewUser({
          name: '',
          password: '',
          email: '',
       });
    } else {
       setLoginData({ email: newUser.email })   // change triggers user login actions
       setLoggedIn(true);
       setNewUser({
          name: '',
          password: '',
          email: '',
       });
       document.getElementById('app').style.backgroundColor = '#999999';
    }
 }
 // AppLogin
 const handleUserChange = (event) => {    
  event.persist();
  setNewUser(prevNewUser => ({ ...prevNewUser, [event.target.name]: event.target.value }));
  // console.log(newUser);
}

 //Message Bar
const handleCloseMessageBar = () => {     
  setShowMessageBar(false);
  setMessageText('');
}

// Handle Search Submit
const handleSearchSubmit = (event) => {
  event.preventDefault();
  getCurrentBook(searchText);
  setSearchText('');
}

// Handle Search Change
const handleSearchChange = (event) => {
  setSearchText(event.target.value);
}


  return (
    <div id='app' className='App'>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} loggedInUser={loggedInUser} />
      {showMessageBar && <MessageBar messageText={messageText} setShowMessageBar={setShowMessageBar} handleCloseMessageBar={handleCloseMessageBar} />}
    <div className='context'>
      {!loggedIn && <AppLogin newUser={newUser} handleUserChange={handleUserChange} handleUserSubmit={handleUserSubmit} 
        register={register} setRegister={setRegister} setLoggedIn={setLoggedIn} />}
      {loggedIn && <Main users={users} loggedInUser={loggedInUser} searchText={searchText} setSearchText={setSearchText} handleSearchSubmit={handleSearchSubmit} handleSearchChange={handleSearchChange} currentBook={currentBook} setCurrentBook={setCurrentBook}/>}
      </div> 
    </div>
  );
}

export default App;
