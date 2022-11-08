import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation";
import PageBackground from "./components/PageBackground";
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import JavaScript from "./pages/programming/Javascript";
import importAll from "./utils/ImportAll";

function App() {
    const blogs = importAll(require.context('./blogs', false, /\.js$/));

    return <HashRouter>
        <PageBackground>
            <div className='flex h-screen flex-col'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/programming' element={<Programming />} />
                        <Route path='/programming/js' element={<JavaScript />} /> 

                    {/* Blog routes */}
                    {blogs.map((blog, i) => <Route
                        key={i}
                        path={'/blogs/' + blog.name}
                        element={<blog.default />}
                    />)}
                </Routes>
            </div>
        </PageBackground>
    </HashRouter>
}

export default App;
