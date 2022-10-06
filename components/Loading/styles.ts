import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

const rotateLoading = keyframes`
    to{
        transform: rotate(0deg);
    }
    from{
        transform: rotate(360deg);
    }
`;

export const Loading = styled.div`
  width: 80px;
  height: 80px;
  border: 5px solid;
  border-color: #e50914 transparent transparent;
  border-radius: 50%;
  animation: ${rotateLoading} 1s linear infinite;
`;
