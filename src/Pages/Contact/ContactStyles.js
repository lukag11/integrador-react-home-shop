import styled from "styled-components";

export const ContainerContact = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: darkgray;
  form {
    width: 60%;
    justify-content: center;
    padding-top: 5%;
    display: flex;
    flex-direction: column;
  }

  label {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    text-transform: uppercase;
    margin-bottom: 15px;
    color: black;
  }
  input {
    border: 1px solid grey;
    border-radius: 15px;
    width: 50%;
    padding: 15px;
    margin-bottom: 15px;
  }
  textarea {
    border: 1px solid grey;
    border-radius: 15px;
    width: 50%;
    padding: 15px;
    margin-bottom: 15px;
  }
  button {
    width: 50%;
    margin-left: 1.5%;
    padding: 25px;
  }

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    form {
      margin-top: 15%;
      width: 100vw;
      margin-right: 0;
      align-self: center;
    }
    input {
      width: 80%;
    }
    button {
      width: 90%;
    }
    textarea {
      width: 80%;
    }
  }
`;

export const InputContacto = styled.input`
  border: 1px solid grey;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 15px;
`;

export const ValidateButton = styled.button`
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: black;
  font-family: Arial;
  font-size: 17px;
  padding: 12px 26px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
`;
