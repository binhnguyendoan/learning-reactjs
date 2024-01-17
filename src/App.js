
import { Component } from 'react';
import './App.css';
import Youtubelist from './components/youtube/Youtubelist';
import Hello from './components/componentDidMount/Hello';


function App() {
  const name = "Binh Nguyen";
  return (
    <div>
    <Youtubelist>
      {name}
    </Youtubelist>
    <Hello></Hello>

    </div>
  );
}




export default App;
