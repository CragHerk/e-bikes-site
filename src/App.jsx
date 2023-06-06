import React from 'react';
import ContactTop from './components/ContactTop/ContactTop';

import FrontContainer from './components/FrontContainer/FrontContainer.jsx';
import MyComponent from './components/Description/Description.jsx';
import OurBikes from './components/OurBikes/OurBikes.jsx';
import './App.css';
const App = () => {
  return (
    <div>
      <ContactTop />

      <FrontContainer />
      <OurBikes />
      <MyComponent />
    </div>
  );
};

export default App;
