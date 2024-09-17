import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './view/Home';
import { Fragment } from 'react';
// import AppAppBar from './components/AppHeader.js';
import AppRouter from './routes/Index';
import withRoot from '../src/view/modules/withRoot.js';
import AppHeader from './components/AppHeader.js';
import AppFooter from './components/AppFooter.js';

function App() {
  return (
    <div className='App'>
      <AppHeader />
      <AppRouter />
      <AppFooter />
    </div>
  );
}

export default withRoot(App);
