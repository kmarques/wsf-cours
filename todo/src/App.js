import React, { useEffect, useState } from 'react';
import Board from "./components/Board";

function App() {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);

  // ComponentDidMount
  useEffect(
    function() {
      console.log("App mounted");
      
      fetch("http://localhost:3004/boards")
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setBoards(data)
      });
    },
    []
  );

  return (
    <div>
      {
        !loading && boards.map(board => <Board {...board}/>)
      }
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
