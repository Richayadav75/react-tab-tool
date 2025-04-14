import React, { JSX, useState } from "react";
import logo from "../assets/images/logo.svg";
import "../assets/scss/global.scss";

const Home = (): JSX.Element => {
  const [activeTab, handleTabClick] = useState(0);

  return (
    <div className="tab-tool">
      <div className="tab-tool__container">
        <div className="tab-tool__row">
          <div className="tab-tool__col">
            <img src={logo} className="tab-tool__logo" alt="logo" />
          </div>
          <div className="tab-tool__col">
            <h1 className="tab-tool__heading">React.js</h1>
            <p className="tab-tool__subtitle">
              i.e., using the React library for rendering the UI
            </p>
          </div>
        </div>
        <div className="tab-tool__description">
          <ul className="tab-tool__description-header">
            <li
              className={`tab-tool__description-item ${
                activeTab === 0 ? "active" : ""
              }`}
              onClick={() => handleTabClick(0)}
            >
              {" "}
              Why React
            </li>
            <li className={`tab-tool__description-item ${
                activeTab === 1 ? "active" : ""
              }`}
              onClick={() => handleTabClick(1)}> Core Feature</li>
            <li className={`tab-tool__description-item ${
                activeTab === 2 ? "active" : ""
              }`}
              onClick={() => handleTabClick(2)}>Related Course</li>
          </ul>
          {activeTab === 0 && (
            <div className="tab-tool__description-content">
            <ul className="tab-tool__list">
              <li className="tab-tool__item">React is extremely popular</li>
              <li className="tab-tool__item">
                It makes building complex, interactive UIs a breeze
              </li>
              <li className="tab-tool__item">It's powerful & flexible</li>
              <li className="tab-tool__item">
                It has a very active and versatile ecosystem
              </li>
            </ul>
          </div>
          )}
          {activeTab === 1 && (
            <div className="tab-tool__description-content">
            <ul className="tab-tool__list">
              <li className="tab-tool__item">Components, JSX & Props</li>
              <li className="tab-tool__item">State</li>
              <li className="tab-tool__item">Hooks (e.g., useEffect()) </li>
              <li className="tab-tool__item">Dynamic rendering</li>
            </ul>
          </div>
          )}
          {activeTab === 2 && (
            <div className="tab-tool__description-content">
            <ul className="tab-tool__list">
              <li className="tab-tool__item">Official web page (react.dev)</li>
              <li className="tab-tool__item">Next.js (Fullstack framework)</li>
              <li className="tab-tool__item">
                React Native (build native mobile apps with React)
              </li>
            </ul>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
