import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './styles.css';
import db from '../firebase';
import { useStateValue } from '../stateProvider';
import firebase from 'firebase';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId && input !== '') {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
      setInput('');
    }
  };

  return (
    <div className='chatInput'>
      <form>
        <input
          placeholder={`Message ${channelName?.toLowerCase()}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type='submit' onClick={sendMessage}></Button>
      </form>
    </div>
  );
}

export default ChatInput;
