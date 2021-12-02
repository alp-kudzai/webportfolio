import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { createStore } from 'redux'
import { CSSTransition } from "react-transition-group"

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
  bestWork: ['https://db5pap001files.storage.live.com/y4mdOalpR0KHHZaIO4G-i3_OelSKJqcZo8Bctey9TsLs-xzCDbBgLHOrGmzPFk8SJ_sgquV-YsxaOIa8SaP2YKfQL8rosvpOIS_feIqgT490OboeTrSovALNZWtzvXtXjenxSIVfbQXoj-RPl33WDtDDNVwygZs9ukg7BkqzxwNaNCHSAHgYADtu3BSWgzTtwN8?width=660&height=291&cropmode=none','https://db5pap001files.storage.live.com/y4mtkzJHzq17mOS0YbW_vQNoglEmKXGXYd71qSWI458uJxuPXQwX75VHUdj_ogcu7cDIs1nNdAjzO4zBMbzn_5dG9Jbsk9wXecekuhunsKS8cY5PUAQVw3-OU5JU7qaBetJtA-IrPzalZZI-EyDhMdAjs8dJ7mIpiDxIoQNORvWpwrGLmeL7GnD8arh8e-4m1NZ?width=660&height=291&cropmode=none','https://db5pap001files.storage.live.com/y4mp2HpVf9jj1evU8fZL3oI_WGuW_kBPUbZYXEn0KXlFsxdezhXt4zpL4-cph8g0btG22jr1PeuXCAAj87IY6zusHXszB8Q4Yk9QCC9osZ6UbOuqOX7g06D1R4SLNax59CGrFVT8KT1XBMGnpVTiRG0FubWlilYsJIFVi4op2qqi9CfSf14K9vEWk-SREeqBGaO?width=660&height=292&cropmode=none','https://db5pap001files.storage.live.com/y4mwFqVHS-62fzz6ZyRuSrNWjOW94fQ35NBv5qDLHGuv1vTrSr8kbe8LR6eWtmIOrMSiz_rXS2w8egmM1NHneff9ezIUlmg8xpgOcj4EyTLG_jRBRCkK7zcWuxWprLoAZDNK0fqy0GOfGcO6vXcKPlCvZBnUYREHrBjAgaw4azc2ErMk2-HccajQERPEr_ooM5X?width=660&height=289&cropmode=none'],
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
          if (state.workIndex == 3){
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
          if (state.workIndex == 0){
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
  let handleAbout = () => dispatch(ABOUT)
  let handleBestWork = () => dispatch(BESTWORK)
  let handleWork = () => dispatch(WORK)
  let handleResume = () => dispatch(RESUME)
  return (
      <div id='navBar'>
               <ul id='navList'>
                  <li>Logo</li>
                  <li>
                      <button onClick={handleAbout} id='Babout'>About</button>
                  </li>
                  <li>
                      <button onClick={handleBestWork} id='BbestWork'>Best Work</button>
                  </li>
                  <li>
                      <button onClick={handleWork} id='Bwork'>Work</button>
                  </li>
                  <li>
                      <button onClick={handleResume} id='Bresume'>Resum&egrave;</button>
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
              I am a tinkerer with a passion for learning and creating. I am a self taught programmer, who who intially got stuck in a rabbit hole of computer science related videos and came out of it with Python which shed into Javascript.
              </p>
              <p>
              I would like to gain experience in team centered web development because I believe that it is the best way to learn and grow as a developer.
              I am generally a reserved person, but I am open to learning new things and working on new projects. My Interests include Formula One, Exercising, a good book, and a good coffee.
              </p>
          </div>
      </div>
      )
}

const BestWork = () => {
  //code something that selects BestWork from the document, creates a variable for cube cell count, and then an index variable

  let dispatch = useDispatch()
  let state = useSelector(state => state)
  let handleNext = () => {
      dispatch(nextWork)
  }
  let handlePrev = () => {
      dispatch(prevWork)
  }
  let styles = {
      transform: `translateZ(-${BESTWORK_Z}px) rotateY(${state.angle}deg)`
  }
  
  return (
      <div id='bestWork'>
          <div className='scene'>
              <div className='cube' style={styles}>
                  <div className='cube-cell'><img id='proj' src={state.bestWork[0]}/></div>
                  <div className='cube-cell'><img id='proj' src={state.bestWork[1]}/></div>
                  <div className='cube-cell'><img id='proj' src={state.bestWork[2]}/></div>
                  <div className='cube-cell'><img id='proj' src={state.bestWork[3]}/></div>
              </div>
          </div>
          <div id='buttonWrapper'>
              <button className='previous-button' onClick={handlePrev}>&lt;</button>
              <CSSTransition
                  className='fade'
                  >
                      <a id='bestWork-link' key='animateLink' href={state.bestWorkLinks[state.workIndex]}>{state.bestWorkCurrent}</a>
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
              <img className='proj-image' src='https://db5pap001files.storage.live.com/y4mS0s1w-_8ckx0GIIXr_JRVW81M6amXo_luJ2oONaMH_-dGYQxLsZVMHQoOY3897oV2NehoSeewW21g1q71Gip0tOjx7AqJ7vg1NLVscFB1Ag6JO5gQuSWTj8i36fEGE9O394Lim7Rmgw5MYyTo0Vm_4r3WBg8WNRQS2pmh00Nr2S1Mfs0rxhO52Q79mIkHVaq?width=660&height=289&cropmode=none'/>
              <div className='workItem-text'>
                  <h3><a target='_blank' href='https://codepen.io/alp-kudzai/pen/eYRLxQL'>Quote Machine</a></h3>
              </div> 
          </div>
          <div className='workItem'>
              {/* Drum Machine */}
              <img className='proj-image' src='https://db5pap001files.storage.live.com/y4mu0YSO7APQKzjYoM1jBuic2zOVcWUNpaGv3Ud3y2vmFELeJPs7yqCkrqbrzHzbFF_4w7Jp6GYkq0nSxH8FYxEr9KA0lpCyTbWvQoyenvSpDhrH_fV4ZUzjXd-3ODGMMmC2l4RngXjCBfQ-tBWGZOfRPP61rUrMwlmR_TSzzjrbtnb3FE2nQBduzBAs8PO41LV?width=660&height=289&cropmode=none' alt='Drum Machine'/>
              <div className='workItem-text'>
                  <h3><a target='_blank' href='https://codepen.io/alp-kudzai/pen/LYjVjab'>Drum Machine</a></h3>
              </div> 
          </div>
          <div className='workItem'>
              {/* Tribute page   */}
              <img className='proj-image' alt='Tribute Page' src='https://db5pap001files.storage.live.com/y4mnbrkil85e35InyUTl_kpRhq65EVrtKVKGMmCCqkmjjQP7FFpGrPtyz2dF6TJX84zGCTSPBDORyNI3hbNCbzF7vQJE7vyng9Jel0KkpQ_upJdMXUEy4mjgHRxJBTbeVjduvH9QabR0i18Mt2V61oK9BtXPage4O_oqqUYrMDcgvHoFF69W9cBItiCNIc24bZS?width=660&height=289&cropmode=none'/>
              <div className='workItem-text'>
                  <h3><a target='_blank' href='https://codepen.io/alp-kudzai/pen/YzQGqaR'>Tribute Page</a></h3>
              </div> 
          </div>
          <div className='workItem'>
              {/* Technical documentation */}
              <img className='proj-image' src='https://db5pap001files.storage.live.com/y4m8TBJFzDcD_Xrr5LdbdMr45TGDG7G0mlcUcxXDSVXCYOi3VnOt8sKUFQWOLG3mTZw396x6eZ7flF0R0IHEW14Jr0uFvv4MenqY4v4fYbfOuIQKoVAecAqVHAyKoM2VfEzqs4FGCspvDm68AyYhZ-0hA_cTwbv2kQtvF3TA4NPKBQhQYfkJK_u056V3P37P5S_?width=660&height=289&cropmode=none' alt='Techinal Doc Site'/>
              <div className='workItem-text'>
                  <h3><a target='_blank' href='https://codepen.io/alp-kudzai/pen/OJgpbyO'>Technical Documentation Site</a></h3>
              </div> 
          </div>
          <div className='workItem'>
              {/* MarkDown Previewer */}
              <img className='proj-image' alt='Markdown Previewer' src='https://db5pap001files.storage.live.com/y4mQACgPZAQvJWj8XVS_sLxojU3i348jdB54pezIL4uzWi2vc6Mb5JPEamGo0Ug4CnbHlz8hkE-L9jC9zTNFlS6tKRVbM3eKA46h0g9BvL7dV7hNcvrpgQrVAxmzvi9exRFOjGmQC04mBzW9dy98FQ9FQlXtC7IvJpGwds7RikiBxm9Jy5Q5sdNbJo5yG61Furn?width=660&height=289&cropmode=none'/> 
              <div className='workItem-text'>
                  <h3><a target='_blank' href='https://codepen.io/alp-kudzai/pen/MWvWyOo'>Markdown Previewer</a></h3>
              </div>  
          </div>
      </div>
      )
}

const Resume = () => {
  return (
      <div id='resume'>
          Link to resume goes here
      </div>
  )
}

export {App, store};
