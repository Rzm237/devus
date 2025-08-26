import "./App.css";
import Navbar from "./components/navbar";
import Bottombar from "./components/bottombar";
import Home from "./components/home";

function App() {
  return (
    <div className="2xl:max-w-[1530px] ">
      <Navbar />
      <div className="pt-4">
        <Home />
      </div>
      <Bottombar />
    </div>
  );
}

export default App;
