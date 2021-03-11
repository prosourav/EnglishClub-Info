import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./Team.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Team = (props) => {
    // console.log(props.data)
    const {strStadium,strTeam,idTeam,strSport,strTeamBadge} = props.data;
    
   
    return (
        <div className="contianer">
        <Card className="card" style={{ width: '25rem',backgroundColor:'beige' }}>
        <Card.Img variant="top" style={{ width: '80%',paddingLeft:'80px'}} src={strTeamBadge} />
        <Card.Body>
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>
            Stadium Name : {strStadium}
          </Card.Text>
          <Card.Text> Sports type: {strSport}</Card.Text>
          <Link to={`/about/${idTeam}`}>
          <Button  variant="primary">Get Details <FontAwesomeIcon icon={faArrowRight} /></Button>
          </Link>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Team;
