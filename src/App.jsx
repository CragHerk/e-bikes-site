import React from "react";
import ContactTop from "./components/ContactTop.jsx";
import Menu from "./components/Menu.jsx";
import FrontContainer from "./components/FrontContainer.jsx";
import MyComponent from "./components/Description.jsx";
import OurBikes from "./components/OurBikes.jsx";
import "./App.css";
const App = () => {
  return (
    <div>
      <ContactTop />
      <Menu />
      <FrontContainer />
      <OurBikes />
      <MyComponent />
    </div>
  );
};

export default App;
