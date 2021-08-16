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
    const [bookshelf, setBookshelf] = useState(null);
    const[users, setUsers] = useState(null);
    const[newUser, setNewUser] = useState({
      name: '',
      password: '',
      email: '',
    });
  
  const [newUserData, setNewUserData] = useState(null);
  const [loginData, setLoginData] = useState(null);
  const [register, setRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [currentBook, setCurrentBook] = useState(null);
  const [relatedBook, setRelatedBook] = useState(null);
  const [currentBookId, setCurrentBookId] = useState(null);
  const [relatedBookId, setRelatedBookId] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [messageText, setMessageText] = useState('');
  const [showMessageBar, setShowMessageBar] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [newBookshelf, setNewBookshelf] = useState(null);
  const [commentCount, setCommentCount] = useState(0);


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
  await axios.post(`${apiPath}/login`, email).then((res) => { setLoggedInUser(res.data) }).catch((err) => { console.log(err.response.request._response); });
}
console.log('loggedInUser Test', loggedInUser);
  
// Get Current Book
  const getCurrentBook = (searchText) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=${apiKey}`).then(response => {console.log(response.data.items); setCurrentBook(response.data.items[0]); setCurrentBookId(response.data.items[0].id) }).catch(err => console.log(err.message));
  }

// Get Related Books
const getRelatedBooks = (searchText, index) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=${apiKey}`).then(response => {console.log(response.data.items); setRelatedBook(response.data.items[index]); setRelatedBookId(response.data.items[index].id) }).catch(err => console.log(err.message));
}


// Get Book Comment by Book ID
const getCommentsByBookID = (bookId, comments) => {
  axios.get(`${apiPath}/${comments}/${bookId}`).then((res) => {setComments(res.data); setCommentCount(res.data.length) }).catch((err) => console.log(err));
}


  // ADD NEW POSTING
  const postNewComment = async (data) => {
    await axios.post(`${apiPath}/${loggedInUser._id}/comments`, data).then((res) => (res.data)).catch((err) => { console.log(err); });
  }

  // Add Book to Bookshelf
  const postAddBook = async (data) => {
    await axios.post(`${currentBook}`).then((res) => {setBookshelf(res.data) }).catch((err) => console.log(err));
  }

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
    getRelatedBooks();
    console.log('getRelatedBook');
  }, [])

  useEffect(() => {
    postNewUser(newUserData);
    console.log('postNewUser');
  }, [newUserData])

  useEffect(() => {
    postUserLogin(loginData);
    console.log('postUserLogin');
  }, [loginData])

  useEffect(() => {
    getCommentsByBookID(currentBookId);
    console.log('getCommentsByBookId');
  }, [currentBookId]);


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
       document.getElementById('app');
    }
 }
 // AppLogin
 const handleUserChange = (event) => {    
  event.persist();
  setNewUser(prevNewUser => ({ ...prevNewUser, [event.target.name]: event.target.value }));
  // console.log(newUser);
}

const handleLogin = () => {
  setLoggedIn(false);
  setLoggedInUser(null);
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
  getRelatedBooks(searchText);
  setSearchText('');
}

// Handle Search Change
const handleSearchChange = (event) => {
  setSearchText(event.target.value);
}

//handle New Comment
const handleNewCommentSubmit = (event) => {
  event.preventDefault();
  const comment = {
    text: newComment,
    author: loggedInUser.name,
    book: currentBookId,
  }
  postNewComment(comment);
  comments.push(comment);
  setNewComment('');
  console.log(comment);
}
console.log('currentBook', currentBook)
console.log('currentBookID', currentBookId);

// Handle Comment Change
const handleNewCommentChange = (event) => {
  setNewComment(event.target.value);
}


//Handle Book Add
const handleNewBookshelfAdd = (currentBook) => {
  postAddBook(currentBook);
  bookshelf.push(currentBook);
  setNewBookshelf('');
  console.log('handlebookshelf', bookshelf);
}


//Handle Bookshelf Change
const handleBookshelfChange = (event) => {
  setNewBookshelf(event.target.value);
}

  return (
    <div id='app' className='App'>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} handleLogin={handleLogin}/>
      {showMessageBar && <MessageBar messageText={messageText} setShowMessageBar={setShowMessageBar} handleCloseMessageBar={handleCloseMessageBar} />}
    <div className='Context'>
      {!loggedIn && <AppLogin newUser={newUser} setNewUser={setNewUser} handleUserChange={handleUserChange} handleUserSubmit={handleUserSubmit} 
        register={register} setRegister={setRegister} setLoggedIn={setLoggedIn} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>}
      {loggedIn  && <Main users={users} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} searchText={searchText} setSearchText={setSearchText} handleSearchSubmit={handleSearchSubmit} handleSearchChange={handleSearchChange} currentBook={currentBook} setCurrentBook={setCurrentBook}
        relatedBook={relatedBook} setRelatedBook={setRelatedBook} relatedBookId={relatedBookId} setRelatedBookId={setRelatedBookId}
        handleNewCommentChange={handleNewCommentChange} handleNewCommentSubmit={handleNewCommentSubmit} newComment = {newComment} setNewComment={setNewComment} comments={comments} setComments={setComments} commentCount={commentCount} setCommentCount={setCommentCount} 
        bookshelf = {bookshelf} setBookshelf={setBookshelf} newBookshelf={newBookshelf} setNewBookshelf={setNewBookshelf} handleNewBookshelfAdd={handleNewBookshelfAdd} handleBookshelfChange={handleBookshelfChange}/>}
      </div>
    </div>
  );
}

export default App;
