import styled from "styled-components";

export const ContainerProductsFeatured = styled.section`
  flex-direction: column;
  min-height: 400px;
  background-color: grey;
  padding-left: 1.5%;

  @media screen and (min-width: 769px) {
    margin-left: 175px;
  }
`;

export const WrapperProductos = styled.div`
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: auto;
  gap: 35px;
`;
export const CardProducts = styled.div`
  display: flex;
  align-items: center;
  min-width: 350px;
  min-height: 300px;
  max-width: 400px;
  border-radius: 5px;
  border: 1px solid white;
  scroll-snap-align: start;
  margin: 10px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.75);
`;

export const Images = styled.div`
  overflow: hidden;
  width: 70%;
`;

export const TextWrapper = styled.div`
  padding-left: 5px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: center;
  b {
    color: darkorange;
  }
`;
export const BtnAdd = styled.button`
  border: none;
  background-color: greenyellow;
  color: black;
  padding: 5px;
  font-size: 0.8rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: 500;
  border-radius: 3px;
  transition: 300ms;
  cursor: pointer;
  margin-top: 5px;
  &:active {
    transform: scale(0.9);
  }
`;
