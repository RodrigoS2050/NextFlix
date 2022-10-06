import Head from "next/head";
import React, { ReactElement } from "react";
import Footer from "../Footer";
import Header from "../Header";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>NextFlix</title>
        <link rel="shortcut icon" href="/netflix.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
