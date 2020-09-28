import React from 'react';
import './projects.css';
import flightBookingImage from './flightBookingImage.png';
import newsWebAppImage from './newsWebAppImage.png';
import sideMenuImage from './sideMenuImage.png';
import githubLogo from './githubLogo.png';
import linkLogo from './linkLogo.png';
import videoLogo from './videoLogo.png';

class Projects extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1 id='projectsH1'>Checkout my latest work</h1>
        <h2 id='projectsH2'>
          If you have any concerns, I am more than happy to help
        </h2>
        <div id='projectsContainer'>
          {/* BEGINNING OF CARD  */}

          <div class='card sticky-action'>
            <div class='card-content'>
              <span id='card-title-style' class='card-title activator'>
                Side Menu
              </span>
            </div>
            <div class='card-image waves-effect waves-block waves-light'>
              <img
                alt='Side Menu app'
                id='cardImage'
                class='activator'
                src={sideMenuImage}
              ></img>
            </div>
            <div class='card-action'>
              <div className='card_action_area'>
                <a
                  href='https://github.com/TeamRocket16/Main-Thesis'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img class='githubLogo' src={githubLogo} alt='' />
                </a>
                <a
                  href='https://teamrocket16.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img class='card_actionLink' src={linkLogo} alt='' />
                </a>
                <a
                  href='https://drive.google.com/file/d/17ZLz-FEhIDKRaKtuYpdUQC7vXLWTg5cb/view'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img class='card_actionLink' src={videoLogo} alt='' />
                </a>
              </div>
            </div>
            <div class='card-reveal'>
              <span className='blackColor' class='card-title'>
                Side Menu<i class='material-icons right'>close</i>
              </span>
              <p className='blackColor'>
                Side Menu is a web application aimed towards helping resturants
                to sell refactored food to people such as college students,
                people who cant afford expensive food and to provide food for
                startups and small companies. The app provides accounts for both
                users and resturants and it relies on Google maps api for
                locations. <br />
                Role: Full-stack developer.
              </p>
            </div>
          </div>

          {/* BEGINNING OF CARD  */}

          <div class='card sticky-action'>
            <div class='card-content'>
              <span id='card-title-style' class='card-title activator'>
                Flights Bookings
              </span>
            </div>
            <div class='card-image waves-effect waves-block waves-light'>
              <img
                alt='flight bookings app'
                id='cardImage'
                class='activator'
                src={flightBookingImage}
              ></img>
            </div>
            <div class='card-action'>
              <div className='card_action_area'>
                <a
                  href='https://github.com/Flights-Booking-V2/flights-booking-v2'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img class='githubLogo' src={githubLogo} alt='' />
                </a>
                <a
                  href='https://flights-booking-v2.herokuapp.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img class='card_actionLink' src={linkLogo} alt='' />
                </a>
                <a
                  href='https://drive.google.com/file/d/1PyqHYgKby9pbRV0mx6uwAma5sheIjG0c/view'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img class='card_actionLink' src={videoLogo} alt='' />
                </a>
              </div>
            </div>
            <div class='card-reveal'>
              <span className='blackColor' class='card-title'>
                Flights Bookings<i class='material-icons right'>close</i>
              </span>
              <p className='blackColor'>
                Flights booking is designed to help peaople schedule their
                filghts based on real time data using an api. <br />
                Role: Backend developer.
              </p>
            </div>
          </div>

          {/* BEGINNING OF CARD  */}

          <div class='card sticky-action'>
            <div class='card-content'>
              <span id='card-title-style' class='card-title activator'>
                News wep app
              </span>
            </div>
            <div class='card-image waves-effect waves-block waves-light'>
              <img
                alt='News wep app'
                id='cardImage'
                class='activator'
                src={newsWebAppImage}
              ></img>
            </div>
            <div class='card-action'>
              <div className='card_action_area'>
                <a
                  href='https://github.com/News-Web-App/News-Web-App'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img class='githubLogo' src={githubLogo} alt='' />
                </a>
                <a
                  href='https://drive.google.com/file/d/1fkCIhEZ56N0u9Vqqe14_iMpgbi4BzINv/view'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img class='card_actionLink' src={videoLogo} alt='' />
                </a>
              </div>
            </div>
            <div class='card-reveal'>
              <span className='blackColor' class='card-title'>
                News wep app<i class='material-icons right'>close</i>
              </span>
              <p className='blackColor'>
                News wep app is a web application used to provide news
                information based on real-time data using an outside api to
                provide the information. <br></br>
                Role: Backend developer
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
