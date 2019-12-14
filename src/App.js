import React from 'react';
import './App.css';
import { PrincipalLayout } from './components/PrincipalLayout';
import { SearchHotels } from './components/SearchHotels';
import { TitleComponent } from './components/TitleComponent';
import { Footer } from './components/Footer';
import { Article } from './components/Article';
import { CarouselImage } from './components/CarouselImage';

function App() {
  return (
    <div className="App">
      <PrincipalLayout></PrincipalLayout>
      <TitleComponent></TitleComponent>
      <SearchHotels></SearchHotels>
      <Article></Article>
      <CarouselImage></CarouselImage>
      <Footer></Footer>
    </div>
  );
}

export default App;
