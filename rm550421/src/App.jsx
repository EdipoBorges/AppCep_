import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import React, { useState } from 'react';
import FutureAdvancements from './pages/avante';
import { Container,Button,lightTheme,darkTheme } from './Estilos/Estilo';
import { ThemeProvider } from 'styled-components';
import Cep from './pages/cep';

function App() {
  const [theme,setTheme]= useState('light')
  const mudarTheme = () => {
      setTheme(mudar => mudar === 'light'? 'dark' : 'light')
  }
  return (
    <> 
    <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
     <h1>=-_Tecnologia Espacial_-=</h1>
    <Button onClick={mudarTheme}>Toggle Light-Dark</Button>
    <hr/>
    <Container>
                  <BrowserRouter>
                    <Routes>
                          <Route path='/' element={<Home />} />
                          <Route path='/sobre' element={<Sobre />} />
                          <Route path='/avante' element={<FutureAdvancements />} />
                          <Route path='/cep' element={<Cep />} />
                    </Routes>
                  </BrowserRouter>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
