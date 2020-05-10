import React from "react";
// import logo from "./logo.svg";
// Global Imports
import "./App.css";
import { Grid, Container } from "semantic-ui-react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// Home Page includes
import HeaderSlider from "./components/headerSlider/headerSlider";
import BasicHero from "./components/heros/basicHero";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <div className="App container">
      <Header />
      <HeaderSlider />
      <Container>
        <Grid>
          <Grid.Row>
            <BasicHero content="We are a branding and digital consultancy providing business and strategic value for companies, brands, and future-driven projects." />
            <Carousel />
          </Grid.Row>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
