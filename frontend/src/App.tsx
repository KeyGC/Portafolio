import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="container ">
                    <About />
                </div>
            </div>

        </>
    );
}

export default App;