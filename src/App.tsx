import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import CoinPage from "./components/CoinPage";
import  axios  from 'axios';


function App() {


  return (
    <div className="bg-[#29384d] dark:bg-white text-white min-h-screen">
      <Header />
      <Routes>
        <Route  path="/" element={<Homepage />} />
        <Route path="/coins" element={<CoinPage />}>
          <Route path=":id" element={<CoinPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
