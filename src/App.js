import React from 'react';
import Header from './Components/Header/header'
import CenteredGrid from './Components/Content/content'
import Footer from './Components/Footer/footer'
import About from './Components/About/about'
import Pricing from './Components/Pricing/pricing'
import { Container }  from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="xl">
      <Header />
      <CenteredGrid />
      <About />
      <Pricing />
      <Footer />
    </Container>
  );
}

export default App;
