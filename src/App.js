import logo from './logo.svg';
import './App.css';

function About() {
  return (
    <div>
      about
    </div>
  )
}

function App() {
  const page = (() => {
    switch (window.location.pathname) {
      case "/": return <Home />
      case "/about": return <About />
      default: return <div>not found</div>
    }
  })()

  return (
    <div className="App">
      <Nav />
      {page}
    </div>
  )
}

function Home() {
  return (
    <div>
        <Header /> 
        <div>Work ⬇️</div>    
    </div>
  );
}

function Nav() {
  return (
    <div className="nav">
      <div>
        <a href="/" className={window.location.pathname === "/" ? "link--selected" : undefined}>
          Home
        </a>
      </div>
      <div>
        <a href="/about" className={window.location.pathname === "/about" ? "link--selected" : undefined}>
          About
        </a>
      </div>
      <div>
        Design
      </div>
    </div>
  )
}

function Header() {
  return (
    <div className="header">
      <div className="header-h">
        <h1>Rachel lin</h1>
        <h2>
        is a product designer building tools to empower people to do their best work
        </h2>
      </div>
    </div>
  )
}

export default App;
