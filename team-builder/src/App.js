import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import SignUpForm from './Form';

function App() {

  const [teamMembers, setTeamMembers] = useState({
    'root@localhost': {role:'auth', name: 'root'},
  });
  const [formData, setFormData] = useState({name: '', role: '', email: ''});
  const [wipe, setWipe] = useState(false);
  
  const onInputChange = (ev) => {
    if (wipe) {
      return true;
    }
    // live input type checking here
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });
  }

  const clearFormInfo = () => {
    console.log('clearing form');
    // debugger
    setWipe(true)
    setFormData({
      email: "",
      name: "",
      role: ""
    })
    setWipe(false)
  }
  
  return (
    <div className="App">
      <header className="App-header">
      {Object.keys(teamMembers).filter(emailAddr => emailAddr !== "root@localhost").map(emailAddr => {
        return (
          <div className="SavedTeamMember" key={emailAddr} >
            <li>{teamMembers[emailAddr].name}</li>
            <li>{teamMembers[emailAddr].role}</li>
            <li>{emailAddr}</li>
         </div>);
      })}
      <SignUpForm 
        onSubmit={setTeamMembers} 
        onChange={onInputChange} 
        teamMembers={teamMembers}
        info={formData}
        clearForm={clearFormInfo}
        />
      </header>
    </div>
  );
}

export default App;
