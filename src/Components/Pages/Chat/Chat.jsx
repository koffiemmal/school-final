// src/components/Chat.js
import React, { useState, useEffect } from 'react';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');



  
  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          />
        <button /* onClick={handleSendMessage} */>Envoyer</button>
      </div>
    </div>
  );
};

export default Chat;



/*   const handleSendMessage = () => {
    // Envoyer le nouveau message au backend
    axios.post('http://localhost:3001/messages', { user: 'étudiant', text: newMessage })
      .then(() => {
        // Rafraîchir la liste des messages après l'envoi
        axios.get('http://localhost:3001/messages')
          .then(response => setMessages(response.data))
          .catch(error => console.error('Erreur lors de la récupération des messages', error));
      })
      .catch(error => console.error('Erreur lors de l\'envoi du message', error));

    setNewMessage('');
  };  */