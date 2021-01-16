import rachel from './rachel.png';
import './App.css';

function App() {
  return (
    <div className="content">
      <div className="content-box">
        <div className="content-box-hero">
          <HeroImage />
        </div>
        <div className="content-box-intro">
          <h1>
            Rachel Lin is building tools for back-office financial services at Pilot
          </h1>
          <h2>
            <p>
              I am a multidisciplinary digital designer passionate about creating tools that empower people to do their best work.
            </p>
            <p>
              I have delivered intuitive tools for a variety of complex domains with high business impact for the education communication platform at Remind, prototyping enterprise applications at SAP, and navigating trips at TripIt.
            </p>
            <p>
              When I’m off-duty, you can find me learning languages or experimenting in the kitchen.
            </p>
            <p>
              My resume and portfolio are available upon request. Get in touch or send punny jokes to linrac@gmail.com  👋
            </p>
          </h2>
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

export default App;
