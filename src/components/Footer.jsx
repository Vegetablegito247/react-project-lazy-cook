import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import { BsInstagram, BsGithub, BsFacebook, BsTwitter, BsTelegram, BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import { BsFillClockFill } from 'react-icons/bs';

import './styles/footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-list">
                <div className="foot1 foot-diff">
                    <h3>Lazy Cook <FaUtensils className='foot-logo' /></h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, illum.
                    </p>
                    <ul>
                        <li><BsFacebook /></li>
                        <li><BsInstagram /></li>
                        <li><BsGithub /></li>
                        <li><BsTwitter /></li>
                        <li><BsTelegram /></li>
                    </ul>
                </div>
                <div className="foot1">
                    <h3>Useful links</h3>
                    <ul>
                        <li>About us</li>
                        <li>Event planner</li>
                        <li>Our Head Quarter</li>
                        <li>Online reservations</li>
                    </ul>
                </div>
                <div className="foot1 foot-diff2">
                    <h3>Office Info</h3>
                    <ul>
                        <li><BsFillTelephoneFill className='foot-diff-icon' /> +234-703-856-0337</li>
                        <li><AiFillMail className='foot-diff-icon' /> agbamalu247@webmail.com</li>
                        <li><FaLocationArrow className='foot-diff-icon' /> 36, Jubrila street, Washington, London</li>
                        <li><BsFillClockFill className='foot-diff-icon' /> <b>Mon - Fri 9:00am - 9:pm</b></li>
                    </ul>
                </div>
                <div className="foot1 foot-diff3">
                    <h3>Subscribe now</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet facere dolor labore! Placeat accusamus eum deserunt consequatur. Fuga dolores ad harum officia ducimus, illo illum!
                    </p>
                    <input type="email" id="foot-mail" placeholder='Email account' />
                    <button>subscribe now</button>
                </div>
            </div>
            <div className="foot-copy-right">
                <p>© 2021 - 2023 Lazycook.com</p>
            </div>
        </footer>
    )
}

export default Footer;