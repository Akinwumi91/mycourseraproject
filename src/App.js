import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Login from "./component/Login";
import {Routes, Route} from 'react-router-dom'
import Register from "./component/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

