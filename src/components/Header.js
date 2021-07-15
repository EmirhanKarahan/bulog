import React from "react";
import {Link} from "react-router-dom";

export default function Header(){
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/">
            <h1>Bulog</h1>
          </Link>
          <Link className="header__title" to="/create">
            <h1>Create</h1>
          </Link>
          <button className="button">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

