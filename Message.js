import React, { forwardRef } from 'react'
import Card from '@material-ui/core/Card';


import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Message.css';

const Message=forwardRef(({message,username},ref)=> {
    const ifuser=username===message.username;
    return (
        <div  ref= {ref} className={`message ${ifuser && 'message_user'}`}>
         <Card  className={ifuser ? 'message_usercard':'message_guestcard'}>
      <CardContent>
        <Typography
        variant="h6"
        >
        
         
        {!ifuser && `${message.username}:`||'unkown user'} {message.message}
        </Typography>
        
       
      </CardContent>
      
    </Card>
    
        </div>

    )
})

export default Message
 