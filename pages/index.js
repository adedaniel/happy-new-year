import React from "react";
import Head from "next/head";
import Wrapper from "../components/Wrapper";
import Button from "../components/button/button";
import SearchBox from "../components/SearchBox";
const displaySearch = (finalQuery) => {
  alert(finalQuery);
}

const Home = () => (
  <div>
    <Head>
      <link rel="icon" href="/icon.png" />
    </Head>
    {
      // <Wrapper />
    }
    <Button label='made for testing' />
    <SearchBox requestSearch={displaySearch} />
    <style jsx>{``}</style>
  </div>
);

export default Home;
