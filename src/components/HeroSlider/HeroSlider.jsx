import React from "react";
import HeroSlider, { Slide } from "hero-slider";

import "./HeroSlider.scss";

function Heroslider({ imageList = [], ...props }) {
    return (
    <HeroSlider
      height={"395px"}
      autoplay={{
        autoplayDuration: 8000,
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      {imageList.map((image, index) => {
        return (
          <Slide
            key={index}
            background={{
                backgroundImageSrc: image,
                backgroundAttachment: "fixed"
              }}
          />
        );
      })}
    </HeroSlider>
  );
}

export default Heroslider;
