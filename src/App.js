import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation";
import PageBackground from "./components/PageBackground";
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import importAll from "./utils/ImportAll";

function App() {
    const blogs = importAll(require.context('./blogs', false, /\.js$/));

    return <HashRouter>
        <PageBackground>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/programming' element={<Programming />} />

                {/* Blog routes */}
                {blogs.map((blog, i) => <Route
                    key={i}
                    path={'/blogs/' + blog.name}
                    element={<blog.default />}
                />)}
            </Routes>
        </PageBackground>
    </HashRouter>
}

export default App;
