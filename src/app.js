import React, { useState } from "react";
import reactDOM from "react-dom";
import "./styles/app.sass";
import Header from "./HearderComponent/Header";
import Content from "./PageContent/Content";

function App() {
  return (
    <div className="content">
      <Header></Header>
      <Content></Content>
    </div>
  );
}
// const App = () => {
//   return (
//     <div class="container">
//       <Header></Header>
//       <input
//         type="text"
//         // className="search-bar"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value)}
//         // value={query}
//         // onKeyPress={search}
//       />

//       {/* <div id="navigation-bar">
//         <nav>
//           <ul>
//             <li>
//               <a href="#" id="logo">
//                 LOGO
//               </a>
//             </li>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Portfolio</a>
//             </li>
//             <li>
//               <a href="#">Services</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//             <a href="#" id="menu-icon"></a>
//           </ul>
//         </nav>
//       </div> */}
//     </div>
//   );
// };

reactDOM.render(<App />, document.getElementById("root"));
