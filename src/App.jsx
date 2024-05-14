import { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./styles/app.scss";

const Home = lazy(() => import('./pages/home'));
const CardDetail = lazy(() => import('./pages/card-detail'));

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="card/:id" element={<CardDetail/>} />
      </Routes>
    </Router>
  )
}

export default App
