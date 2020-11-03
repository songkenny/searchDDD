import React, { useState, useEffect } from 'react';


function App () {
  const [position, setPosition] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position)=>setPosition([position.coords.latitude, position.coords.longitude]), (err) => conosle.log(err));
  }, []);

  return (
  <div>
    My Current Position: {position[0]}, {position[1]}
    <button></button>
  </div>
  );
  }

  export default App;
