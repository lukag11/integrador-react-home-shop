import styled from "styled-components";

export const WrapperScrollContainer = styled.section`
  padding-top: 50px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  background-color: #262a30;
  @media screen and (min-width: 769px) {
    margin-left: 175px;
  }
`;

export const ScrollTitle = styled.h2`
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 769px) {
    font-size: 1.5rem;
  }
`;

export const SpanSpace = styled.span`
  padding: 10px;
  margin: 10px;
  color: white;
`;

export const WrapperScrollCard = styled.div`
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: auto;
  gap: 25px;
  @media screen and (min-width: 769px) {
    justify-content: center;
  }
`;

export const ImagesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  scroll-snap-align: start;
  border-radius: 10px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: 100%;
  background-color: white;
  min-width: 200px;
  width: 200px;
  height: 200px;
  transition: 500ms;
  border: 1px solid black;
`;
