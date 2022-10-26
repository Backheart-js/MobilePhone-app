import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Router from './config/Router';

import '~/App.scss';
import MainLayout from './layout/MainLayout/MainLayout';

function App() {
  const Layout = MainLayout

  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Router />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
