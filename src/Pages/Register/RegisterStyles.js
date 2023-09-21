import BackgroundBG from "../../assets/imgs/register/fondoceleste.jpg";
import { FaCircleNotch } from "react-icons/fa";
import styled from "styled-components";

export const WrapperRegister = styled.div`
  margin-top: 80px;
  background-image: url("${BackgroundBG}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding: 40px 30px 60px 30px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 40px 20px 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px 60px 10px;
  }
`;

export const TitleReg = styled.h1`
  font-size: 48px;
  color: greenyellow;
  text-shadow: -1px 0 1px red;
  font-family: "Courier New", Courier, monospace;

  @media (max-width: 1024px) {
    font-size: 42px;
  }
  @media (max-width: 768px) {
    font-size: 38px;
  }
  @media (max-width: 480px) {
    font-size: 34px;
  }
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

export const FormularioRegister = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  align-items: center;
  gap: 20px;
  background-color: yellow;
  max-width: 500px;
  width: 100%;

  p {
    font-size: 16px;
    text-align: center;
  }

  p a {
    margin-left: 8px;
    color: black;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 480px) {
    padding: 15px;
  }

  button {
    margin-top: 40px;
    width: 100%;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 22px;
    border: 1px solid red;
    background-color: red;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
      transition: all ease-in 0.2s;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;
  border: 1px solid black;

  p {
    color: red;
  }
`;

export const RegisterLabel = styled.label`
  color: black;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const RegisterInput = styled.input`
  text-align: center;
  background-color: transparent;
  padding: 10px;
  font-size: 10px;
  width: 80%;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  position: relative;
  transition: all ease 0.15s;
`;

export const LoadIcon = styled(FaCircleNotch)`
  color: black;
  font-size: 24px;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  animation: rotate infinite 0.8s ease-in forwards;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;
