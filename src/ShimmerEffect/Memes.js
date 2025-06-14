import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import ShimmerEffect from "./ShimmerEffect";

const Memes = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.body.scrollHeight - 50
    ) {
      fetchMemes();
    }
  };

  useEffect(function () {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();

    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        padding: "20px",
      }}
    >
      {memes.map((meme, i) => {
        return <MemeCard key={i} meme={meme} />;
      })}

      {showShimmer && <ShimmerEffect />}
    </div>
  );
};

export default Memes;
