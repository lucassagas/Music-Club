import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <Layout />
      <GlobalStyles />
    </Router>
  );
}

export default App;
