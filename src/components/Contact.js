import React from 'react';
import '../App.css';
import './Contact.css';

function About() {
  return (
    <div className="container pb-5">
            <div className="col-9 mx-auto text-center">
                <h1>Contact</h1>
            </div>
            <div className="col-12 mx-auto text-center pb-5">
                <a href="https://www.linkedin.com/in/dakota-pierce-1aa0151aa/" className="p-2"><i class="fab fa-linkedin fa-4x"></i></a>
                <a href="https://github.com/dakotapierce26" className="p-2"><i class="fab fa-github fa-4x"></i></a>
                <a href="mailto:piercedakota26@gmail.com" className="p-2"><i class="fas fa-envelope fa-4x"></i></a>
            </div>
        </div>
  );
}

export default About;
