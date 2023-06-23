import React, { useEffect } from 'react';
import hdimg from './images/foodhead.jpeg';
import mainimg1 from './images/kitchen.jpeg';
import mainimg2 from './images/utensils.jpeg';
import chefimg1 from './images/chef1.jpeg';
import chefimg2 from './images/chef2.jpeg';
import chefimg3 from './images/chef3.jpeg';
import chefimg4 from './images/chef4.jpeg';
import chefimg5 from './images/chef5.jpeg';
import chefimg6 from './images/chef6.jpeg';
import assureImg from './images/realkitchen.jpeg';
import customer1 from './images/family1.jpeg';
import customer2 from './images/family2.jpeg';
import customer3 from './images/family3.jpeg';
import mailImg from './images/mailimage.jpeg';

import { BiParty, BiDrink } from 'react-icons/bi';
import { GiLovers, GiCoffin } from 'react-icons/gi';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { MdOutlineSoupKitchen } from 'react-icons/md';

import Aos from 'aos';
import 'aos/dist/aos.css';
// import Slider from 'react-slick';

import './styles/home.css';

function Home() {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };

    useEffect(() => {
        Aos.init({duration: 3000})
    })

    return (
        <div>
            <header>
                <div className="home-head">
                    <div className="head-text" data-aos='fade-right'>
                        <h1 data-aos='fade-up' data-aos-delay='1000' >Creativity.</h1>
                        <h1 data-aos='fade-up' data-aos-delay='2000' >Commitment to quality.</h1>
                        <h1 data-aos='fade-up' data-aos-delay='3000' >Cleaniness.</h1>
                        <p>The best chef you could ever hire & great service to ensure you are satisfied</p>
                        <button data-aos='flip-up' data-aos-delay='1000' >contact us</button>
                    </div>
                    <div className="head-image">
                        <img src={hdimg} alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum nisi impedit totam voluptatem, consequuntur, recusandae ab earum quia explicabo, dolor provident. Explicabo, in! Ipsum officiis dolorem quae asperiores odio!
                        </p>
                    </div>
                </div>

                <div className="exp" data-aos='fade-right'>
                    <h3 data-aos='flip-right'>40years of experience in handling and cooking delicious meals</h3>
                    <p data-aos='flip-left'>
                        With 40 years of culinary expertise, our cooking team boasts unrivaled experience. From intimate gatherings to grand celebrations, we pledge to handle every event with finesse and flair. Trust us to create mouthwatering delights, execute flawless presentations, and ensure your guests' satisfaction, making your occasion truly unforgettable.
                    </p>
                    <div className="exp-establish">
                        <div className="exp-esta" data-aos='flip-up'>
                            <h5>1983</h5>
                            <p>Year of establishment</p>
                        </div>
                        <div className="exp-esta est2" data-aos='slide-down'>
                            <h5>547</h5>
                            <p>event and kitchen cooking handled</p>
                        </div>
                        <div className="exp-esta" data-aos='flip-right'>
                            <h5>55+</h5>
                            <p>Business partners</p>
                        </div>
                        <div className="exp-esta est2" data-aos='slide-left'>
                            <h5>56+</h5>
                            <p>Happy clients</p>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className="kitchen-utensils">
                    <div className="kit-ute">
                        <img src={mainimg1} alt="" data-aos='zoom-in-right' />
                        <div className="kit-cont"></div>
                        <div className="kit-ute-texts">
                            <h3 data-aos='fade-left'>Experience a great taste from our top Chefs</h3>
                            <p data-aos='fade-right'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptas perspiciatis maxime quos? Adipisci perferendis, sed odit esse omnis fugit commodi minima, repellendus cumque hic distinctio quibusdam, necessitatibus animi atque odio autem quam ratione? Sapiente minima est, deserunt vero voluptatem obcaecati sint, magnam, molestiae odit atque possimus ut. Autem adipisci fugit at inventore et, laboriosam officiis quod nulla? Quisquam, provident iste? Quaerat quae vero dicta necessitatibus dolorum nostrum libero sapiente!
                            </p>
                            <button data-aos='zoom-in-up'>contact us</button>
                        </div>
                    </div>
                    <div className="kit-ute">
                        <img src={mainimg2} alt="" data-aos='zoom-in-left' />
                        <div className="kit-cont"></div>
                        <div className="kit-ute-texts">
                            <h3 data-aos='fade-right'>We use top notch Kitchen Utensils</h3>
                            <p data-aos='fade-left'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptas perspiciatis maxime quos? Adipisci perferendis, sed odit esse omnis fugit commodi minima, repellendus cumque hic distinctio quibusdam, necessitatibus animi atque odio autem quam ratione? Sapiente minima est, deserunt vero voluptatem obcaecati sint, magnam, molestiae odit atque possimus ut. Autem adipisci fugit at inventore et, laboriosam officiis quod nulla? Quisquam, provident iste? Quaerat quae vero dicta necessitatibus dolorum nostrum libero sapiente!
                            </p>
                            <button data-aos='zoom-in-up'>contact us</button>
                        </div>
                    </div>
                </div>

                <div className="services">
                    <h1>What we offer</h1>
                    <div className="serve-grid">
                        <div className="serve" data-aos='zoom-in-up'>
                            <BiParty className='icon-ser' />
                            <h3>Birthday Parties</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugit expedita, consectetur quas odio assumenda quam deleniti est, ipsum dolorem consequatur dolorum nobis quo at voluptatibus. Quae ducimus deleniti ad.
                            </p>
                            <button>learn more</button>
                        </div>
                        <div className="serve serve2" data-aos='flip-right'>
                            <GiLovers className='icon-ser' />
                            <h3>Wedding Events</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugit expedita, consectetur quas odio assumenda quam deleniti est, ipsum dolorem consequatur dolorum nobis quo at voluptatibus. Quae ducimus deleniti ad.
                            </p>
                            <button>learn more</button>
                        </div>
                        <div className="serve" data-aos='fade-left'>
                            <BiDrink className='icon-ser'  />
                            <h3>Anniversary</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugit expedita, consectetur quas odio assumenda quam deleniti est, ipsum dolorem consequatur dolorum nobis quo at voluptatibus. Quae ducimus deleniti ad.
                            </p>
                            <button>learn more</button>
                        </div>
                        <div className="serve serve2" data-aos='zoom-in-down'>
                            <GiCoffin className='icon-ser' />
                            <h3>Burial Ceremony</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugit expedita, consectetur quas odio assumenda quam deleniti est, ipsum dolorem consequatur dolorum nobis quo at voluptatibus. Quae ducimus deleniti ad.
                            </p>
                            <button>learn more</button>
                        </div>
                        <div className="serve" data-aos='flip-left'>
                            <BsFillHouseDoorFill className='icon-ser' />
                            <h3>House parties</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugit expedita, consectetur quas odio assumenda quam deleniti est, ipsum dolorem consequatur dolorum nobis quo at voluptatibus. Quae ducimus deleniti ad.
                            </p>
                            <button>learn more</button>
                        </div>
                        <div className="serve serve2" data-aos='fade-right'>
                            <MdOutlineSoupKitchen className='icon-ser' />
                            <h3>Dinner nights</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugit expedita, consectetur quas odio assumenda quam deleniti est, ipsum dolorem consequatur dolorum nobis quo at voluptatibus. Quae ducimus deleniti ad.
                            </p>
                            <button>learn more</button>
                        </div>
                    </div>
                </div>

                <div className="chefs">
                    <h1>Meet our Top chef</h1>
                    <div className="chef-grid" data-aos='slide-left'>
                        <div className="chef-profile" data-aos='zoom-in-right' data-aos-delay='1000'>
                            <img src={chefimg1} alt="" />
                            <div className="chef-text"></div>
                            <div className="chef-info">
                                <h3>David Gustavo</h3>
                                <p>
                                    We promise to offer you delicious meals and handle your events perfectly
                                </p>
                            </div>
                        </div>
                        <div className="chef-profile" data-aos='flip-up' data-aos-delay='1200'>
                            <img src={chefimg2} alt="" />
                            <div className="chef-text"></div>
                            <div className="chef-info">
                                <h3>Achinedu Abraham</h3>
                                <p>
                                    We promise to offer you delicious meals and handle your events perfectly
                                </p>
                            </div>
                        </div>
                        <div className="chef-profile" data-aos='fade-down-left' data-aos-delay='1400'>
                            <img src={chefimg3} alt="" />
                            <div className="chef-text"></div>
                            <div className="chef-info">
                                <h3>Mubarak Azeez</h3>
                                <p>
                                    We promise to offer you delicious meals and handle your events perfectly
                                </p>
                            </div>
                        </div>
                        <div className="chef-profile" data-aos='zoom-in-left' data-aos-delay='1600'>
                            <img src={chefimg4} alt="" />
                            <div className="chef-text"></div>
                            <div className="chef-info">
                                <h3>Dave Stone</h3>
                                <p>
                                    We promise to offer you delicious meals and handle your events perfectly
                                </p>
                            </div>
                        </div>
                        <div className="chef-profile" data-aos='flip-down' data-aos-delay='1800'>
                            <img src={chefimg5} alt="" />
                            <div className="chef-text"></div>
                            <div className="chef-info">
                                <h3>Micheal Adams</h3>
                                <p>
                                    We promise to offer you delicious meals and handle your events perfectly
                                </p>
                            </div>
                        </div>
                        <div className="chef-profile" data-aos='fade-up-right' data-aos-delay='2000'>
                            <img src={chefimg6} alt="" />
                            <div className="chef-text"></div>
                            <div className="chef-info">
                                <h3>Fathia Balogun</h3>
                                <p>
                                    We promise to offer you delicious meals and handle your events perfectly
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="assurance">
                    <img src={assureImg} alt="" />
                    <div className="assure-cont"></div>
                    <div className="assure-text" data-aos='fade-right'>
                        <h3>We Assure You That no food shall taste unpleasant</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias soluta id illo. Magnam harum sit fuga voluptate et odio maxime?
                        </p>
                        <button data-aos='fade-up' data-aos-delay='500'>Free Consultation</button>
                    </div>
                </div>

                <div className="price">
                    <h1 data-aos='slide-down'>Check out our Prices, cheap and affordable</h1>
                    <div className="price-table" data-aos='zoom-out-up'>
                        <div className="price-list">
                            <div className="chef-list">
                                <h3>Jollof Rice ad Chicken</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sint?
                                </p>
                            </div>
                            <h4>FREE</h4>
                            <div className="chef-price">
                                <h3>$12.00</h3>
                                <p>
                                    per hour
                                </p>
                            </div>
                        </div>
                        <div className="price-list">
                            <div className="chef-list">
                                <h3>Bouncing castle for chidren</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sint?
                                </p>
                            </div>
                            <h4>FREE</h4>
                            <div className="chef-price">
                                <h3>$12.00</h3>
                                <p>
                                    per hour
                                </p>
                            </div>
                        </div>
                        <div className="price-list">
                            <div className="chef-list">
                                <h3>Party management</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sint?
                                </p>
                            </div>
                            <h4>FREE</h4>
                            <div className="chef-price">
                                <h3>$12.00</h3>
                                <p>
                                    per hour
                                </p>
                            </div>
                        </div>
                        <div className="price-list">
                            <div className="chef-list">
                                <h3>Bakery & Pastries</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sint?
                                </p>
                            </div>
                            <h4>FREE</h4>
                            <div className="chef-price">
                                <h3>$12.00</h3>
                                <p>
                                    per hour
                                </p>
                            </div>
                        </div>
                        <div className="price-list">
                            <div className="chef-list">
                                <h3>Dish Washing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sint?
                                </p>
                            </div>
                            <h4>FREE</h4>
                            <div className="chef-price">
                                <h3>$12.00</h3>
                                <p>
                                    per hour
                                </p>
                            </div>
                        </div>
                        <div className="price-list">
                            <div className="chef-list">
                                <h3>Pizza Party</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sint?
                                </p>
                            </div>
                            <h4>FREE</h4>
                            <div className="chef-price">
                                <h3>$12.00</h3>
                                <p>
                                    per hour
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="customer-card">
                    <h1 data-aos='zoom-in'>Check out our Customer Review</h1>
                    <div className="client-review">
                        <div className="clients">
                            <div className="clients-cont"></div>
                            <div className="client-com" data-aos='slide-left'>
                                <img src={customer1} alt="" />
                                <h3>The Adams family</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, quisquam eum adipisci deleniti officia temporibus minima aut dicta nostrum quod velit delectus repellendus odio fugiat. Nam deleniti a quo excepturi?
                                </p>
                            </div>
                        </div>
                        <div className="clients">
                            <div className="clients-cont"></div>
                            <div className="client-com" data-aos='slide-right'>
                                <img src={customer2} alt="" />
                                <h3>Kowowole Adegbemiga</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, quisquam eum adipisci deleniti officia temporibus minima aut dicta nostrum quod velit delectus repellendus odio fugiat. Nam deleniti a quo excepturi?
                                </p>
                            </div>
                        </div>
                        <div className="clients">
                            <div className="clients-cont"></div>
                            <div className="client-com" data-aos='slide-left'>
                                <img src={customer3} alt="" />
                                <h3>Idrissi Nagay</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, quisquam eum adipisci deleniti officia temporibus minima aut dicta nostrum quod velit delectus repellendus odio fugiat. Nam deleniti a quo excepturi?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="companies">
                    <h1 data-aos='zoom-out'>Trusted Companies</h1>
                    <p data-aos='zoom-in-up'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, provident!
                    </p>
                    <div className="companie-list">
                        <h4 className="comp" data-aos='slide-up'>Jumia Foods</h4>
                        <h4 className="comp" data-aos='slide-right'>TakeFood</h4>
                        <h4 className="comp" data-aos='slide-left'>Food Pastries</h4>
                        <h4 className="comp" data-aos='slide-down'>KFC int.l</h4>
                        <h4 className="comp" data-aos='slide-up'>Burger King</h4>
                        <h4 className="comp" data-aos='slide-right'>Chef Bonjour</h4>
                    </div>
                </div>

                <div className="request">
                    <h1 data-aos='zoom-out'>Request A Cullinary Expertise now</h1>
                    <div className="form-mail">
                        <form action="">
                            <input type="text" id='name' placeholder='Your name' data-aos='flip-right' data-aos-delay='500' />
                            <input type="email" id="email" placeholder='Your E-mail' data-aos='flip-right' data-aos-delay='600' />
                            <input type="tel" id="tel" placeholder='Your Telephone' data-aos='flip-right' data-aos-delay='700' />
                            <label htmlFor="">Your message</label>
                            <textarea id="message" cols="30" rows="10" data-aos='flip-right' data-aos-delay='800'></textarea>

                            <button data-aos='zoom-in-up'>send message</button>
                        </form>
                        <div className="form-mail-img">
                            <img src={mailImg} alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home