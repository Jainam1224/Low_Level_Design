import { BrowserRouter, Route, Routes } from "react-router-dom";
import Memes from "./ShimmerEffect/Memes";

function App() {
  return (
    <div>
      <header
        style={{
          display: "flex",
          backgroundColor: "black",
          padding: 20,
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
        }}
      >
        <h4 style={{ color: "white", margin: 0 }}>LLD Learning</h4>
        <nav>
          <a style={{ color: "white", margin: 0 }} href="/">
            Memes{" "}
          </a>
        </nav>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Memes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
