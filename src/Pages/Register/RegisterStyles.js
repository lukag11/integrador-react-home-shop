import BackgroundBG from "../../assets/imgs/register/fondogris.jpg";
import { FaCircleNotch } from "react-icons/fa";
import styled from "styled-components";

export const WrapperRegister = styled.div`
  margin-top: 0px;
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
  color: black;
  text-shadow: -1px 0 1px white;
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
  background-color: white;
  max-width: 500px;
  width: 100%;

  p {
    font-size: 16px;
    color: red;
    text-align: center;
  }

  p a {
    margin-left: 8px;
    color: blue;
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
    border: 1px solid black;
    background-color: grey;
    cursor: pointer;

    transition: all ease 0.2s;
    &:disabled {
      background-color: black;
    }

    &:hover {
      background-color: green;
      color: black;
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
  font-size: 20px;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  position: relative;
  transition: all ease 0.15s;

  &:focus {
    border-color: black;
    transition: all ease 0.15s;
  }

  &::placeholder {
    transform: scale(1);
    transition: all ease 0.15s;
    position: absolute;
    text-align: left;
  }

  &:focus::placeholder {
    top: -5px;
    left: -30px;
    transform: scale(0.6);
    transition: ease-in 0.15s;
    color: black;
  }
`;

export const IconCircle = styled(FaCircleNotch)`
  color: white;
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
