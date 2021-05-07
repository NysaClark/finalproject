import earth from "./images/earth.png"
import './css/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./weather.json"

function App() {
  return (
    <div>
      {
        /*shows basic weather information for today*/
      }
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <img src={earth} alt="earth" width="10%"></img>
        <div class="container-fluid">
          <a href="#" class="navbar-brand text-white mb-0 h1">weather</a>
          <button class="bg-dark text-white navbar-toggler" type="button" data-bs-toggle='collapse' data-bs-target="#navbarSuppportedContent" aria-expanded='false' aria-label="Toggle Navigation">
            <span class='navbar-toggler-icon'> ||| </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSuppportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a href="#" aria-current="page" class="nav-link active text-white"> Home </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-white">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <footer class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light"></footer>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>


    </div>
  );
}


export default App;
