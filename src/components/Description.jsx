import React from "react";

function MyComponent() {
  return (
    <div className="description">
      <h2 className="description__header">Nagłówek</h2>
      <p className="descritpion__p">Tutaj jest jakiś akapit.</p>
      <ul className="description__ul">
        <li className="description__li">Pierwszy element listy</li>
        <li className="description__li">Drugi element listy</li>
        <li className="description__li">Trzeci element listy</li>
      </ul>
    </div>
  );
}

export default MyComponent;
