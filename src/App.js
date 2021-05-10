import img from './killua.jpg';
import './App.css';
import './style.css';


function App() {
  return (
    <div className="App">
      <div className="awesome" style={{border: '1px solid red'}}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" />
          <h1 className="title red">Your name here</h1>
          <br />
          <img src={img} />
          <br />
          <img src="./luffy.jpg" />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>

    </div>
  );
}

export default App;
