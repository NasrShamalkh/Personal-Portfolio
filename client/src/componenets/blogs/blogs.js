import React from 'react';
import './blogs.css';
import git from './git01.png';
import learning from './learning01.jpg';
import time from './time.jpg';
import back_vs_front from './back_vs_front.jpg';
import values from './values.jpg';
import bloggerLogo from './bloggerLogo.jpg';

class Blogs extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1 id='blogsHeader'>Have a look at some of my blogs</h1>
        <h3 id='jj'>
          Or you can visit my
          <a
            href='https://www.blogger.com/profile/09176699706079577253'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img alt='blogger logo' className='bloggerLogo' src={bloggerLogo} />
          </a>
          profile for more
        </h3>
        <div id='blogsContainer'>
          {/* BEGINNING OF CARD  */}

          <div class='card'>
            <div class='card-image waves-effect waves-block waves-light'>
              <img
                alt='Time blog'
                id='cardImage'
                class='activator'
                src={time}
              ></img>
            </div>
            <div class='card-content'>
              <span class='card-title activator grey-text text-darken-4'>
                Time
              </span>
              <p>
                <a
                  href='https://nasrtime.blogspot.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Blog
                </a>
              </p>
            </div>
            <div class='card-reveal'>
              <span class='card-title grey-text text-darken-4'>
                Time<i class='material-icons right'>close</i>
              </span>
              <p className='blackColor'>
                Time like many other things on earth is a resource, and it is
                the single most powerful and invaluable resource...{' '}
                <a
                  href='https://nasrtime.blogspot.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='blueColor'
                >
                  Continue reading >>
                </a>
              </p>
            </div>
          </div>

          {/* BEGINNING OF CARD  */}

          <div class='card'>
            <div class='card-image waves-effect waves-block waves-light'>
              <img
                alt='Git blog'
                id='cardImage'
                class='activator'
                src={git}
              ></img>
            </div>
            <div class='card-content'>
              <span class='card-title activator grey-text text-darken-4'>
                Git
              </span>
              <p>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://nasrgit.blogspot.com/'
                >
                  View Blog
                </a>
              </p>
            </div>
            <div class='card-reveal'>
              <span class='card-title grey-text text-darken-4'>
                Git<i class='material-icons right'>close</i>
              </span>
              <p className='blackColor'>
                Git is the most commonly used code sharing tool, it is capable
                of organizing code and to merge the...
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://nasrgit.blogspot.com/'
                  className='blueColor'
                >
                  Continue reading >>
                </a>
              </p>
            </div>
          </div>

          {/* BEGINNING OF CARD  */}

          <div class='card'>
            <div class='card-image waves-effect waves-block waves-light'>
              <img
                alt='Learning blog'
                id='cardImage'
                class='activator'
                src={learning}
              ></img>
            </div>
            <div class='card-content'>
              <span class='card-title activator grey-text text-darken-4'>
                Learning
              </span>
              <p>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://nasrlearning.blogspot.com/'
                >
                  View Blog
                </a>
              </p>
            </div>
            <div class='card-reveal'>
              <span class='card-title grey-text text-darken-4'>
                Learning<i class='material-icons right'>close</i>
              </span>
              <p className='blackColor'>
                So, why is learning that important? The importance of learning
                relies in that it helps the individual to acquire the
                necessary...{' '}
                <a
                  href='https://nasrlearning.blogspot.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='blueColor'
                >
                  Continue reading >>
                </a>
              </p>
            </div>
          </div>

          {/* BEGINNING OF CARD  */}

          <div class='card'>
            <div class='card-image waves-effect waves-block waves-light'>
              <img
                alt='Backend vs Frontend blog'
                id='cardImage'
                class='activator'
                src={back_vs_front}
              ></img>
            </div>
            <div class='card-content'>
              <span class='card-title activator grey-text text-darken-4'>
                Backend vs Frontend
              </span>
              <p>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://nasrbackvsfront.blogspot.com/'
                >
                  View Blog
                </a>
              </p>
            </div>
            <div class='card-reveal'>
              <span class='card-title grey-text text-darken-4'>
                Backend vs Frontend<i class='material-icons right'>close</i>
              </span>
              <p className='blackColor'>
                To put it simply, the main difference is that the front is what
                the user experiences and the back is what does the things in the
                front but are hidden from...{' '}
                <a
                  href='https://nasrbackvsfront.blogspot.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='blueColor'
                >
                  Continue reading >>
                </a>
              </p>
            </div>
          </div>

          {/* BEGINNING OF CARD  */}

          <div class='card'>
            <div class='card-image waves-effect waves-block waves-light'>
              <img
                alt='values'
                id='cardImage'
                class='activator'
                src={values}
              ></img>
            </div>
            <div class='card-content'>
              <span class='card-title activator grey-text text-darken-4'>
                Values
              </span>
              <p>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://nasrvalues.blogspot.com/'
                >
                  View Blog
                </a>
              </p>
            </div>
            <div class='card-reveal'>
              <span class='card-title grey-text text-darken-4'>
                values<i class='material-icons right'>close</i>
              </span>
              <p className='blackColor'>
                Values are basic and fundamental beliefs that guide or motivate
                attitudes or actions. They helps us to set out priories straight
                and...{' '}
                <a
                  href='https://nasrvalues.blogspot.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='blueColor'
                >
                  Continue reading >>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Blogs;
