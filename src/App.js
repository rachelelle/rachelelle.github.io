import rachel from './rachel.png';
import email from './icons/email.svg';
import linkedin from './icons/linkedin.svg';
import instagram from './icons/instagram.svg';
import dribbble from './icons/dribbble.svg';
import twitter from './icons/twitter.svg';


import './App.css';

function App() {
  return (
    <div className="content-box">
      <div className="content-box-hero">
        <HeroImage />
      </div>
      <div className="content-box-intro">
        <div>
        <h1>
          Rachel Lin is building tools for financial services at <a href="http://pilot.com" target="_blank" className="link">Pilot</a>
        </h1>
        <h2>
          <p>
            I am a multidisciplinary digital designer passionate about creating tools that empower people to do their best work.
          </p>
          <p>
            I have created enterprise and consumer experiences in a variety of complex domains, from the education communication platform at <a href="http://remind.com" target="_blank">Remind</a> to prototyping enterprise applications at <a href="http://sap.com" target="_blank">SAP</a>.
          </p>
          <p>
            When I’m off-duty, you can find me learning languages or experimenting in the kitchen.
          </p>
          <p>
            My resume and portfolio are available upon request. Get in touch or send punny jokes my way 👋
          </p>
        </h2>
        </div>
        <div>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

function HeroImage() {
  return (
    <div className="content-hero">
      <img src={rachel}></img>
    </div>

  )
}

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="mailto:linrac@gmail.com"><img src={email}></img></a>
      <a href="http://linkedin.com/in/linrac" target="_blank"><img src={linkedin}></img></a>
      {/* <a href="https://www.instagram.com/rchlelle/" target="_blank"><img src={instagram}></img></a> */}
      <a href="https://dribbble.com/rachelelle" target="_blank"><img src={dribbble}></img></a>
      <a href="https://twitter.com/rchlelle" target="_blank"><img src={twitter}></img></a>
    </div> 

  )
}

export default App;
