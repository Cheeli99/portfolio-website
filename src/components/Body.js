import 'bootstrap';
import 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../index.css';

const Body = () => {
    return (
        <div>
            <main role="main" class="inner cover">
                <h1 class="cover-heading">Projects</h1>

                <section id="Games" class="Games">
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
                                            <img src={require("../img/kiosk_first_screen.png")} class="rounded box-img img-fluid mx-3 d-block" alt="Math tutor program"></img>
                                        </a>
                                        <h2 class="icon-text-heading">Center for Applied Technology (CAT) Kiosk Program</h2>
                                        <p class="icon-text">Created with Java and Javafx, this seminar project provides information about the CAT building.</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg mb-4 mb-lg-5">
                                <div class="icon-box-left col-lg-9 mb-4 mb-lg-4">
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
            </main>
        </div>
    )
}

export default Body;