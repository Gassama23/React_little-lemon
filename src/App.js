import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ConfirmedBooking from "./components/ConfirmedBooking";  
import './styles.css';


function App() {
  return (
    <Router>
    <div className="app-container">
      <Header />
      <Nav />
      <Main />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<Main />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);
}

export default App;

