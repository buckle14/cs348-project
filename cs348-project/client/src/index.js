import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EditData from "./components/EditData";
import GetData from "./components/GetData";
import InsertData from "./components/InsertData";
import RemoveData from "./components/RemoveData";
import FunFacts from "./components/FunFacts";
import { render } from "react-dom";

const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="getData" element={<GetData/>}/>
        <Route path="removeData" element={<RemoveData/>}/>
        <Route path="insertData" element={<InsertData/>}/>
        <Route path="editData" element={<EditData/>}/>
        <Route path="funFacts" element={<FunFacts/>}/>
      </Routes>
    </BrowserRouter>,
  rootElement
);

reportWebVitals();
