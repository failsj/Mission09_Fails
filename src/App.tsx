import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

const TeamData = data.teams;

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Header() {
  return <h1>All Colleges in NCAA Basketball</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;
    return (
      <div className="team-card">
        <h2>{school}</h2>
        <p>Mascot: {name}</p>
        <p>
          Location: {city}, {state}
        </p>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="team-list">
      {TeamData.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
