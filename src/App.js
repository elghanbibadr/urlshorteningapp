import React from "react";
import './styles/main.css';
import Nav from "./Componenet/Nav";
import Hero from "./Componenet/Hero";
import UrlShortenForm from "./Componenet/UrlShortenForm";
import UrlShortenResult from "./Componenet/UrlShortenResult";

function App() {
  return (
  <>
 <Nav/>
  <Hero/>
  <UrlShortenForm/>
  <UrlShortenResult/>
</>
  );
}


export default App;
