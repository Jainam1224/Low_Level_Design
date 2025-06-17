import { BrowserRouter, Route, Routes } from "react-router-dom";
import Memes from "./ShimmerEffect/Memes";
import Accordion from "./Accordion/Accordion";
import ImageSlider from "./ImageSlider/ImageSliderAnimation";
import Pagination from "./Pagination/Pagination";

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
          <a
            style={{
              color: "white",
              marginTop: 0,
              marginBottom: 0,
              marginRight: 20,
            }}
            href="/pagination"
          >
            Pagination
          </a>
        </nav>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Memes />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/slider" element={<ImageSlider />} />
          <Route path="/pagination" element={<Pagination />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
