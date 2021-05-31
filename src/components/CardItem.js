import React from 'react';

function WebCardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='wcards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Project Thumbnail'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <a href={ props.deployed } className="p-2"><i class="fas fa-globe fa-lg"></i></a>
            <a href={ props.github } className="p-2"><i class="fab fa-github fa-lg"></i></a>
          </div>
        </div>
      </li>
    </>
  );
}

export default WebCardItem;
