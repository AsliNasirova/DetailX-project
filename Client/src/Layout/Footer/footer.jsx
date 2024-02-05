import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './footer.scss'
const Footer = () => {
  return (
    <>
      <div id='Footer'>
        <div className="FooterArea">
          <div className="FooterAreaBox">
            <div className="FooterOneBox">
              <div className="imgFooter">
                <img src="//detailx.ancorathemes.com/wp-content/uploads/2023/08/logo-retina.png 2x" alt="" />
              </div>
              <div className="text">
                <p>Sophisticated simplicity for the
                  independent mind.</p>
              </div>
              <div className="Icon">
                <FaTwitter className='FaIcon' />
                <FaDribbble className='FaIcon' />
                <FaBehance className='FaIcon' />
                <FaInstagram className='FaIcon' />
              </div>
            </div>
            <div className="FooterTwoBox">
              <div className="textTwo">
                <h1>Help & Infomation</h1>
              </div>
              <div className="TextUl">
                <ul>
                  <li>Pagination</li>
                  <li>Terms & Conditions</li>
                  <li>Contact</li>
                  <li>Accessories</li>
                  <li>Term of use</li>
                </ul>
              </div>
            </div>
            <div className="FooterTwoBox">
              <div className="textTwo">
                <h1>About Us</h1>
              </div>
              <div className="TextUl">
                <ul>
                  <li>Help Center</li>
                  <li>Address Store</li>
                  <li>Privacy Policy</li>
                  <li>Receivers & Amplifiers</li>
                  <li>MineryStore</li>
                </ul>
              </div>
            </div>
            <div className="FooterTwoBox">
              <div className="textTwo">
                <h1>Categories</h1>
              </div>
              <div className="TextUl">
                <ul>
                  <li>Ceiling Fans</li>
                  <li>Ceiling Lights</li>
                  <li>Novelty Lights</li>
                  <li>Night Lights</li>
                  <li>Wall Lights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer