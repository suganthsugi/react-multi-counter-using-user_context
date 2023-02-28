import React, {useReducer} from 'react';
import './App.css';
import A from './components/A';
import C from './components/C';
import B from './components/D';

export const usercon=React.createContext()
function App() {
  const ini=0;
  
  const reducer = (state, action)=>{
    if(action.choice==="inc"){
      return state+1
    }
    if(action.choice==="dec"){
      return state-1
    }
    if(action.choice==="reset"){
      return 0
    }
  }
  
  const [count, operate] = useReducer(reducer, ini)

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <usercon.Provider value={operate}>
      <A />
      <br />
      <B />
      <br />
      <C />
    </usercon.Provider>
    </div>
  );
}

export default App;
