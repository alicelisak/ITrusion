import React from 'react';
import { connect } from 'react-redux';

export class StatsScreen extends React.Component {
  render() {
    const { stats } = this.props;  // Assuming `stats` contains all necessary statistics

    return (
      <div className="stats-page fade-in">
        <h1 className="stats-title">Game Over</h1>
        <h4 className="stats-tagline">See how you did!</h4>
        <div className="d-flex justify-content-center">
          <div className="stats-info">
            <p>Karma Points: {stats.karma}</p>
            <p>Intellect Points: {stats.intellect}</p>
            <p>Love Points: {stats.love}</p>
            <p>Power Points: {stats.power}</p>
            <p>Dark Tetrad Points: {stats.darkTetrad}</p>
            {/* Display additional statistics as needed */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stats: state.playerStats // Ensure this matches the actual path in your Redux state
});

export default connect(mapStateToProps)(StatsScreen);
