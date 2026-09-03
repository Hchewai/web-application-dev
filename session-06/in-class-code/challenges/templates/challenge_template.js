import React from "react";

function SomeFunction({}) {
  //   return ();
}

function App() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default App;
