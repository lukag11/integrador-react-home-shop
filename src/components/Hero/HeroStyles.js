import styled from "styled-components";

export const WrapperHero = styled.div`
  height: 50vh;
  min-height: 350px;
  display: flex;
  padding-top: 90px;
  justify-content: center;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  border-radius: 0px 0px 10px 10px;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    margin-top: 50px;
    background-color: black;
  }
  span {
    margin: 15px;
  }
  @media screen and (min-width: 769px) {
    align-items: center;
    margin-left: 175px;
    justify-content: center;
  }
`;

export const WrapperTitle = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  z-index: 1;
  height: 45vh;
  width: 100vw;
  max-width: 900px;
  max-height: 470px;
`;

export const TitleHero = styled.h2`
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: black;
  background-color: white;
  align-items: center;
  background-color: none;
  height: 70px;
`;
