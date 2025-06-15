import { useEffect, useState } from "react";

const images = [
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
  "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
  "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
];

const ImageSlider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      loadNextImage();
    }, 3000);

    return () => {
      clearInterval(i);
    };
  }, []);

  const loadNextImage = () => {
    setActive((active) => (active + 1) % images.length);
  };
  const loadPrevImage = () => {
    setActive((active) => (active - 1 < 0 ? images.length - 1 : active - 1));
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginTop: 20,
      }}
    >
      <img
        src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png"
        alt="left icon"
        width={50}
        height={50}
        style={{
          cursor: "pointer",
        }}
        onClick={() => loadPrevImage()}
      />
      <img src={images[active]} alt="slider-image" width={1400} height={400} />
      <img
        src="https://www.iconpacks.net/icons/2/free-arrow-right-icon-3098-thumb.png"
        alt="right icon"
        width={50}
        height={50}
        style={{ cursor: "pointer" }}
        onClick={() => loadNextImage()}
      />
    </div>
  );
};

export default ImageSlider;
