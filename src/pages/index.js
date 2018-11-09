import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/me.jpg'
import pic02 from '../assets/images/ChoreTurn.jpg'
import pic03 from '../assets/images/Expensify.jpg'
import pic04 from '../assets/images/Potluck.jpg'
import pic05 from '../assets/images/stockmarket.jpg'
import pic06 from '../assets/images/trella.jpg'
import pic07 from '../assets/images/recipeme.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Penn Camp";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            <p>My name is Penn Camp. I am a 25 year old Virginian based in New York City. I received my BA in Philosophy from the University of Colorado in 2015. I discovered my passion for web development while I was working in the real estate business in Virginia. I moved to New York in September of 2017 and graduated from Dev BootCamp in November. Since then I have been working as a Real Estate Referral Agent and seeking frontend developer opportunities in the New York area.<br></br><br></br>In my free time, I enjoy sketching, playing music, writing and exercise. I also am a big believer in mindfulness. My dream job would be working for a tech company involved in music or marketing. </p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-html5"></span></li>
                                <li><span className="icon style2 major fa-css3"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2></h2>
                            </header>
                            <p>At Dev BootCamp the technologies the program focused on were Ruby, Sinatra, jQuery, AJAX, Rspec, PG, ActiveRecord and SQlite with some focus on React.JS and vanilla JavaScript. The program emphasized algorithmic thinking, scaffolding programming languages, TDD, and soft skills including a class called engineering empathy that fostered optimal learning and team dynamics.</p>
                            <p>After Dev BootCamp, I decided to put more focus on frontend development. I picked up ES6 and Sass fairly quickly and starting making single page applications with React and enzyme. Lately my focus has been getting better at developing sites using React, Redux and Firebase.</p>
                            <p>In the future I would like to learn Angular, Vue, and how to use Node to build out the backend of my applications. Right now, my primary goal is to become the best frontend developer I can become, before moving on to a fullstack position.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Portfolio</h2>
                            </header>
                            <h3>React.Js</h3>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>ChoreTurn</h3>
                            <p>ChoreTurn is a preact progressive web application that utilizes a rails postgresql backend that allows users to create a household with their roommates and assign chores with due dates. Our team, led by my good friend Amber Jhane, developed this app in a week.</p>
                            <ul className="actions">
                                <li><a href="https://www.amberjhane.com/chore-turn/" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Expensify</h3>
                            <p>React application that utilizes redux and firebase from Andrew Mead's course "The Complete React Web Developer Course." The features of this app include authentication through google, adding, editing, and deleting expenses. There is a calendar so users can find expenses by dates, a search bar, filter and sort expenses by date or amount.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/cpcamp2/Expensify" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Potluck</h3>
                            <p>A practice react app that utilizes firebase. Invite friends to app with google authentication, owners can add dishes they'll bring to the potluck and remove them if they've had a change of heart.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/cpcamp2/potluck" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                            </header>
                            <h3>Rails</h3>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic05} alt="" /></span>
                            <h3>Stocker</h3>
                            <p>This is a rails application that utilizes the stock_quote gem. It has authentication, users can search stocks for information on specific stocks with a description and add them to their watchlist.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/cpcamp2/StockMarket" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic06} alt="" /></span>
                            <h3>Trella</h3>
                            <p>Trella is a ruby on rails clone of trello. This was created for pure rails practice.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/cpcamp2/Trella" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic07} alt="" /></span>
                            <h3>RecipeMe</h3>
                            <p>RecipeMe is a rails application that I worked on with David Skaggs. Features: User authentication, CRUD for recipes, and a rating system for recipes. The styling was done with materialize.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/davidtskaggs/RecipeMe" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Contact Me</h2>
                        </header>
                          <p>Penn Camp<br></br>(434) 987-1820<br></br>cpcamp2@gmail.com</p>
                        <ul className="actions uniform">
                            <li><a href="https://www.linkedin.com/in/cpcamp2/" className="button special">Linkedin</a></li>
                            <li><a href="https://github.com/cpcamp2" className="button">Github</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
