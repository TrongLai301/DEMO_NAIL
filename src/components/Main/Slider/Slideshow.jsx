import { Slide } from "react-slideshow-image";
import slideImages from "./data";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";

export default function Slideshow() {
  return (
    <div className="container">
      <Slide
        easing="ease"
        autoplay={true}
        duration={3000}
        infinite={true}
        prevArrow={
          <button className="custom-arrow" aria-label="Previous Slide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                d="M17 2L7 12l10 10"
              />
            </svg>
          </button>
        }
      >
        {slideImages.map((slide, index) => {
          return (
            <div className="slide" key={index}>
              <div
                style={{ backgroundImage: `url(${slideImages[index]})` }}
              ></div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
