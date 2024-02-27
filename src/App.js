 
import { BrowserRouter } from "react-router-dom";
// import { Books } from "./component/Books";
// import { Update } from "./component/Update";
import { Add } from "./component/Add";
import { Home } from "./component/Home";
import Vocab from "./component/Vocab";
import Read from "./component/Read";
import Hira from "./component/Hira";
import Kata from "./component/Kata";
import VocabMenu from "./component/VocabMenu";
  

import { Routes, Route } from "react-router-dom";
import "./style.css";
import Results from "./component/Results";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/books" element={<Books/>} /> */}
          <Route path="/add" element={<Add/>} />
          {/* <Route path="/update/:id" element={<Update/>} /> */}
          <Route path="/read/:id" element={<Read/>} />
          <Route path="/vocab/:id" element={<Vocab/>} />
          <Route path="/hira" element={<Hira/>} />
          <Route path="/Results" element={<Results/>} />
          <Route path="/Kata" element={<Kata/>} />
          <Route path="/VocabMenu" element={<VocabMenu/>} />
 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
