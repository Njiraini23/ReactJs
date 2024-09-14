import React, {Component} from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends Component {
  rconst
render() {
  return (
    <div className="App">
      <UserProvider value="Kennedy">
         <ComponentC />
      </UserProvider>
    
    </div>
  )
}
  
}
export default App;
