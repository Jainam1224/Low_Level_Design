import { useEffect, useState } from "react";

const images = [
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
  "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
  "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
];

const ImageSlider = () => {
  const [active, setActive] = useState(1); // Start at first real image
  const [transition, setTransition] = useState(true);

  // Clone last and first for looping effect
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const handleNext = () => {
    setActive((prev) => prev + 1);
    setTransition(true);
  };

  const handlePrev = () => {
    setActive((prev) => prev - 1);
    setTransition(true);
  };

  const handleTransitionEnd = () => {
    // Jump back from cloned first to real first
    if (active === extendedImages.length - 1) {
      setTransition(false);
      setActive(1);
    }
    // Jump forward from cloned last to real last
    else if (active === 0) {
      setTransition(false);
      setActive(extendedImages.length - 2);
    }
  };

  // Ensures "no animation" jump happens smoothly
  useEffect(() => {
    if (!transition) {
      const timer = setTimeout(() => {
        setTransition(true);
      }, 50); // short timeout to ensure DOM updates
      return () => clearTimeout(timer);
    }
  }, [transition]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginTop: 20,
      }}
    >
      <img
        src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png"
        alt="left icon"
        width={50}
        height={50}
        style={{ cursor: "pointer" }}
        onClick={handlePrev}
      />
      <div
        style={{
          width: "1400px",
          height: "400px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            width: `${extendedImages.length * 1400}px`,
            transform: `translateX(-${active * 1400}px)`,
            transition: transition ? "transform 0.5s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`image-${idx}`}
              width={1400}
              height={400}
              style={{ objectFit: "cover" }}
            />
          ))}
        </div>
      </div>
      <img
        src="https://www.iconpacks.net/icons/2/free-arrow-right-icon-3098-thumb.png"
        alt="right icon"
        width={50}
        height={50}
        style={{ cursor: "pointer" }}
        onClick={handleNext}
      />
    </div>
  );
};

export default ImageSlider;
