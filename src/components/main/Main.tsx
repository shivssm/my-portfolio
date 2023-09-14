import React from 'react';
import './Main.scss';
import imgProfileMobile from './../../assets/images/image-profile-mobile.webp';
import imgProfileTablet from './../../assets/images/image-profile-tablet.webp';
import imgProfileDesktop from './../../assets/images/image-profile-desktop.webp';

const Main: React.FC = () => {
  return (
    <main className="main">
      <section className="hero">
        <div className="wrapper">
          <img
            src={imgProfileMobile}
            alt="picture of Shiv Shankar Mistry"
            srcSet={`${imgProfileMobile} 348w, ${imgProfileTablet} 646w, ${imgProfileDesktop} 890w`}
            sizes="(max-width: 599.98px) 46.4vw, (max-width: 999.98px) 42vw, 445px"
          />

          <h1>Nice to meet you! I'm Shiv Shankar Mistry.</h1>
        </div>
      </section>
    </main>
  );
};

export default Main;
