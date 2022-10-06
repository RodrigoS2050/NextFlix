import React, { useState, useEffect } from "react";
import * as S from "./styles";

const Header = () => {
  const [blackHeader, setBlackHeader] = useState<boolean>(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <>
      <S.HeaderTitle
        style={
          blackHeader
            ? { backgroundColor: "#000" }
            : { backgroundColor: "transparent" }
        }
      >
        <h1>NextFlix</h1>
      </S.HeaderTitle>
    </>
  );
};

export default Header;
