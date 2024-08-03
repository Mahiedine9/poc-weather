import React from 'react';
import './Contacts.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contacts() {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://lh3.googleusercontent.com/oUUiPB9sq3ACq4bUaRmo8pgvC4FUpRRrQKcGIBSOsafawZfRpF1vruFeYt6uCfL6wGDQyvOi6Ez9Bpf1Fb7APKjIyVsft7FLGR6QqdRFTiceNQBm1In9aZyrXp33cZi9pUNqjHASdA=s170-no"
          alt="Person"
          className="card__image"
        />
        <p className="card__name">Mahiedine Ferdjoukh</p>
        <div className="grid-container">
          <div className="grid-child-posts">Développeur Full Stack</div>
        </div>
        <div className="contact-info">
          <p><FontAwesomeIcon icon={faPhone} /> +33755345979</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> mahieddine.ferdjoukh9&#64;gmail.com</p>
        </div>
        <ul className="social-icons">
          <li>
            <a href="https://www.linkedin.com/in/mahiedineferdjoukh">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
        <button className="btn draw-border">Recrutez-moi !</button>
      </div>
    </div>
  );
}

export default Contacts;
