import {useEffect} from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import {init, subscribeChat, subscribeInitialMessage} from '../socketApi'
import {useChat} from '../context/ChatContext'
import iphone from '../bgImage/iphne2.png'
import styles from './styles.module.css'

function Container() {
 const {setMessages} = useChat();
  useEffect(() => { 
    init();
    subscribeInitialMessage("");
    subscribeInitialMessage((messages) => {
      setMessages(messages);
    })
    
    subscribeChat((message)=>{
      setMessages((prevState)=>[...prevState, {message, fromMe: true}]);
    });
  }, []) 

  

  return (
    <div className="App">
        <div className={styles.bgImage}>
          <img src={iphone}></img>
        </div>
        <ChatList />
        <ChatForm />
    </div>
  )
}

export default Container