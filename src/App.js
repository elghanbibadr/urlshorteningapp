import React from "react";
import './styles/main.css';
import Nav from "./Componenet/Nav";
import Hero from "./Componenet/Hero";
import UrlShortenContainer from "./Componenet/UrlShortenContainer";
import Statistics from "./Componenet/Statistics";
import Callout from "./Componenet/Callout";

function App() {
  return (
  <>
 <Nav/>
  <Hero/>
  <UrlShortenContainer/>
  <main>
  <Statistics/>
  <Callout/>
  </main>
</>
  );
}


export default App;
