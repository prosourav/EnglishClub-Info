import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css'
const Home = () => {
    const [team,setTeam] = useState([]);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeam((data.teams).slice(0,12)))
    },[]);
    return (
        <div className="home-container">
        <div className="first-section">
        <h1>Welcome to English Club-Info</h1>
       </div>
        <div className="home-teams">
          {
              team.map(team=><Team data={team} key={team.idTeam}></Team>)
          }
        </div>
        </div>
    );
};

export default Home;