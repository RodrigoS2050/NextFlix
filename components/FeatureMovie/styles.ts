import styled from "styled-components";

export const Featured = styled.section`
  height: 85vh;
  background-size: cover;
  background-position: "center";
  @media (max-width: 768px) {
    height: 70vh;
  }
`;

export const VerticalBlur = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;
export const HorizontalBlur = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 15%, transparent);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`;

export const MovieName = styled.h1`
  font-size: 60px;
  font-weight: bold;
  max-width: 55%;
  line-height: 1;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const MovieInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  display: flex;
  gap: 15px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const MoviePoints = styled.p`
  color: #46d369;
`;

export const MovieDescription = styled.div`
  margin: 15px 0;
  font-size: 20px;
  color: #999;
  max-width: 40%;
  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }
`;

export const WatchButton = styled.button`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  opacity: 1;
  transition: all ease 0.2s;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const MyListButton = styled.button`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  opacity: 1;
  transition: all ease 0.2s;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const MovieGenres = styled.p`
  margin-top: 15px;
  font-size: 18px;
  color: #999;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
