import { Route, Routes } from "react-router-dom";
import './App.css'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Stock from './components/pages/Stock'
import Stocks from './components/pages/Stocks'
import Nav from "./components/Nav";

function App() {
  

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/stock/:symbol" element={<Stock/>}/>
        <Route path="/stocks" element={<Stocks/>}/>
      </Routes>
    </div>
  )
}

export default App
