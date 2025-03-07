import { useState } from 'react';
import './App.css'

function App() {
      const [name,setName] = useState("");
      const [message, setMessage] = useState("");

      const getGreeting = async() => {
        if(!name){
          setMessage("Please enter a name.");
          return;
        }

        try {
          const response = await fetch(`http://localhost:3000/api/greet?name=${name}`);
          const data = await response.json();
          setMessage(data.message || data.error)
        } catch (error) {
          setMessage("Error fetching greetings")
        }

      }
      
 
  return (
    <div >
      <h1>Greeting App</h1>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)} style={{height:"30px", margin:"0 2px"}}/>
      <button onClick={getGreeting}>Get Greeting</button>
      <h2>{message}</h2>

    </div>
  
  )
}

export default App
