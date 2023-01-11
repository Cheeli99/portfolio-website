import 'bootstrap';
import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../index.css';

const Body = () => {
    return (
        <div>
            <main role="main" class="inner cover">

                <header class="masthead text-white text-center">
                <div class="heading-container d-flex align-items-center flex-column">
                    
                    <h1 class="masthead-heading mb-0">Evan McCarthy</h1>
                    
                    <p class="masthead-subheading font-weight-light mb-0">Front End Developer - Software Developer</p>
                </div>
                </header>

                <section id="portfolio" class="portfolio">
                <h1 class="cover-heading">Projects</h1>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg mb-4 mb-lg-5">
                                <div class="icon-box-left col-lg-9 mb-4 mb-lg-4">
                                    <p >
                                        <a href="https://pokemon-ribbon-tracker.vercel.app" target="_blank" rel="noreferrer">
                                            <img src={require("../img/pokemon-ribbon-tracker.png")} class="rounded box-img img-fluid mx-3 d-block" alt="Pokemon Ribbon Tracker website"></img>
                                        </a>
                                        <h2 class="icon-text-heading">Pokemon Ribbon Tracker</h2>
                                        <p class="icon-text">Created with Bootstrap 4, HTML5/CSS3 and Javascript, this website helps its users with keeping track of their in-game ribbons and markings.</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg mb-4 mb-lg-5">
                                <div class="icon-box-right col-lg-9 mb-4 mb-lg-4">
                                    <p >
                                        <a href="index.html" target="_blank" rel="noreferrer">
                                            <img src={require("../img/jeopardy.png")} class="rounded box-img img-fluid mx-3 d-block" alt="Jeopardy game"></img>
                                        </a>
                                        <h2 class="icon-text-heading">Jeopardy Game</h2>
                                        <p class="icon-text">Created with Java and Java Swing, this seminar project replicates the iconic game show Jeopardy into a video game format. This program has two sets of unique
                                                             technology themed questions that the user can choose before starting the game.</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg mb-4 mb-lg-5">
                                <div class="icon-box-left col-lg-9 mb-4 mb-lg-4">
                                    <p >
                                        <a href="index.html" target="_blank" rel="noreferrer">
                                            <img src={require("../img/kiosk_first_screen.png")} class="rounded box-img img-fluid mx-3 d-block" alt="Kiosk program"></img>
                                        </a>
                                        <h2 class="icon-text-heading">Center for Applied Technology (CAT) Kiosk Program</h2>
                                        <p class="icon-text">Created with Java and Javafx, this seminar project provides information about Wayne State College's CAT building.</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg mb-4 mb-lg-5">
                                <div class="icon-box-right col-lg-9 mb-4 mb-lg-4">
                                    <p >
                                        <a href="https://replit.com/@Cheeli99/Math-Tutor#main.cpp" target="_blank" rel="noreferrer">
                                            <img src={require("../img/math_tutor.png")} class="rounded box-img img-fluid mx-3 d-block" alt="Math tutor program"></img>
                                        </a>
                                        <h2 class="icon-text-heading">Math Tutor Program</h2>
                                        <p class="icon-text"> Created with C++, this program helps the user practice their math skills.</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section class="about page-section text-white mb-0" id="about">

                <h1 class="page-section-heading text-center text-uppercase text-white mb-5">About</h1>

                <div class="about__content">

                    <div class="profile">
                        <div class="profile_blurb"><p class="lead"></p>A recent grad from Wayne State College, I'm a front end developer and software developer with a deep 
                                passion for learning and growing. The combination of problem solving, creativity and logic, drives my excitement and passion for web development and software development.
                                When I'm not programming, I like to spend my time playing video games, keeping fit and producing YouTube videos.
                        </div>
                    </div>

                    <div class="skills">
                        <div class="skills__row">
                            
                            <div class="skills__item">
                            <img src={require("../img/html_logo.png")} class="" alt="HTML logo"></img>
                            </div>
                            <div class="skills__item">
                            <img src={require("../img/css_logo.png")} class="" alt="CSS logo"></img>
                            </div>
                        </div>
                        <div class="skills__row">
                            <div class="skills__item">
                            <img src={require("../img/js_logo.png")} class="" alt="Javascript logo"></img>
                            </div>
                            <div class="skills__item">
                            <img src={require("../img/git_logo.png")} class="" alt="Git logo"></img>
                            </div>
                            <div class="skills__item">
                            <img src={require("../img/react_logo.png")} class="" alt="React.js logo"></img>
                            </div>
                        </div>
                        <div class="skills__row">
                            <div class="skills__item">
                            <img src={require("../img/java_logo.png")} class="" alt="Java logo"></img>
                            </div>
                            <div class="skills__item">
                            <img src={require("../img/mysql_logo.png")} class="" alt="React.js logo"></img>
                            </div>
                        </div>
                    </div>
                </div>
                </section>

                

            </main>
        </div>
    )
}

export default Body;