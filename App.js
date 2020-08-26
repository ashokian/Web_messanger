import React, { useState,useEffect } from 'react';
import { Button,FormControl,InputLabel,Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const[input,setInput]=useState('');//for chat to be in current state
  const[messages,setMessages]=useState([]);
  const[username,setUsername]=useState('');
  console.log(username);

  useEffect(()=>{
  db.collection("users").orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id, message:doc.data()})))
    });
  },[])

  useEffect(() => {
    setUsername(prompt('please enter your name'));

  }, [])


  const sendMessages=(event)=>{
    event.preventDefault();

    db.collection('users').add({
      
        message:input,
        username:username,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      
    })
   
    setInput('');
  }
  return (
    <div className="App">
      <img src="data:image/png;base64,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"/>
    <h1>Welcome to my Web chat</h1>
  <h2>Welcome {username}</h2>
    <form className='app_style'>
    <FormControl className="app_Formcontrol">
  
  <Input className="app_input" placeholder="Enter the message" value={input} onChange={event=>setInput(event.target.value)} />
 
    <IconButton className="app_icon" disbaled={!input} variant="contained" color="primary" type="submit" onClick={sendMessages}><SendIcon></SendIcon>

    </IconButton>
   
  
    </FormControl>
    </form>
    <FlipMove>
    {

      messages.map(({id,message})=>(
        <Message key={id} username={username} message={message}/>
   
      ))
    }
  </FlipMove>

    </div>
  );
}

export default App;
