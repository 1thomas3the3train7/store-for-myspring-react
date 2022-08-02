import './App.css';
import AppRouter from "./components/AppRouter";
import {BrowserRouter, Link} from "react-router-dom";
import "./style/main.css"
import {useState} from "react";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;
