import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation";
import PageBackground from "./components/PageBackground";
import Home from "./pages/Home";
import Programming from "./pages/Programming";

function App() {
    return <HashRouter>
        <PageBackground>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/programming' element={<Programming />} />
            </Routes>
        </PageBackground>
    </HashRouter>
}

export default App;
