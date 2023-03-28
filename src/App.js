// eslint-disable-next-line
import "./App.css";
import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { NewsContext } from "./NewsContext";
import NewsRouter from "./NewsRouter";


const App = () => {
  const { progress: progressNew } = useContext(NewsContext);
 

  return (
      <div>
        <NavBar />
        <LoadingBar height={3} color='#f11946' progress={progressNew} />
        <Routes>
          <Route exact path="/" element={<News />} />
          <Route path="/:category" element={<NewsRouter />} />
        </Routes>
      </div>
    
  );

}

export default App;

