import React, { Component } from "react";
import "./App.css";
import StoreDetail from "./pages/StoreDetail";
import "./components/Dropdown.css";
import DropDown2 from "./components/Dropdown2";

// import StarRating from "./StarRating";

function App() {
  return (
    <div className="App">
      <StoreDetail />
      <div
        style={{
          margin: 20,
        }}
      >
        <DropDown2 />
      </div>
    </div>
  );
}

// const App = (props) => {
//   const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

//   return (
//     <div id="app">
//       <StoreDetail></StoreDetail>
//       <button onClick={(e) => setDropdownVisibility(!dropdownVisibility)}>
//         {dropdownVisibility ? "Close" : "Open"}
//       </button>
//       <Dropdown visibility={dropdownVisibility}>
//         <ul>
//           <li>item 1</li>
//           <li>item 2</li>
//           <li>item 3</li>
//           <li>item 4</li>
//         </ul>
//       </Dropdown>
//     </div>
//   );
// };

export default App;
