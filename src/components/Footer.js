import 'bootstrap';
import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../index.css';

const Footer = () => {
  return (
    <div>
      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>Made by Evan McCarthy!
            <a href="https://github.com/Cheeli99" target="_blank" rel="noreferrer">
            <img src={require("../img/github_logo.png")} class="mastfoot__img" alt="Github logo"></img>
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;