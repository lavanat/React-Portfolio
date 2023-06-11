import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AboutMe, Portfolio, Contact, Resume } from './components/Project';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="react-portfolio-app">
      <Header />
      <main>
        <Routes>
            <Route path='/' element = {<AboutMe/>} />
            <Route path='/portfolio'  element = {<Portfolio/>} />
            <Route path='/contact'  element = {<Contact/>} />
            <Route path='/resume'  element = {<Resume/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
