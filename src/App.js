import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation";
import PageBackground from "./components/PageBackground";
import Home from "./pages/Home";
import Programming from "./pages/Programming";

function importAll(dir) {
    let files = {};
    dir.keys().map(item => {
        const diritem = dir(item);
        files[item.replace('./', '').replace('.js', '')] = <diritem.default />;
    })
    return files;
}

function App() {
    const blogs = importAll(require.context('./blogs', false, /\.js$/));

    return <HashRouter>
        <PageBackground>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/programming' element={<Programming />} />

                {/* Blog routes */}
                {Object.keys(blogs).map((blog, i) => <Route
                    key={i}
                    path={'/blogs/' + blog}
                    element={blogs[blog]}
                />)}
            </Routes>
        </PageBackground>
    </HashRouter>
}

export default App;
