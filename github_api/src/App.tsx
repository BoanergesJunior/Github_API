import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/index'
import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (

    <React.Fragment>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
