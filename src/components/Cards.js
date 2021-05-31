import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Web/item-1.png'
              text='Upside x Down'
              github='https://github.com/apierce17/UpsideDown'
              deployed='https://www.upsidexdown.com'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/Web/item-3.png'
              text='Musical Mecca'
              github='https://github.com/apierce17/musicians-mecca'
              deployed='https://musicians-mecca.herokuapp.com/login'
            />
            <CardItem
              src='images/Web/item-2.png'
              text='Allen Stone Fan Project'
              github='https://github.com/symlara/about-allen-project'
              deployed='https://symlara.github.io/about-allen-project/'
            />
            <CardItem
              src='images/Web/placeholder.png'
              text='Placeholder'
              github=''
              deployed=''
            />
            <CardItem
              src='images/Web/placeholder.png'
              text='Placeholder'
              github=''
              deployed=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
