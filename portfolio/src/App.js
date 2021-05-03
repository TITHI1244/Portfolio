import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div id="background"></div>
      <div id="page-wrap">
        <Header />
        <Main />
        <Sidebar className="side" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
