import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Message from './Message';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Message />} />
    </Routes>
  </BrowserRouter>
);

export default App
