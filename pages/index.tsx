import Head from "next/head";
import React, { useState, useEffect } from "react";
import api from "../api";
import FeatureMovie from "../components/FeatureMovie";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import MovieList from "../components/MovieList";
import { ApiData } from "../Types/ApiData";
//154300
const Home = () => {
  const [movieList, setMovieList] = useState<ApiData[]>([]);
  const [featureData, setFeatureData] = useState<any>("");
  useEffect(() => {
    const loadAll = async () => {
      const list = await api.getHomeList();
      setMovieList(list);
      const originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );
      let chosen = originals[0].items.results[randomChosen];
      if (chosen.backdrop_path === null) {
        randomChosen = Math.floor(
          Math.random() * originals[0].items.results.length - 1
        );
        chosen = originals[0].items.results[randomChosen];
        return chosen;
      }
      const chosenInfo = await api.getMoveInfo(`${chosen.id.toString()}`, "tv");
      setFeatureData(chosenInfo);
    };
    loadAll();
  }, []);
  return (
    <>
      <Head>
        <title>NextFlix</title>
        <link rel="shortcut icon" href="/netflix.ico" />
      </Head>
      <Header />
      {movieList.length <= 0 && <Loading />}
      {featureData && <FeatureMovie item={featureData} />}
      <section>
        {movieList.map((item, index) => (
          <MovieList key={index} title={item.title} items={item.items} />
        ))}
      </section>
      {movieList.length > 0 && <Footer />}
    </>
  );
};

export default Home;
