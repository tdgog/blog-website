import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation";
import Home from "./pages/Home";
import Programming from "./pages/Programming";

function App() {
  return <HashRouter>
    <div className='bg-zinc-700 w-screen h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/programming' element={<Programming />} />
      </Routes>
    </div>
  </HashRouter>
}

export default App;
