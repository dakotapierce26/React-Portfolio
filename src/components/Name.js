import React from 'react';
import NameImg from '../images/name.png';

function Name() {
    return (
        <div className="container text-center p-5">
            <img src={ NameImg } alt="" width="50%" />
        </div>
    );
}

export default Name;