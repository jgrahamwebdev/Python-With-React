import './App.css';
import { useState, useEffect } from 'react';

function App() {

  // State Variable
  const [data, setData]= useState([{}])

  // Fetching data from the Back-End
  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div className="App">
      {data.members.map((member, i) => (
        <p key={i}>{member}</p>
      ))}
    </div>
  );
}

export default App;
