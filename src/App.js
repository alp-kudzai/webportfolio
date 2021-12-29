import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { createStore } from 'redux'
import { CSSTransition } from "react-transition-group"
import { useState } from 'react'
import klogo from './klogo.svg'
import drumMachine from './drummachine.jpg'
import markdownP from './markdown.jpg'
import oldPortfolio from './portfoliosite.jpg'
import productLpage from './productpage.jpg'
import quoteMachine from './quotemachine.jpg'
import surveyForm from './surveyform.jpg'
import techDocSite from './techdocsite.jpg'
import timerSite from './timer.jpg'
import tributePage from './tributesite.jpg'
import phone from './phone.png'
import emailImg from './email.png'
import github from './github.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'
import locationIcon from './location-pin.png'
import star4 from './s4.png'
import star3 from './s3.png'


const intialState = {
  cellCount: 4,
  index: 0,
  angle: 0,
  currentPage: 'about',
  pageAngle: 0,
  pageStyle: {transform: `translateZ(-500px) rotateX(0deg)`},
  style: {transform: `translateZ(-450px) rotateY(0deg)`},
  workIndex: 0,
  bestWorkLinks: ['https://codepen.io/alp-kudzai/pen/XWgNLPq', 'https://codepen.io/alp-kudzai/pen/NWgRgvp', 'https://codepen.io/alp-kudzai/pen/MWopxXj', 'https://codepen.io/alp-kudzai/pen/XWaPrpJ'],
  bestWorkTitle: ['Product/Services Landing Page', 'General Form', 'Old Portfolio Site', '25 + 5 Countdown Timer'],
  bestWorkCurrent: 'Product/Services Landing Page',
  bestWork: [productLpage,surveyForm,oldPortfolio,timerSite],
}

// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

const ABOUT = {
  type: 'ABOUT'
}

const BESTWORK = {
  type: 'BESTWORK'
}

const WORK = {
  type: 'WORK'
}

const RESUME = {
  type: 'RESUME'
}

const nextWork = {
  type: 'NEXT_WORK',
}
const prevWork ={
  type: 'PREV_WORK',
}

const BESTWORK_Z = 450
const PAGE_Z = 500

function reducer(state = intialState, action) {
  switch(action.type) {
      case 'NEXT_WORK':
          let currentWorkIndex;
          if (state.workIndex === 3){
              currentWorkIndex = 0
          } else {
              currentWorkIndex = state.workIndex + 1
          }
          return {
              ...state, index: state.index + 1, 
              workIndex: currentWorkIndex,
              bestWorkCurrent: state.bestWorkTitle[currentWorkIndex],
              angle: state.angle - 90,
              style: {transform: `translate(-${BESTWORK_Z}px) rotateY(${state.angle}deg)`} 
          }
      case 'PREV_WORK':
          let prevWorkIndex;
          if (state.workIndex === 0){
              prevWorkIndex = 3
          } else {
              prevWorkIndex = state.workIndex - 1
          }
          return {
              ...state, 
              index: state.index - 1,
              workIndex: prevWorkIndex,
              bestWorkCurrent: state.bestWorkTitle[prevWorkIndex],
              angle: state.angle + 90,
              style: {transform: `translate(-${BESTWORK_Z}px}) rotateX(${state.angle}deg)`}
          }
      case 'ABOUT':
          return {
              ...state,
              pageAngle: state.pageAngle+getPageAngle(state.currentPage, 'about'),
              pageStyle: {transform: `translateZ(-${PAGE_Z}px) rotateX(${state.pageAngle+getPageAngle(state.currentPage, 'about')}deg)`},
              currentPage: 'about',
          }
      case 'BESTWORK':
          return {
              ...state,
              pageAngle: state.pageAngle+getPageAngle(state.currentPage, 'bestWork'),
              pageStyle: {transform: `translateZ(-${PAGE_Z}px) rotateX(${state.pageAngle+getPageAngle(state.currentPage, 'bestWork')}deg)`},
              currentPage: 'bestWork',
          }
      case 'WORK':
          return {
              ...state,
              pageAngle: state.pageAngle+getPageAngle(state.currentPage, 'work'),
              pageStyle: {transform: `translateZ(-${PAGE_Z}px) rotateX(${state.pageAngle+getPageAngle(state.currentPage, 'work')}deg)`},
              currentPage: 'work',
          }
      case 'RESUME':
          return {
              ...state,
              pageAngle: state.pageAngle+getPageAngle(state.currentPage, 'resume'),
              pageStyle: {transform: `translateZ(-${PAGE_Z}px) rotateX(${state.pageAngle+getPageAngle(state.currentPage, 'resume')}deg)`},
              currentPage: 'resume',
          }
      default:
          return state
  }
}
//function that calculates what angle to rotate the page to based on the current page
const getPageAngle = (currentPage, pageToGo) => {
  let pageList = ['about', 'bestWork', 'work', 'resume']
  let constAngle = 90
  let currentIndex = pageList.indexOf(currentPage)
  let pageIndex = pageList.indexOf(pageToGo)
  let angle = constAngle * (currentIndex - pageIndex)
  return angle
}

const store = createStore(reducer)

const App = () => {
  let state = useSelector(state => state)
  let styles = state.pageStyle
  return (
      <div id='contentWrapper'>
          <NavBar />
          <div id='pageScene'>
              <div id='pageCube' style={styles}>
                  <div id='pageCell'>
                      <About />
                  </div>
                  <div id='pageCell'>
                      <BestWork/>
                  </div>
                  <div id='pageCell'>
                      <Work />
                  </div>
                  <div id='pageCell'>
                      <Resume />
                  </div>
              </div>
          </div>
      </div>
      )
}

const NavBar = () => {
  let dispatch = useDispatch()
  let state = useSelector(state => state)
  let handleAbout = () => dispatch(ABOUT)
  let handleBestWork = () => dispatch(BESTWORK)
  let handleWork = () => dispatch(WORK)
  let handleResume = () => dispatch(RESUME)
  let navStyle = {
    color: '#cdcde1',
    transition: 'all ease-in 0.5s',
    opacity: '1',
}
let glowStyle = {
  color: '#cdcde1',
  textShadow: '0 0 7px #cdcde1, 0 0 10px #cdcde1, 0 0 21px #cdcde1, 0 0 42px rgba(97, 146, 93, 1), 0 0 82px rgba(97, 146, 93, 1), 0 0 92px rgba(97, 146, 93, 1), 0 0 102px rgba(97, 146, 93, 1), 0 0 151px rgba(97, 146, 93, 1)',
  animation: 'flicker 10s linear infinite alternate',
}
  const navGlow = (state, page) => {
    switch(state.currentPage){
        case page:
            return glowStyle
        default:
            return navStyle
  
    }
  }
  return (
      <div id='navBar'>
               <ul id='navList'>
                  <li>
                      <img id='mylogo' width='100' height='100' src={klogo} alt='klogo' id='klogo' onClick={handleAbout}/>
                  </li>
                  <li>
                      <button className='nav-button' onClick={handleAbout} style={navGlow(state, 'about')} id='Babout'>About</button>
                  </li>
                  <li>
                      <button className='nav-button' onClick={handleBestWork} style={navGlow(state, 'bestWork')} id='BbestWork'>Best Work</button>
                  </li>
                  <li>
                      <button className='nav-button' onClick={handleWork} style={navGlow(state, 'work')} id='Bwork'>Work</button>
                  </li>
                  <li>
                      <button className='nav-button' onClick={handleResume} style={navGlow(state, 'resume')} id='Bresume'>Resum&egrave;</button>
                  </li>
              </ul>   
      </div>
  )
}

const About = () => {
  return(
      <div id='about'>
            <h1 id='intro'>
                Hello, I'm Kudzai. 
            </h1>
            <h3 id='aspire'>Aspiring Web Developer</h3>
            <div id='aboutMe'>
                <p>
                It gives me satisfaction to put what I have learnt into practice and see the result of my work. I am a self taught programmer, and my passion for computer technology came from growing up with a PC in our home. Through games I got hooked. Currently I am working on my portfolio and I am looking forward to learning more about web technologies.
                </p>
                <p>
                I would like to gain experience in team centered web development because it is my belief that working with more skilled individuals strengthens the weak link. My greatest asset is the ability to learn, and I have acquired other skills such as acoustic and bass guitar. I am not perfect in being self taught, there are pitfalls one cannot forsee, but I am willing to course-correct and grow.
                I am generally a reserved person, bordering on awkward but I warm up to people easly. Some of my interests include Formula One, a good book and a good coffee.
                </p>
            </div>
            <div id='about-reachout'>
                <h4>You can reach out on any of the platforms below and see other work on Githhub.</h4>
                <div id='about-socials'>
                    <a href='https://github.com/alp-kudzai'>
                        <img className='icon-linkA' alt='' width='40px' height='40px' src={github}/>
                    </a>
                    <a href='https://twitter.com/KudzaiAlpha'>
                        <img className='icon-linkA' alt='' width='40px' height='40px' src={twitter}/>
                    </a>
                    <a href='https://www.linkedin.com/in/kudzai-matsika-117698182/'>
                        <img className='icon-linkA' alt='' width='40px' height='40px' src={linkedin}/>
                    </a>
                </div>
            </div>
      </div>
      )
}

const BestWork = () => {
  //code something that selects BestWork from the document, creates a variable for cube cell count, and then an index variable
  const [inBestWork, setInBestWork] = useState(true)
  let dispatch = useDispatch()
  let state = useSelector(state => state)
//   if (state.currentPage == 'about'){
//       setInBestWork(true)
//   }

  let handleNext = () => {
      setInBestWork(false)
      setTimeout(() => {
        dispatch(nextWork)
        setInBestWork(true)
      }, 800)
  }
  let handlePrev = () => {
      setInBestWork(false)
      setTimeout(() => {
        dispatch(prevWork)
        setInBestWork(true)
      }, 800)
  }
  let styles = {
      transform: `translateZ(-${BESTWORK_Z}px) rotateY(${state.angle}deg)`
  }
  
  return (
      <div id='bestWork'>
          <div className='scene'>
              <div className='cube' style={styles}>
                  <div className='cube-cell'><img alt='' className='proj' src={state.bestWork[0]}/></div>
                  <div className='cube-cell'><img alt='' className='proj' src={state.bestWork[1]}/></div>
                  <div className='cube-cell'><img alt='' className='proj' src={state.bestWork[2]}/></div>
                  <div className='cube-cell'><img alt='' className='proj' src={state.bestWork[3]}/></div>
              </div>
          </div>
          <div id='buttonWrapper'>
              <button className='previous-button' onClick={handlePrev}>&lt;</button>
              <CSSTransition
                  in={inBestWork}
                  timeout={500}
                  classNames='fade'
                  mountOnEnter
                  unmountOnExit
                  >
                      <a id='bestWork-link' target='_blank' rel='noreferrer' key='animateLink' href={state.bestWorkLinks[state.workIndex]}>{state.bestWorkCurrent}</a>
              </CSSTransition>
              <button className='next-button' onClick={handleNext}>&gt;</button>
          </div>
      </div>
  )
}

const Work = () => {
  return (
      <div id='work'>
          <div className='workItem'>
              {/* Quote Machine */}
              <img className='proj-image' alt='Quote Machine' src={quoteMachine}/>
              <div className='workItem-text'>
                  <h3><a target='_blank' rel='noreferrer' id='workItem-link' href='https://codepen.io/alp-kudzai/pen/eYRLxQL'>Quote Machine</a></h3>
              </div>
              <div className='workItem-description'>My site made using React. It was a challenge grasping Class Components.</div>
          </div>
          <div className='workItem'>
              {/* Drum Machine */}
              <img className='proj-image' src={drumMachine} alt='Drum Machine'/>
              <div className='workItem-text'>
                  <h3><a target='_blank' rel='noreferrer' id='workItem-link' href='https://codepen.io/alp-kudzai/pen/LYjVjab'>Drum Machine</a></h3>
              </div> 
              <div className='workItem-description'>This site was difficult to get passed. The Free Code Camp test required that you use an inline audio tag tag while I had used a function to create the necessary tags. It took me a while to realise the issue, but I learnt a lot from this site. It was also when I switched to using functional React rather than Classes.</div>
          </div>
          <div className='workItem'>
              {/* Tribute page   */}
              <img className='proj-image' alt='Tribute Page' src={tributePage}/>
              <div className='workItem-text'>
                  <h3><a target='_blank' rel='noreferrer' id='workItem-link' href='https://codepen.io/alp-kudzai/pen/YzQGqaR'>Tribute Page</a></h3>
              </div> 
              <div className='workItem-description'>This was a basic page made with pure HTML and CSS.</div>
          </div>
          <div className='workItem'>
              {/* Technical documentation */}
              <img className='proj-image' src={techDocSite} alt='Techinal Doc Site'/>
              <div className='workItem-text'>
                  <h3><a target='_blank' rel='noreferrer' id='workItem-link' href='https://codepen.io/alp-kudzai/pen/OJgpbyO'>Technical Documentation Site</a></h3>
              </div> 
              <div className='workItem-description'>This too is a pure HTML and CSS site made to resemble a Technical Documentation Site. It was one of my firsts.</div>
          </div>
          <div className='workItem'>
              {/* MarkDown Previewer */}
              <img className='proj-image' alt='Markdown Previewer' src={markdownP}/> 
              <div className='workItem-text'>
                  <h3><a target='_blank' rel='noreferrer' id='workItem-link' href='https://codepen.io/alp-kudzai/pen/MWvWyOo'>Markdown Previewer</a></h3>
              </div> 
              <div className='workItem-description'>This was a big hurdle, because I had never used a libray to parse my input and actual get something useful. I was excited to see it work!</div> 
          </div>
      </div>
      )
}

const Resume = () => {
  return (
        <div id='resume'>
            <div id='resume-side'>
                <div id='resume-side-header'>
                    <h2>Kudzai Matsika</h2>
                    <h3>Aspiring Web Developer</h3>
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
                        <div id='contact'>
                            <div id='phone-num'>
                                <img className='icon-link' alt='' src={phone} />
                                <p>+27 81 526 3026</p>
                            </div>
                            <div id='email-info'>
                                <img className='icon-link' alt='' src={emailImg} />
                                <p><a id='email-link' target='_blank' href='alpha.kudzai@gmail.com'>Email</a></p>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div id='resume-skills'>
                    <h3>Hard Skills</h3>
                    <div id='hardSkills-text'>
                    <ul className='resume-list'>
                        <li>HTML   <img alt='rating' src={star4} width='51px' height='10px'/></li>
                        <li>CSS   <img alt='rating' src={star3} width='51px' height='10px'/></li>
                        <li>JavaScript   <img alt='rating' src={star3} width='51px' height='10px'/></li>
                        <li>Python   <img alt='rating' src={star3} width='51px' height='10px'/></li>
                    </ul>
                    </div>
                    <h3>Soft Skills</h3>
                    <div id='softSkills-text'>
                    <ul className='resume-list'>
                        <li>Teamwork</li>
                        <li>Problem Solving</li>
                        <li>Adaptability</li>
                        <li>Integrity</li>
                        <li>Coachability</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div id='resume-main'>
                
                <div id='resume-workExp'>
                    <h3>Work Experience</h3>
                    <div id='resume-chrono'>
                    <div id='resume-workExp-text'>
                        <h4>2020-Current</h4>
                        <ul id='resume-list'>
                            <li>Started a small burger business during the latter part of the pandemic due to income uncertainty</li>
                            <li>This was also when I pivoted from Python to Javascript as the job prospects are greater</li>
                        </ul>
                        <h4>2018-2019</h4>
                        <ul id='resume-list'>
                            <li>Worked as an assistant for an Environmental, Health and Safety business, Simeka SHEQ.</li>
                            <li>I proof read various reports including EIAs and BAR when doing enivonmental work</li>
                            <li>Wrote up, and followed up on the mandated adverts for the newspapers needed for Public Participation in the communities where we were doing work.</li>
                            <li>I also worked in the Agricultural and Poultry business owned by the founder of Simeka SHEQ, were I cleaned the coupes and feed the chickens during the growing phase and lastly I did the slaughtering and dressing of the poultry.</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div id='resume-interests'>
                    <h3>Interests</h3>
                    <div id='resume-int-text'>
                    <ul id='resume-list'>
                        <li>Playing guitar and bass</li>
                        <li>Watching motorsport particularly F1</li>
                        <li>Exercising</li>
                        <li>Gaming</li>
                        <li>Cooking</li>
                    </ul>
                    </div>
                </div>
                <div id='resume-addInfo'>
                    <h3>Additional Information</h3>
                    <div id='resume-infoText'>
                        <p>
                            I did not finish my Political Sciences degree because I was not performing well. I had depression and I was highly anxious about my future. I realised that I was doing a disservice to myself and my family by continuing as my mother had lost her job, so I dropped out.
                        </p>
                        <p>
                            I am Zimbabwean and a degree in Politics, Philosophy and Economics is not viable. I realise now that one of the sources of my anxiety was a lack of intellectual stimulation.
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

export {App, store};
