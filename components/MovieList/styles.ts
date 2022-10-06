import styled from "styled-components";

export const ListContainer = styled.div`
  margin-bottom: 30px;
`;

export const MovieLeft = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
`;

export const MovieRight = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
`;

export const Title = styled.h2`
  margin: 0 0 0 30px;
`;

export const ListArea = styled.div`
  overflow-x: hidden;
`;

export const List = styled.div`
  transition: all ease 0.4s;
`;

export const ListItem = styled.div`
  display: inline-block;
  img {
    transform: scale(0.9);
    transition: all ease 0.2s;
    &:hover {
      transform: scale(1);
    }
  }
`;
