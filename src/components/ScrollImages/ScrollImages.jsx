import React from "react";

import {
  WrapperScrollContainer,
  WrapperScrollCard,
  ImagesCard,
  ScrollTitle,
  SpanSpace,
} from "./ScrollImagesStyles";
import Electrolux from "./img/electrolux.png";
import Lg from "./img/lg.png";
import Sony from "./img/sony.png";
import Whirpool from "./img/whirlpool.png";
import Phillips from "./img/phillips.png";
const ScrollImages = () => {
  return (
    <>
      <WrapperScrollContainer>
        <ScrollTitle>Algunas de Nuestras Marcas</ScrollTitle>
        <WrapperScrollCard>
          <ImagesCard image={Electrolux}></ImagesCard>
          <ImagesCard image={Lg}></ImagesCard>
          <ImagesCard image={Sony}></ImagesCard>
          <ImagesCard image={Whirpool}></ImagesCard>
          <ImagesCard image={Phillips}></ImagesCard>
        </WrapperScrollCard>
        <SpanSpace></SpanSpace>
      </WrapperScrollContainer>
    </>
  );
};

export default ScrollImages;
