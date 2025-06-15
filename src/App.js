import { BrowserRouter, Route, Routes } from "react-router-dom";
import Memes from "./ShimmerEffect/Memes";
import Accordion from "./Accordion/Accordion";
import ImageSlider from "./ImageSlider/ImageSliderAnimation";

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
        <h4
          style={{
            color: "white",
            marginTop: 0,
            marginBottom: 0,
            marginRight: 20,
          }}
        >
          LLD Learning
        </h4>
        <nav>
          <a
            style={{
              color: "white",
              marginTop: 0,
              marginBottom: 0,
              marginRight: 20,
            }}
            href="/"
          >
            Memes
          </a>
          <a
            style={{
              color: "white",
              marginTop: 0,
              marginBottom: 0,
              marginRight: 20,
            }}
            href="/accordion"
          >
            Accordion
          </a>
          <a
            style={{
              color: "white",
              marginTop: 0,
              marginBottom: 0,
              marginRight: 20,
            }}
            href="/slider"
          >
            Image Slider
          </a>
        </nav>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Memes />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/slider" element={<ImageSlider />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
