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
          <h3 class="masthead-brand">Evan McCarthy</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="index.html">Home</a>
            <a class="nav-link" href="privacy.html">Privacy Policy</a>
            <a class="nav-link" href="credits.html">Credits</a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;