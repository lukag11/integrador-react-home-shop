import styled, { keyframes } from "styled-components";

export const NavBarMenu = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  width: 100%;
  min-height: 80px;
  position: fixed;
  z-index: 2;
  a {
    text-decoration: none;
  }
  @media screen and (min-width: 769px) {
    justify-content: space-between;
  }
`;

export const MenuToggle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 10px;
  user-select: none;
  z-index: 2;
  width: 8%;
  height: 5%;
  ul li {
    width: 150px;
  }

  @media screen and (min-width: 769px) {
    width: 168px;
    padding-top: 250px;
  }
`;

export const InputMenu = styled.input`
  border: 1px solid red;
  display: block;
  width: 40px;
  height: 5vh;
  position: absolute;
  left: -12px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;

  :checked ~ ul {
    transform: none;
  }
  :checked ~ span {
    opacity: 1;

    transform: rotate(45deg) translate(-10px, -4px);
    background: red;
    z-index: 2;
  }
  :checked ~ span:nth-last-child(3) {
    opacity: 0;

    transform: rotate(0deg) scale(0.2, 0.2);
  }
  :checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
`;

export const HamburgerIcon = styled.span`
  border: 1px solid white;
  display: block;
  width: 40px;
  height: 3px;
  margin-top: ${(props) => props.margin};
  margin-left: -50%;
  position: absolute;
  background: blue;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 4px;
  transition: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const MenuPrincipal = styled.ul`
  display: flex;
  flex-direction: column;
  width: 55px;
  padding: 450px 100px 0px 100px;
  list-style-type: none;
  background-color: #d5d8dc;
  transform-origin: 0% 0%;
  transform: translate(-105%, 0);
  transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  z-index: 1;

  li {
    display: flex;
    padding-left: 2px;
    background-color: black;
    border: 1px solid blue;
    border-radius: 12px;
    padding-top: 15px;
    font-size: 1rem;
    color: white;
    font-family: "Courier New", Courier, monospace;
    font-weight: 600;
    position: relative;
    width: 100%;
    display: flex;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-bottom: 15px;
  }

  li:hover {
    background-color: white;
    color: black;
  }

  @media screen and (min-width: 769px) {
    transform: none;
    position: fixed;
    padding-bottom: 620px;
    margin-bottom: 97px;
    margin-top: 350px;

    transform: translate(0, 0);
    margin-left: -70px;
  }
`;

export const LogoPrincipal = styled.img`
  height: 120px;
  width: 120px;
  display: none;
  background-color: black;

  @media screen and (min-width: 769px) {
    display: flex;
    color: white;
    margin-bottom: 80%;
    padding-top: 100%;

    font-size: 1.5rem;
  }
`;
export const ContainerUser = styled.li`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const animation = keyframes`
 from {
      transform: translateX(90%);
    }
    to {
      transform: translateX(-100%);
    }
`;
export const UserName = styled.p`
  transform: translateX(90%);
  width: 200px;
  animation: ${animation} 8s linear infinite;
`;

export const ContainerProducts = styled.li`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ul {
    width: 150px;
    height: 0;
    transform: scaleY(0);
    transition: 200ms;
    transform-origin: top;
    z-index: 2;
    margin-bottom: 33px;
    padding-left: 15px;
  }
  ul li {
    background-color: #2980b9;
    color: black;
    position: inherit;
    list-style-type: none;
    font-size: 0.8rem;
    margin: 0px;
    display: flex;
    max-width: 100px;
  }
`;

export const CheckboxProducts = styled.input`
  width: 150px;
  color: white;
  z-index: 1;
  position: absolute;
  opacity: 0;
  cursor: pointer;

  :checked ~ #DropDrawList {
    transform: rotate(90deg) translate(0px, -5px);
  }

  :checked ~ ul {
    transform: scaleY(1);
  }
`;

export const Logo = styled.div`
  h1 {
    display: block;
    text-align: center;
    color: white;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 1rem;
    position: relative;
    z-index: 5;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const Carrito = styled.div`
  cursor: pointer;
  @media screen and (min-width: 769px) {
    padding-right: 30px;
  }
  span {
    background-color: green;
    color: white;
    font-weight: 600;
    text-align: center;
    border-radius: 10px;
    width: 20px;
    text-align: center;
    font-size: 0.9rem;
    position: absolute;
    z-index: 2;
    margin-left: 1px;
    padding-bottom: 1px;
  }
  i {
    color: white;
  }
`;
