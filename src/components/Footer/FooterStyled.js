import styled from "styled-components";

export const FooterWrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 15px;
  margin-top: ${(props) => props.margin};

  a {
    text-decoration: none;
  }
`;
export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const TextStyled = styled.p`
  display: flex;
  color: black;
  padding-left: 25px;
  padding-top: 0px;
  font-size: 0.7rem;
  text-transform: uppercase;
  font-family: "Times New Roman", Times, serif;
  background-color: black;
  color: white;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 15px;
  margin-top: 10px;
  text-align: flex-start;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  p {
    padding-left: 10px;
  }
`;
export const FotEncabezado = styled.p`
  text-align: center;
  background-color: white;
  padding-top: 10px;
`;
