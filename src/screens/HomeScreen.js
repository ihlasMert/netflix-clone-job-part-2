import React from "react";
import "./HomeScreen";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";

const HomeScreen = () => {
  return (
    <div className="">
      {/* Nav */}
      <Nav />
      {/* Nav */}

      {/* Banner */}
      <Banner />
      {/* Banner */}

      {/* row */}

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow

      />
      <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
      <Row
        title="Top Rating"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Row
        title="Netflix Comedy"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Netflix Horrow"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Row
        title="Netflix Documentry"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
};

export default HomeScreen;
