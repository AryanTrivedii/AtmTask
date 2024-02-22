import logo from './logo.svg';
import './App.css';
import LoginSignUp from './components/LoginSignUP/LoginSignUp';
import Screen from './components/LoginSignUP/Screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <>
      <Routes>
<Route path="/" element={<LoginSignUp />} />
<Route path="/screen" element={< Screen/>} />
</Routes>
</>
    </div>
    </BrowserRouter>
  );
}

export default App;
