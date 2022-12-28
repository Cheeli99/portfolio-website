import 'bootstrap';
import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../index.css';

const Navbar = () => {
  return (
    <div>
      <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand" href="#page-top">Evan McCarthy</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="#portfolio">Portfolio</a>
            <a class="nav-link" href="#about">About</a>
            <a class="nav-link" href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;