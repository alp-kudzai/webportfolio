//images
import klogo from './klogo.svg'
import oldPortfolio from './portfoliosite.jpg'
import productLpage from './productpage.jpg'
import surveyForm from './surveyform.jpg'
import timerSite from './timer.jpg'
import phone from './phone.png'
import emailImg from './email.png'
import github from './github.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'
import locationIcon from './location-pin.png'
import star4 from './s4.png'
import star3 from './s3.png'
//react
import React, {Fragment} from 'react'
//css
import './app2.css'

//I need: Navbar, About, Work, Resume & Footer

const App = () => {
    return (
        <Fragment>
            <Navbar/>
            <About/>
            <Work/>
            <Resume/>
            <Footer/>
        </Fragment>
    )
}

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img id='logo' src={klogo} alt="Logo"/>
                </div>
                <div className="navbar-links">
                    <a className='navlinks' id='about-nav' href="#about">About</a>
                    <a className='navlinks' id='work-nav' href="#work">Work</a>
                    <a className='navlinks' id='resume-nav' href="#resume">Resum&egrave;</a>
                </div>
            </div>
        </div>
    )
}

const About =() => {
    return(
        <div id='about' className='about'>
            <h1 id='intro'>
                Hello, I'm Kudzai. 
            </h1>
            <h3 id='aspire'>Aspiring Web Developer</h3>
            <div id='aboutMe'>
                <p className='glow-text'>
                It gives me satisfaction to put what I have learnt into practice and see the result of my work. I am a self taught programmer, and my passion for technology was seeded as a child because we owned a PC. Through games I got hooked.
                <br></br>
                I am currently working on perfecting my skills in Javascript, React, and Node.js. I am looking forward to learning more about the latest technologies and how they can be used to create a better user experience.
                </p>
            </div>
              
            <div id='about-contact'>
                <h4>You can reach out on any of the platforms below and see other work on Githhub.</h4>
                <div id='about-socials'>
                    <a href='https://github.com/alp-kudzai'>
                        <img id='g-icon' className='icon-link about-icon' alt='#' src={github}/>
                    </a>
                    <a href='https://twitter.com/KudzaiAlpha'>
                        <img id='t-icon' className='icon-link about-icon' alt='#' src={twitter}/>
                    </a>
                    <a href='https://www.linkedin.com/in/kudzai-matsika-117698182/'>
                        <img id='l-icon' className='icon-link about-icon' alt='#' src={linkedin}/>
                    </a>
                    <a href='mailto:alpha.kudzai@gmail.com'>
                        <img id='e-icon' className='icon-link about-icon' alt='#' src={emailImg}/>
                    </a>
                </div>
            </div>
              
        </div>
    )
}

const Work = () => {
    return (
        <div id='work' className='work'>
            <h1 id='work-head'>Most Recent Work</h1>
            <section className='workWrapper'>
                <div className='work-slider'>
                    <div className='work-slides'>
                        <div className='work-slide' id='slide-1'>
                            <img alt='#' src={oldPortfolio} className='workImg'/>
                            <div className='work-slide-text'>
                                <h3><a className='work-link' href='https://codepen.io/alp-kudzai/pen/MWopxXj'>Previous Portfolio</a></h3>
                            </div>
                        </div>
                        <div className='work-slide' id='slide-2'>
                            <img alt='#' src={productLpage} className='workImg'/>
                            <div className='work-slide-text'>
                                <h3><a className='work-link' href='https://codepen.io/alp-kudzai/pen/XWgNLPq'>Mock Product Site</a></h3>
                            </div>
                        </div>
                        <div className='work-slide' id='slide-3'>
                            <img alt='#' src={surveyForm} className='workImg'/>
                            <div className='work-slide-text'>
                                <h3><a className='work-link' href='https://codepen.io/alp-kudzai/pen/NWgRgvp'>Mock Survey Form</a></h3>
                            </div>
                        </div>
                        <div className='work-slide' id='slide-4'>
                            <img alt='#' src={timerSite} className='workImg'/>
                            <div className='work-slide-text'>
                                <h3><a className='work-link' href='https://codepen.io/alp-kudzai/pen/XWaPrpJ'>25 + 5 React Timer</a></h3>
                            </div>
                        </div>
                    </div>
                    
                    <a className='work-slide-link' href='#slide-1'>1</a>
                    <a className='work-slide-link' href='#slide-2'>2</a>
                    <a className='work-slide-link' href='#slide-3'>3</a>
                    <a className='work-slide-link' href='#slide-4'>4</a>
                </div>
            </section>
            <p id='work-footer'>
                You can see more of my work on <a className='work-link' href='https://codepen.io/alp-kudzai'>Codepen</a> and on <a className='work-link' href='https://replit.com/@alp-kudzai'>Replit</a>.
            </p>
        </div>
    )
}

const Resume =() => {
    return (
        <div id='resume'>
            <div id='resume-side'>
                <div id='resume-side-header'>
                    <h2 id='resume-head'>Kudzai's Resum&egrave;</h2>
                    <h3>Web Developer</h3>
                </div>
                <div id='resume-education'>
                    <h3>Education</h3>
                    <div id='education-text'>
                            <h4>2014-2016 University of Pretoria</h4>
                            <p>Bachelors in Political Sciences</p>
                            <h4>2018-2019 University of South Africa</h4>
                            <p>Bachelors in Politics Philosophy and Economics</p>
                    </div>
                </div>
                <div id='personal-info'>
                    <div id='location'>
                        <img className='icon-link' alt='' src={locationIcon} />
                        <p>Johannesburg, South Africa</p>
                    </div>
                    <div id='contact-info'>
                        <div id='phone-num'>
                            <img className='icon-link' alt='' src={phone} />
                            <p>+27 65 508 1749</p>
                        </div>
                        <div id='social-media'>
                            <a className='resume-link' rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/kudzai-matsika-117698182/'>
                                <img className='icon-link' alt='' src={linkedin} />
                            </a>
                            <a className='resume-link' rel='noreferrer' target='_blank' href='https://github.com/alp-kudzai'>
                                <img className='icon-link' alt='' src={github} />
                            </a>
                            <a className='resume-link' rel='noreferrer' target='_blank' href='https://twitter.com/KudzaiAlpha'>
                                <img className='icon-link' alt='' src={twitter} />
                            </a>
                            <a className='resume-link' rel='noreferrer' target='_blank' href='mailto:alpha.kudzai@gmail.com'>
                                <img className='icon-link' alt='' src={emailImg} />
                            </a>
                        </div>
                    </div>
                </div>
                <div id='resume-skills'>
                    <h3>Hard Skills</h3>
                    <ul className='resume-list'>
                        <li>HTML   <img alt='rating' src={star4} width='51px' height='10px'/></li>
                        <li>CSS   <img alt='rating' src={star3} width='51px' height='10px'/></li>
                        <li>JavaScript   <img alt='rating' src={star3} width='51px' height='10px'/></li>
                        <li>Python   <img alt='rating' src={star3} width='51px' height='10px'/></li>
                    </ul>
                    <h3>Soft Skills</h3>
                    <ul className='resume-list'>
                        <li>Teamwork</li>
                        <li>Problem Solving</li>
                        <li>Adaptability</li>
                        <li>Integrity</li>
                        <li>Coachability</li>
                    </ul>
                </div>
            </div>
            <div id='resume-main'>
                <div id='resume-workExp'>
                    <h3 className='resume-main-header'>Work Experience</h3>
                    <div id='resume-workExp-text'>
                        <h4>2020-Current</h4>
                        <ul className='resume-list'>
                            <li>Started a small burger business during the latter part of the pandemic due to income uncertainty</li>
                            <li>This was also when I pivoted from Python to Javascript as the job prospects are greater</li>
                        </ul>
                        <h4>2017-2019</h4>
                        <ul className='resume-list'>
                            <li>Worked as an assistant for an Environmental, Health and Safety business, Simeka SHEQ.</li>
                            <li>I proof read various reports including EIAs and BAR when doing enivonmental work</li>
                            <li>Wrote up, and followed up on the mandated adverts for the newspapers needed for Public Participation in the communities where we were doing work.</li>
                            <li>I also worked in the Agricultural and Poultry business owned by the founder of Simeka SHEQ, were I cleaned the coupes and feed the chickens during the growing phase and lastly I did the slaughtering and dressing of the poultry.</li>
                        </ul>
                    </div>
                </div>
                <div id='resume-interests'>
                    <h3 className='resume-main-header'>Interests</h3>
                    <div id='resumeInt-text'>
                    <ul className='resume-list'>
                        <li>Playing guitar and bass</li>
                        <li>Watching Motorsport</li>
                        <li>Exercising</li>
                        <li>Gaming</li>
                    </ul>
                    </div>
                </div>
                <div id='resume-addInfo'>
                    <h3 className='resume-main-header'>Additional Information</h3>
                    <div id='resume-infoText'>
                        <p>
                            I did not complete my degree in Political Science at U.P because of finances hence me applying to UNISA in the hopes of getting a degree in Politics, Economics and Philosophy.
                        </p>
                        <p>
                            I can safely say that I made an error in pursuing a degree in the Arts because I am a more analytical than creative.
                            I have always been interested in tech and I can remember tinkering with broken toy motors and building smaller toys with the broken parts. That is why I pivoted into programming.
                        </p>
                        <p>
                            I would like to be part of a team of like minds working towards building great products. You can only learn so much from online courses and trial by fire, I believe, will make me better. I believe I can add value to my future employee's company because I wear my heart on my sleeve and I will always work towards becoming a better programmer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

const Footer = () => {
    return (
        <div id='footer'>
            <div id='about-socials'>
                <a href='https://github.com/alp-kudzai'>
                    <img className='icon-link' alt='' src={github}/>
                </a>
                <a href='https://twitter.com/KudzaiAlpha'>
                    <img className='icon-link' alt='' src={twitter}/>
                </a>
                <a href='https://www.linkedin.com/in/kudzai-matsika-117698182/'>
                    <img className='icon-link' alt='' src={linkedin}/>
                </a>
            </div>
            <p id='footer-text'>
               All Rights Reserved &copy; {new Date().getFullYear()} Kudzai Matsika
            </p>
        </div>
    )
}

export {App}