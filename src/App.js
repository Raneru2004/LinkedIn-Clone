import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { firebaseApp } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { login, logout } from './features/userSlice';
import Widgets from './Widgets';
import Footer from './Footer';
function App() {
  const user = useSelector(selectUser)

  const dispatch=useDispatch();
  const auth = getAuth(firebaseApp);

  useEffect(()=>{

    onAuthStateChanged(auth, (user) =>{
      if (user) {
        dispatch(
          login({
          displayName:user.displayName,
          uid: user.uid,
          email: user.email,
          photoUrl: user.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })

  },[])
  return (
    <>
    <div className="app">
      <Header />
      {!user ? 
        (
          <Login />
        ):
        (
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
      )}
      
    </div>
    <footer>
      <Footer />
    </footer>
  </>
  );
}

export default App;
