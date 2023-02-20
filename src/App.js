// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" home="My Home" />
      {/* <div className="container">
        <About />
      </div> */}
      <div className="container my-5">
        <TextForm heading="Welcome To TextUtils" />
      </div>
    </>
  );
}

export default App;
