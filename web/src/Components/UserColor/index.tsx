import React, {useState, useEffect, ChangeEvent} from 'react';
import ColorPicker from "react-pick-color";
import './style.css'

interface User{
  first_name: String,
  last_name: String,
  participation: Number
}

const UserColor = ({first_name,last_name,participation}:User) => {

  const [userData, setUserData] = useState({
    first_name,
    last_name,
    participation
  });
  const [color, setColor] = useState("#ffffff");

  function initModal(){
    setUserData({first_name, last_name, participation});
  }
  useEffect(()=>{
    initModal();
  }, [])

  useEffect(()=>{
    initModal();
  }, [first_name]);
  
  useEffect(()=>{
    initModal();
  }, [last_name]);
  
  useEffect(()=>{
    initModal();
  }, [participation]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target;
    setUserData({...userData, [name]: value});
  }

  return (
    <>
      <a href="#abrirModal"><button id="btn_send" onClick={()=>{}}>SEND</button></a>
      <div id="abrirModal" className="modal">
        <a href="#fechar" title="Fechar" className="fechar">x</a>
        <div id="container1">
            <div id="container-left1">
              <div className={"container2"}>
                <label className={"textLabel"}>Enter your first name</label>
                <input className={"inputDecorator"} placeholder="example: Vitória Carolina" type="text" name="first_name" id="first_name" onChange={handleInputChange} value={String(userData.first_name)}/>
                <label className={"textLabel"}>Enter your last name</label>
                <input className={"inputDecorator"} placeholder="example: Santos" type="text" name="last_name" id="last_name" onChange={handleInputChange} value={String(userData.last_name)}/>
                <label className={"textLabel"}>Enter your participation</label>
                <input className={"inputDecorator"} placeholder="%" type="number" name="participation" id="participation" onChange={handleInputChange} value={Number(userData.participation)}/>
                <button>register</button>
              </div>
            </div>
          <div id="container-right1">
            <div className={"container2"}>
              <label className={"textLabel"}>Select a color for the chart:</label>
              <ColorPicker color={color} onChange={(color) => setColor(color.hex)}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserColor;