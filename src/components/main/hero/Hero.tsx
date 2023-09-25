import React from 'react';
import './Hero.scss';
import imgProfileMobile from '../../../assets/images/image-profile-mobile.webp';
import imgProfileTablet from '../../../assets/images/image-profile-tablet.webp';
import imgProfileDesktop from '../../../assets/images/image-profile-desktop.webp';
import rings from '../../../assets/images/pattern-rings.svg';
import circle from '../../../assets/images/pattern-circle.svg';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="wrapper hero__wrapper">
        <div className="hero__content">
          <picture>
            <source media='(min-width: 62.5em)' srcSet={imgProfileDesktop} />
            <source media='(min-width: 37.5em)' srcSet={imgProfileTablet} />
            <img className='hero__image' src={imgProfileMobile} alt="picture of Shiv" width='174' height='383' />
          </picture>
          <img className='hero__rings' src={rings} alt="rings image" width="530" height="129" />
          <img className='hero__circle' src={circle} alt="circle image" width="129" height="129" />
          <div className="hero__text">
            <h1 className='hero__headline'>Nice to<br /> meet you! I'm <span>Shiv Shankar Mistry</span>.</h1>
            <p className='hero__description'>
              Based in the India, I'm a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <a href='' className='hero_contact underline'>Contact me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;