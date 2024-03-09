import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json'; // Imports the data from the json file

const TeamData = data.teams; // Assigns the data from the json file to a variable named TeamData

interface TeamProps {
  // Assigns the data types for the data that will be used
  school: string;
  name: string;
  city: string;
  state: string;
}

function Heading() {
  // Creates a header at the top of the page explaining what it is
  return <h1>All Colleges in NCAA Basketball</h1>;
}

class Team extends React.Component<TeamProps> {
  // Creates a team card with the necessary info
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
  // Shows a list of the team cards with all teams in the data
  return (
    <div className="team-list">
      {TeamData.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  // Puts all of the functions together to display the list of team cards
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
