import styled from "styled-components";

export const UserLoggedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid darkcyan;
  margin-top: 80px;
  padding: 10px;
  background-color: green;
  position: sticky;
  top: 80px;
  z-index: 3;
  gap: 20px;

  span {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
  button {
    background-color: blue;
    font-size: 16px;
    color: white;
    padding: 5px 8px;
    border: 1px solid orangered;
    border-radius: 5px;
    cursor: pointer;
    transition: all ease 0.15s;

    &:hover {
      background-color: orange;
      border-color: red;
      color: green;
    }
  }
`;
