import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './App.css';

export default function App() {
  const [Count, setCount] = useState(0);
  const increaseCount=()=>{
    setCount(Count+1);
  }
  //run a check is metamask is installed 
  if (typeof window.ethereum !== 'undefined') {
    console.log('Metamask is installed!');
  }
  //using useState to set button status
  const [btnConnect, setbtnConnect] = useState(false);
  //requesting user to connect onclick of the button
  const btnConnector =()=> {
    setbtnConnect(ethereum.request({ method: 'eth_requestAccounts' }));
 }
 

  return (
    <div className="App">
      <h1>Buy Clinton a coffee {Count}</h1>
      <div className="buttonsComponent">
      <button class="countButton" onClick={increaseCount}>Click to Add count</button> 
    
    <button class="enableEthereumButton" onClick={btnConnector}>Connect to Metamask</button>
      </div>
     <div className="yourNameForm">
     <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
     </div>

     <div className="sendMessageForm">
     <form>
      <label>Write a short message for Clinton 
        <input type="text" />
      </label>
    </form>
     </div>
     <div className="sendEthButtons">
     <button className="smallCoffee">Send 0.001 ETH to Clinton Ksh 195 </button>
     <button className="mediumCofee">Send 0.005 ETH to Clinton Ksh 985 </button>
     <button className="largeCofee">Send 0.01 ETH  to Clinton $16.4 </button>
     <button className="favorite Programmer">Send 0.05 ETH $82.02 </button>
     </div>

     <div className="my-footer">
      <footer className="my-simple-footer">
        Created by @Clinton_eth your all time favorite and coolest web3 developer Intern 
      </footer>
     </div>
     
    </div>

  );
}