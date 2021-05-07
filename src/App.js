import earth from "./images/earth.png"
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <body>
    {
    /*shows basic weather information for today*/
    }
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={earth} alt="earth" width="10%"></img>
        <a class="navbar-brand" href="#">Weather</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Daily</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Hourly</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Week</a>
          </li>
        </ul>
      </div>
    </nav>


    {
    /*shows basic weather information for today*/
    }
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <ul>
            <li class="location">City, State</li>
            <li class="temp">Temp</li>
            <li class="weather-type">Type of Weather</li>
          </ul>
        </div>
        <div class="col-sm">
          <img class="weatherSVG" alt="svg for weather"></img>
        </div>
      </div>
    </div>
    

    {
    /*shows basic weather information for today*/
    }



    <footer></footer>

    
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>

    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>


    </body>
  );
}


export default App;
