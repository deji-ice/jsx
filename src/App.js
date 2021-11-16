import logo from './nikhil-kesharwani-VHm_TvKhISU-unsplash.jpg';
import './style.css';
import './components/video'
import video from './How to Draw a Line in Photoshop - YouTube.mkv'


function App() {
  return (
    <div style={{border:"solid 1px black" , maxWidth:"100vw"}}>
       <h1 className="title red">Your name here</h1> <br/>
       <img width="520" height="640" src={logo} alt="src" /> <br/>
       <img width="620" height="740" src="\levi-stute-mFF39sOZSgM-unsplash.jpg" alt="BigCo Inc. logo"/>
       <video width="750" height="500" controls >
      <source src={video} type="video/mkv"/>
     </video>

    </div>



  );
}

export default App;
