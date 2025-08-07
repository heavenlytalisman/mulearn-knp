import "./App.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import ExploreLC from "./Components/ExploreLC/ExploreLC";
import Team from "./Components/Team/Team";
import Connect from "./Components/Connect/Connect";
import Footer from "./Components/Footer/Footer";
function App() {

    return (
        <div className="appWrapper">
            <Navbar />
            <Home />
            <About />
            <Gallery />
            <ExploreLC />
            <Team />
            <Connect />
            <Footer />
        </div>
    );
}

export default App;
