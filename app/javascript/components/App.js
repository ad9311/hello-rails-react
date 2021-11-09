import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Message from './Message';
import NoMatch from './NoMatch';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Message />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </Provider>
);

export default App
