import {useState} from 'react'
import styles from './styles.module.css'
import {sendMessage} from '../socketApi'
import {useChat} from '../context/ChatContext'

function ChatForm() {
  const [message, setMessage] = useState('');
  const { setMessages } = useChat();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessages((prevState) => [...prevState, { message }])
    sendMessage(message);
    
    setMessage("");
  }
  return (
    <div style={{position: 'absolute', top:'78%',left:'50%', marginLeft:'-157px'}}>
      <form onSubmit={handleSubmit}>
        <input  
        style={{width: '295px', backgroundColor: 'gainsboro'}} 
        className={styles.textInput} 
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Mesajı buraya giriniz.."/>
      </form>
    </div>
  )
}

export default ChatForm