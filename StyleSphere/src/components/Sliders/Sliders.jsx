import { useState } from "react";
import { sliderItems } from "../../data";
import "./Sliders.css"; // Import your CSS file

const Sliders = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prev) => (prev > 0 ? prev - 1 : sliderItems.length - 1));
    } else {
      setSlideIndex((prev) => (prev < sliderItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="container">
      <div className="arrow left" onClick={() => handleClick("left")}>
        <i className="arrowIcon left" />
      </div>
      <div className="wrapper" style={{ transform: `translateX(-${slideIndex * 100}vw)` }}>
        {sliderItems.map((item) => (
          <div className="slide" style={{ backgroundColor: `#${item.bg}` }} key={item.id}>
            <div className="imgContainer">
              <img src={item.img} alt={item.title} className="image" />
            </div>
            <div className="infoContainer">
              <h1 className="title">{item.title}</h1>
              <p className="desc">{item.desc}</p>
              <button className="button">SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow right" onClick={() => handleClick("right")}>
        <i className="arrowIcon right" />
      </div>
    </div>
  );
};

export default Sliders;
