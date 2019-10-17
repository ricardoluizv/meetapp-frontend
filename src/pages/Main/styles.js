import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: #7159c1;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 315px;
  display: flex;
  flex-direction: column;

  > input {
    margin-top: 10px;
  }

  > a {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
  }

  > button {
    margin-top: 10px;
  }
`;

export const Line = styled.div`
  margin-top: 2px;

  > div {
    width: 50%;
  }

  > button {
    width: 315px;
  }

  > input {
    width: 315px;
  }
`;
