import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import './About.css';
import facebook from '../../Photos/pic/Facebook.png';
import Twiter from '../../Photos/pic/Twitter.png';
import Youtube from '../../Photos/pic/YouTube.png';
import founded from '../../Photos/pic/found 1.png';
import male from '../../Photos/pic/male.png'
import female from '../../Photos/pic/female.png';
import gendersign from'../../Photos/pic/male-gender-sign 1.png';
import Sportstype from '../../Photos/pic/football (1) 1.png';


const About = () => {
    const {id} = useParams();
    const [teamDetails, setTeamDetails] = useState([]);
    // console.log(strFacebook);
    useEffect(()=>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setTeamDetails(data.teams[0]));
  },[id]);
  const {strTeam,strTeamBanner,strSport,strGender,strDescriptionEN,intFormedYear,strFacebook,strYoutube,strTwitter,strCountry} = teamDetails;
  let photo;
  if(strGender=="Female"){
       photo = female;
  }
  else{
      photo = male;
  }

    return (
        <div className="main-section1">
        <div className="section-1">
           <img src={strTeamBanner} alt="" srcset=""/>
        </div>
        <div className="main-section2">
            <div className="section-2">
             <div className="part-one">
             <h1>{strTeam}</h1>
             <img className="logo2"src={founded} alt="" srcset=""/>
             <h3>Founded:{intFormedYear}</h3>
             <h3>Country:{strCountry}</h3>
             <img className="logo2"src={gendersign} alt="" srcset=""/>
             <h3>Gender:{strGender}</h3>    
             <h3><img className="logo2"src={Sportstype} alt="" srcset=""/>  SportsType:{strSport}</h3>
             </div>
             <div className="part-two">
             <img src={photo} alt=""/>
             </div>
            </div>
            <div className="section-3">
            <p>{strDescriptionEN}</p>
            </div>
         
            <a href={`https://${strFacebook}`}target="_blank" rel="noreferrer">
            <img src={facebook} className="logo" alt='' />
            </a>
            <a href={`https://${strTwitter}`}target="_blank" rel="noreferrer">
            <img src={Twiter} className="logo" alt='' />
            </a>
            <a href={`https://${strYoutube}`}target="_blank" rel="noreferrer">
            <img src={Youtube} className="logo" alt='' />
            </a>
        </div>
        </div>
    );
};

export default About;