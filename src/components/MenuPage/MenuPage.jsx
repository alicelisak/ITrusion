import React from 'react';

import MenuListContainer from './MenuListContainer';

export class MenuPage extends React.Component {
  render() {
    return (
      <div className="menu-page fade-in">
        <h1 className="menu-title">ITrusion</h1>
        <h4 className="menu-tagline">Gamifying Information Technology Teams For Social Engineering </h4>
        <div className="d-flex justify-content-center">
          <p className="menu-info">Start life as a new hire at your dream job...</p>
        </div>
        <MenuListContainer />
      </div>
    );
  }
}