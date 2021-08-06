import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogin, startLogout } from "../actions/auth";

export function Header({ startLogin, startLogout, isAuthenticated }) {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/">
            <h1>Bulog</h1>
          </Link>

          {isAuthenticated ? (
            <div className="header__user-options">
              <button onClick={startLogout} className="button button--hollow mb-1">
                <img
                  src="/images/logout.svg"
                  width="20px"
                  height="20px"
                  alt=""
                />
                Logout
              </button>
              <div className="flex">
                <Link className="url-link flex justify-center items-center" to="/create">
                  <img
                    src="/images/favicon.ico"
                    width="20px"
                    height="20px"
                    alt=""
                  />
                  <b>Create</b>
                </Link>
                <Link className="url-link ml-1 flex justify-center items-center" to="/edit">
                  <img
                    src="/images/gear.svg"
                    width="20px"
                    height="20px"
                    alt=""
                  />
                  <b>Edit</b>
                </Link>
              </div>
            </div>
          ) : (
            <button onClick={startLogin} className="button">
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout()),
});

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
