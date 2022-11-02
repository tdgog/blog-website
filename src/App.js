import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation";
import Home from "./pages/Home";
import Programming from "./pages/Programming";

function PageBackground({ children }) {
    return <div className='bg-zinc-700 w-screen h-screen'>
        <div className='relative z-50'>
            {children}
        </div>

        <div className='stripe-base bg-[#FFCC00] z-1 -skew-x-[45deg]' />
        <div className='stripe-base bg-[#DD0000] z-10 -translate-x-[100px] -skew-x-[45deg]' />
        <div className='stripe-base bg-[#111] z-30 -translate-x-[200px] -skew-x-[45deg]' />

        <div className='stripe-base bg-zinc-700 z-40 -translate-x-[300px] -skew-x-[45deg]' />
            
        <div className='stripe-base bg-[#FFCC00] z-2 skew-x-[45deg]' />
        <div className='stripe-base bg-[#DD0000] z-20 -translate-x-[100px] skew-x-[45deg]' />
        <div className='stripe-base bg-[#111] z-30 -translate-x-[200px] skew-x-[45deg]' />

        <div className='stripe-base bg-zinc-700 z-40 -translate-x-[300px] skew-x-[45deg]' />

        <div className='stripe-base bg-transparent z-40 -translate-x-[300px] -skew-x-[45deg]' />
    </div>
}

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
