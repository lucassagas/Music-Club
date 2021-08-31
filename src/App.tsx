import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
