// import logo from "/images/banner1.jpeg";
// import "./App.css";
import Desease from "./components/body/desease";
// import UseReducer from "./components/hooks/useReducer";
// import UseState from "./components/hooks/useReducer";
// import UseEffect from "./components/hooks/useEffect";

// import React from 'react'

const App = () => {
  return (
    <div>
        {/* <img src={logo} alt="logo" /> */}
          <h1> Welcome to SDR Cares!! </h1>
          <Desease />
          {/* <UseReducer/> */}
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
