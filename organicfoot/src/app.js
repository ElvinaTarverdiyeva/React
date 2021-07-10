import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './sass/style.scss';



const Nav = () => (
    <>
      
        <header>
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-3">
                    <img src="https://hn.arrowpress.net/lusion/wp-content/uploads/2020/10/Logo1-1.png.webp" alt="" />
                </div>
                <div className="col-md-6">
                <ul >
                    <li >
                        <Link exact to="/" activeClassName="active" className="alink">Home </Link>
                    </li>
                    <li>
                        <Link to="/Vegetable" activeClassName="active" className="alink">Vegetable </Link>
                    </li>
                    <li >
                        <Link to="/Fruits" activeClassName="active" className="alink">Fruits </Link>
                    </li>
                    <li >
                        <Link exact to="/OrganicBox" activeClassName="active" className="alink">Organic Box </Link>
                    </li>
                    <li>
                        <Link to="/DailyProduct" activeClassName="active" className="alink">Daily Product </Link>
                    </li>
                    <li >
                        <Link to="/Blog" activeClassName="active" className="alink">Blog </Link>
                    </li>
                    <li >
                        <Link to="/ContactUs" activeClassName="active" className="alink">Contact Us </Link>
                    </li>
                </ul>
                </div>
                <div className="col-md-3 ikon">
                    <i class="fas fa-search"></i>
                    <i class="far fa-user"></i>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-shopping-basket"></i>
                    </div>
            </div></div>
        </header>
    </>
)




const HomePage = () => (
    <>
    <section className="page1">
<h1>ORGANIC</h1>
<h2>food</h2>
<p>Bring health to your home in a couple of clicks. Buy organic food right from farmers.</p>
<button>View all Products</button>
<div className="daire"></div>
<div className="daire2"></div>
<img src="https://images-ext-2.discordapp.net/external/n_JDuTZD38yubcmcZ3jYA9x8YY0Zz2sAN4VmFkiuAk0/https/hn.arrowpress.net/lusion/wp-content/uploads/revslider/home-organic/salad-fresh-vegetable-salad-8LXZJEU.png.webp" alt=""  className="img1"/>
<img src="https://images-ext-1.discordapp.net/external/-rWhsDu43YnlYTCN08etmnlgxrrsXSme5qdXQlKLMEI/https/hn.arrowpress.net/lusion/wp-content/uploads/revslider/home-organic/leaf.png.webp" alt="" className="img2"/>
<img src="https://images-ext-2.discordapp.net/external/Mf2CfJzP-5Sp6DW81vMJ3zwTh7o2j0vxNBH5_EV6S8c/https/hn.arrowpress.net/lusion/wp-content/uploads/revslider/home-organic/leaf2.png.webp" alt="" className="img3" />
    </section>
    <section className="page2">
<div className="container-fluid">
    <div className="row">
        <div className="col-md-1"></div>

    <div className="col-sm-2 div4-1">
<div className="terevez">
<img src="https://images-ext-1.discordapp.net/external/9RQbtLovglE5aGvohyttDTA4oghWiKgt0O4_7yvDalU/https/hn.arrowpress.net/lusion/wp-content/uploads/2020/10/Home-Organic_03-1.png" alt="" />
<h1>1</h1>
</div>
<h6>Discover</h6>
<p>Take a look at our fruit & Veg bags with seasional produce</p>
    </div>

    <div className="col-sm-2 div4-1">
<div className="terevez">
<img src="https://images-ext-1.discordapp.net/external/3OzIxpEN6kQc-6Kf0Yk53h9a7aA73m7I6DRQzCJcgyg/https/hn.arrowpress.net/lusion/wp-content/uploads/2020/10/Home-Organic_07-1.png" alt="" />
<h1>2</h1>
</div>
<h6>Pick a starter option</h6>
<p>Choose from select produce to start. Keep, add, or remove items</p>
    </div>

    <div className="col-sm-2 div4-1">
<div className="terevez">
<img src="https://images-ext-2.discordapp.net/external/DViV0vJPGxVGNk8XB4H2KePLU6BThps0sXUnu8SkDrw/https/hn.arrowpress.net/lusion/wp-content/uploads/2020/10/Home-Organic_08-1-1.png" alt="" />
<h1>3</h1>
</div>
<h6>Order</h6>
<p>Choose your payment method & delivery option</p>
    </div>

    <div className="col-sm-2 div4-1">
<div className="terevez">
<img src="https://images-ext-2.discordapp.net/external/EY2IPsl2golZF9iPFEEXIYsw73XHFtFC6Xl1Idkcur4/https/hn.arrowpress.net/lusion/wp-content/uploads/2020/10/Home-Organic_10-1-1.png" alt="" />
<h1>4</h1>
</div>
<h6>Get a box</h6>
<p>Your oder will be harvested and delivery to you</p>
    </div>

    <div className="col-sm-2 div4-1">
<div className="terevez">
<img src="https://images-ext-2.discordapp.net/external/3icIz3uoMp7BB_Crne_l11gaYtZaI-FrE3oCgpVDnlw/https/hn.arrowpress.net/lusion/wp-content/uploads/2020/10/Home-Organic_13-2.png" alt="" />
<h1>5</h1>
</div>
<h6>Enjoy!</h6>
<p>Enjoy healthy fresh organic produce and our recipes</p>
    </div>

    <div className="col-md-1"></div>
 </div>
</div>
    </section>
    <section className="page3">
<h1>The Organic Choice</h1>
<div className="container-fluid">
    <div className="row">
        <div className="col-md-3 box4">
            <div className="foto4">
<img src="https://images-ext-2.discordapp.net/external/Qaqf3EJezVfOYpw47--Rf5CaOtDnJpJznlZIOFcuYio/https/hn.arrowpress.net/lusion/wp-content/uploads/2020/10/organic1.jpg.webp" alt="" />
            </div>
            <Link className="linkbox4">Fruits</Link>
            <p>8 items</p>
        </div>

        <div className="col-md-3 box4">
            <div className="foto4">
<img src="https://images-ext-1.discordapp.net/external/njdTipB7JXgF1GkNPsGxOK73FC-KQ_GrtLnl5vZXSF4/https/hn.arrowpress.net/lusion/wp-content/uploads/2020/10/organic.jpg.webp" alt="" />
            </div>
            <Link className="linkbox4">Vegetable</Link>
            <p>8 items</p>
        </div>

        <div className="col-md-3 box4">
            <div className="foto4">
<img src="https://images-ext-1.discordapp.net/external/yWDC335tpRQnIoau0b7OY023auO2OH76mWKfaJ-ILOc/https/hn.arrowpress.net/lusion/wp-content/uploads/2020/10/organic2.jpg.webp" alt="" />
            </div>
            <Link className="linkbox4">Organic Box</Link>
            <p>8 items</p>
        </div>

        <div className="col-md-3 box4">
            <div className="foto4">
<img src="https://images-ext-2.discordapp.net/external/9BLOUb8TgWZ6Fc_nlUD_yqGmX5lds4AksOIVpqYl1ko/https/hn.arrowpress.net/lusion/wp-content/uploads/2020/10/organic3.jpg.webp" alt="" />
            </div>
            <Link className="linkbox4">Daily Product</Link>
            <p>8 items</p>
        </div>
    </div>
</div>
    </section>
    <section className="page4">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 ">
                    <div className="organicbox">
                        <p>SPECIAL OFFER</p>
                        <h1>Organic Box</h1>
                        <h3>%</h3>
                        <h2>40 Off</h2>
                    </div>

                </div>
                <div className="col-md-6 joiceotganic">
                    salam
                    </div>
            </div>
        </div>

    </section>

    </>
)

const VegetablePage = () => (
    <>
        <div>VegetablePage</div>
    </>
)

const FuitsPage = () => (
    <>
      <div>FuitsPage</div>
    </>
)
const OrganicBoxPage = () => (
    <>
        <div>OrganicBoxPage</div>

    </>
)

const DailyPage = () => (
    <>
        <div>DailyPage</div>
    </>
)

const BlogPage = () => (
    <>
      <div>BlogPage</div>
    </>
)
const ContactPage = () => (
    <>
      <div>ContactPage</div>
    </>
)


const App = () => (
    <BrowserRouter>
        <Nav />
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/Vegetable" component={VegetablePage}></Route>
        <Route path="/Fruits" component={FuitsPage}></Route>
        <Route exact path="/OrganicBox" component={OrganicBoxPage}></Route>
        <Route path="/DailyProduct" component={DailyPage}></Route>
        <Route path="/Blog" component={BlogPage}></Route>
        <Route path="/ContactUs" component={ContactPage}></Route>

    </BrowserRouter>
)






ReactDOM.render(<App />, document.getElementById('root'));