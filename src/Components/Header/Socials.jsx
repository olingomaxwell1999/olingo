import React from "react";

import { BsLinkedin,BsFacebook } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

const Socials = () => {
  return (
    <div className="header-socials">
      <a
        href="https://www.linkedin.com/in/olingo-maxwell-web-developer/"
        target="_blank" rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/olingomaxwell1999" target="_blank" rel="noreferrer">
        <FaGithub/>
      </a>
      <a href="https://twitter.com/olingo_maxwell" target='_blank' rel="noreferrer">
        <AiFillTwitterCircle/>
      </a>
      <a href="https://instagram.com/olingo_maxwell" target='_blank' rel="noreferrer">
        <AiFillInstagram/>
      </a>
      <a href="https://www.facebook.com/maxwell.olingo.3/" target='_blank' rel="noreferrer">
        <BsFacebook/>
      </a>
    </div>
  );
};

export default Socials;
