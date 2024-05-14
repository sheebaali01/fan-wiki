import { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./styles/app.scss";

const Home = lazy(() => import('./pages/home'));

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
