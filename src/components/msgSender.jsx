import React, {useState}  from 'react'
import axios from 'axios';

export default function MsgSender() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendToServer = () => {
      axios.post('http://localhost:3001/get-msg', {message})
          .then(res => setResponse(res.data.message))
          .catch(() => setResponse('Error sending to server'));
  };

return (
  <div>
    <input 
    type='text'
    value={message}
    onChange={e => setMessage(e.target.value)}
    />
    <button onClick={sendToServer}>Send</button>
    <div>{response}</div>
  </div>
)
}
