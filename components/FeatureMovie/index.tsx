import React from "react";
import { Movie } from "../../Types/Movie";
import * as S from "./styles";

type Props = {
  item: Movie;
};

const FeatureMovie = ({ item }: Props) => {
  const firstDate = new Date(item.first_air_date);
  const genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  let description = item.overview;
  if (window.screen.width < 768 && description.length > 200) {
    description = description.substring(0, 200) + "...";
  }
  return (
    <S.Featured
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <S.VerticalBlur>
        <S.HorizontalBlur>
          <S.MovieName>{item.original_name}</S.MovieName>
          <S.MovieInfo>
            <S.MoviePoints>{item.vote_average.toFixed(1)} pontos</S.MoviePoints>
            <p>{firstDate.getFullYear()}</p>
            <p>
              {item.number_of_seasons > 1
                ? `${item.number_of_seasons} temporadas`
                : `${item.number_of_seasons} temporada`}
            </p>
          </S.MovieInfo>
          <S.MovieDescription>{description}</S.MovieDescription>
          <div>
            <S.WatchButton>► Assistir</S.WatchButton>
            <S.MyListButton>+ Minha Lista</S.MyListButton>
          </div>
          <S.MovieGenres>Gêneros: {genres.join(", ")}</S.MovieGenres>
        </S.HorizontalBlur>
      </S.VerticalBlur>
    </S.Featured>
  );
};

export default FeatureMovie;
