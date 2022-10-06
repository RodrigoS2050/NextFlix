import React, { useState } from "react";
import { Movie } from "../../Types/Movie";
import * as S from "./styles";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type Props = {
  title: string;
  items: {
    results: Movie[];
  };
};

const MovieList = ({ title, items }: Props) => {
  const [scrollX, setScrollX] = useState(0);
  function handleLeftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }
  function handRighttArrow() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150;
    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }
    setScrollX(x);
  }

  return (
    <S.ListContainer>
      <S.Title>{title}</S.Title>
      <S.MovieLeft onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </S.MovieLeft>
      <S.MovieRight onClick={handRighttArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </S.MovieRight>
      <S.ListArea>
        <S.List
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, index) => (
              <S.ListItem key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_name}
                />
              </S.ListItem>
            ))}
        </S.List>
      </S.ListArea>
    </S.ListContainer>
  );
};

export default MovieList;
