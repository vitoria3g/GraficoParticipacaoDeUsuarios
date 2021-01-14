import React, {useState, ChangeEvent} from 'react';
import './App.css';
import Graphic from './Components/Graphic';
import UserList from './Components/UserList';
import UserColor from './Components/UserColor';

function App() {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    participation: 0
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target;
    setUserData({...userData, [name]: value});
  }

  return (
    <>
      <div id="header">
        <input placeholder="First name" type="text" id="first_name" name="first_name" onChange={handleInputChange}/>
        <input placeholder="Last name" type="text" id="last_name" name="last_name" onChange={handleInputChange}/>
        <input placeholder="Participation" type="number" id="participation" name="participation" onChange={handleInputChange}/>
        <UserColor first_name={userData.first_name} last_name={userData.last_name} participation={userData.participation}/>
      </div>
      <div id="title">
          <h1>DATA</h1>
      </div>
      <div id="sub_title">
          <label>blá blá blá</label>
      </div>

      <div id="container">
        <div id="container-left">
          <UserList/>
        </div>
        <div id="container-right"> 
          <Graphic/>
        </div> 
      </div>

      <div id="footer"></div>
    </>
  );
}

export default App;
