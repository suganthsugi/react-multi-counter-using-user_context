import React, {useReducer} from 'react';
import './App.css';
import A from './components/A';
import C from './components/C';
import B from './components/D';

export const usercon=React.createContext()
function App() {
  // const ini=0;
  
  
  const [count, operate] = useReducer((state, action)=>{
    if(action.choice==="inc"){
      return state+1
    }
    if(action.choice==="dec"){
      return state-1
    }
    if(action.choice==="reset"){
      return 0
    }
  }, 0)

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <usercon.Provider value={{f1:operate, name:"hii"}}>
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
